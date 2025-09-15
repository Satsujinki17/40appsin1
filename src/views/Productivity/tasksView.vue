<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';
import { useTaskManager } from '../../composables/tareasComposable/useTask';

// Inicializar el composable
const {
    tasks,
    addTask,
    editTask,
    deleteTask,
    toggleTaskStatus,
    setDueDate,
    prioritizeTask,
    addLabel
} = useTaskManager();

// Estado del componente
const selectedTaskId = ref<number | null>(null);
const showDueDatePicker = ref(false);
const showPriorityDialog = ref(false);
const showLabelsDialog = ref(false);
const dueDate = ref('');
const selectedPriority = ref(1);
const titleElement = ref<HTMLElement | null>(null);
const contentElement = ref<HTMLElement | null>(null);

// Tarea seleccionada
const selectedTask = computed(() => {
    if (!selectedTaskId.value) return null;
    return tasks.value.find(task => task.taskId === selectedTaskId.value) || null;
});

// Métodos
const selectTask = (taskId: number) => {
    selectedTaskId.value = taskId;
};

const handleAddTask = () => {
    const newTask = addTask('Nueva tarea', 'Descripción de la tarea');
    selectedTaskId.value = newTask.taskId;

    // Enfocar el título después de agregar una nueva tarea
    nextTick(() => {
        if (titleElement.value) {
            titleElement.value.focus();
        }
    });
};

const handleDeleteTask = () => {
    if (!selectedTaskId.value) return;
    if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
        deleteTask(selectedTaskId.value);
        selectedTaskId.value = null;
    }
};

const updateTaskTitle = () => {
    if (!selectedTask.value || !titleElement.value) return;
    const newTitle = titleElement.value.textContent || '';
    editTask(selectedTask.value.taskId, newTitle, selectedTask.value.text_note);
};

const updateTaskContent = () => {
    if (!selectedTask.value || !contentElement.value) return;
    const newContent = contentElement.value.textContent || '';
    editTask(selectedTask.value.taskId, selectedTask.value.title, newContent);
};

const saveTaskChanges = () => {
    // Los cambios ya se guardan automáticamente con los eventos @blur
    // Este método puede usarse para forzar guardado si es necesario
    if (titleElement.value) {
        titleElement.value.blur();
    }
    if (contentElement.value) {
        contentElement.value.blur();
    }
};

const focusTextContent = () => {
    if (contentElement.value) {
        contentElement.value.focus();
    }
};

const setDueDateForTask = () => {
    if (!selectedTask.value || !dueDate.value) return;
    setDueDate(selectedTask.value.taskId, new Date(dueDate.value));
    showDueDatePicker.value = false;
};

const setPriorityForTask = () => {
    if (!selectedTask.value) return;
    prioritizeTask(selectedTask.value.taskId, selectedPriority.value);
    showPriorityDialog.value = false;
};

const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString();
};

const truncateText = (text: string, maxLength: number) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

// Cargar tareas de ejemplo al iniciar
onMounted(() => {
    addTask('Tarea de ejemplo', 'Esta es una tarea de ejemplo para probar la aplicación');
});
</script>


<template>
    <div class="main">
        <div class="task-menu">
            <h1>Task Editor</h1>
            <ul>
                <li @click="handleAddTask">New Task</li>
                <li @click="handleEditTask">Edit</li>
                <li @click="showGroupDialog = true">New Group</li>
                <li @click="showProgressView = true">View Progress</li>
                <li @click="handleDeleteTask" class="delete-btn">Delete</li>
            </ul>
        </div>

        <div class="row">
            <div class="task-list">
                <div v-for="task in tasks" :key="task.taskId" class="task-card"
                    :class="{ selected: selectedTaskId === task.taskId }" @click="selectTask(task.taskId)">
                    <div class="task-card-header">
                        <span class="taskTitle">{{ task.title }}</span>
                        <div class="date-content">
                            <span class="date-style" v-if="task.dueDate">
                                {{ formatDate(task.dueDate) }}
                            </span>
                        </div>
                    </div>
                    <div class="task-view-text">
                        {{ truncateText(task.text_note, 40) }}
                    </div>
                    <div class="task-footer">
                        <span>Estado: {{ task.completed ? 'Completada' : 'Incompleta' }}</span>
                        <span>Prioridad: {{ task.priority || 0 }}</span>
                    </div>
                </div>
            </div>

            <div class="window" v-if="selectedTask">
                <div ref="titleElement" class="titulo" contenteditable @blur="updateTaskTitle"
                    @keydown.enter.prevent="focusTextContent">
                    {{ selectedTask.title }}
                </div>

                <div ref="contentElement" class="body-note" contenteditable @blur="updateTaskContent">
                    {{ selectedTask.text_note }}
                </div>

                <div class="tools-bar">
                    <div class="tools">
                        <div class="tool-Elemnt" @click="toggleTaskStatus(selectedTask.taskId)">
                            {{ selectedTask.completed ? 'Reactivar' : 'Completar' }}
                        </div>
                        <div class="tool-Elemnt" @click="showDueDatePicker = true">
                            Fecha límite
                        </div>
                        <div class="tool-Elemnt" @click="showPriorityDialog = true">
                            Prioridad
                        </div>
                        <div class="tool-Elemnt" @click="showLabelsDialog = true">
                            Etiquetas
                        </div>
                    </div>
                    <div class="save-btn" @click="saveTaskChanges">Save</div>
                </div>
            </div>
            <div v-else class="window placeholder">
                <p>Selecciona una tarea para ver o editar</p>
            </div>
        </div>

        <!-- Diálogos modales -->
        <div v-if="showDueDatePicker" class="modal">
            <div class="modal-content">
                <h3>Establecer fecha límite</h3>
                <input type="date" v-model="dueDate">
                <div class="modal-actions">
                    <button @click="setDueDateForTask">Establecer</button>
                    <button @click="showDueDatePicker = false">Cancelar</button>
                </div>
            </div>
        </div>

        <div v-if="showPriorityDialog" class="modal">
            <div class="modal-content">
                <h3>Establecer prioridad</h3>
                <div class="priority-options">
                    <div v-for="level in [1, 2, 3, 4, 5]" :key="level" class="priority-option"
                        :class="{ selected: selectedPriority === level }" @click="selectedPriority = level">
                        Prioridad {{ level }}
                    </div>
                </div>
                <div class="modal-actions">
                    <button @click="setPriorityForTask">Establecer</button>
                    <button @click="showPriorityDialog = false">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
:root {
    --primary: #1a1a1a;
    --secondary: #494947;
    --accent: #ff6b6b;
    --light: #dcdad9;
    --dark: #51504E;
    --gray: #6c757d;
    --transition: all 0.3s ease;
}

.main {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 5rem);
    margin-top: 5rem;
    background-color: var(--primary);
    color: var(--light);
}

.task-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    background-color: var(--primary);
}

.task-menu h1 {
    font-size: 1.5rem;
    margin-bottom: 20px;
}

.task-menu ul {
    display: flex;
}

.task-menu li {
    display: flex;
    margin: 0px 12px;
    font-size: larger;
    list-style: none;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 5px;
}

.delete-btn {
    color: #ff4444;
}

.row {
    display: flex;
    height: calc(100vh - 5rem - 1rem);
    background-color: var(--light);
    color: var(--color-text);
}

.task-list {
      width: 20rem;
    height: 85vh;
    border-right: 1px solid var(--gray);
    overflow-x: hidden;
    overflow-y: scroll;
}

.task-card {
    margin: 10px 2px;
    padding: 3px;
    background-color: var(--color-text);
    color: var(--color-background-soft);
    border-radius: 5px;
}

.task-card.selected {
    border-color: var(--color-heading);
    background-color: #374e63;
}

.task-card-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
}

.taskTitle {
    font-size: 1.3rem;
}

.date-content {
    display: flex;
    flex-direction: column;
    font-size: small;
    color: var(--accent);
}

.task-view-text {
    color: #555;
    margin-bottom: 10px;
}

.task-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
}

.window {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.window.placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
}

.titulo {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
    min-height: 30px;
    outline: none;
}

.body-note {
    flex: 1;
    padding: 10px;
    line-height: 1.5;
    outline: none;
    overflow-y: auto;
}

.tools-bar {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-top: 1px solid #eee;
    margin-top: 15px;
}

.tools {
    display: flex;
    gap: 10px;
}

.tool-Elemnt {
    padding: 5px 10px;
    background-color: #f0f0f0;
    border-radius: 4px;
    cursor: pointer;
}

.tool-Elemnt:hover {
    background-color: #e0e0e0;
}

.save-btn {
    padding: 8px 15px;
    background-color: #42b883;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

.save-btn:hover {
    background-color: #359f70;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    min-width: 300px;
}

.priority-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 15px 0;
}

.priority-option {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
}

.priority-option:hover {
    background-color: #f0f0f0;
}

.priority-option.selected {
    background-color: #42b883;
    color: white;
}

.modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 15px;
}

.modal-actions button {
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
}

.modal-actions button:first-child {
    background-color: #42b883;
    color: white;
    border: none;
}

.tools-bar {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: calc(100rem - 1rem);
    height: 5rem;
    margin: 0;
    padding: 0;
    font-size: larger;
    background-color: var(--color-text);
    color: var(--color-background-soft);
}

.tools {
    display: flex;
    align-items: center;
}

.tool-Elemnt {
    margin: 0px 10px;
    cursor: pointer;
    background-color: transparent;
}

.tool-Elemnt:hover{
    background-color: transparent;
}

</style>
