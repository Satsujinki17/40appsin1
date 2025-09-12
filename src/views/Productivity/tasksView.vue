<template>
    <div class="main">

        <div class="task-menu">
            <!--Menu de tareas-->
            <h1>Task Editor</h1>

            <ul>
                <li>New</li>
                <li>Edit</li>
                <li>New Group</li>
                <li>VIew Progress</li>
                <li>Delete</li>
            </ul>
        </div>

        <div class="row">
            <div class="task-list">
                <div class="task-card">
                    <div class="task-card-header">
                        <span class="taskTitle">Titulo</span>
                        <div>
                            <span class="date-style">Fecha inicio</span>
                            <span class="date-style">Fecha Fin</span>
                        </div>
                    </div>
                    <div class="task-view-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing...
                    </div>
                    <div class="task-footer">
                        <span>Estado: Incompleta</span>
                        <span>Avance: 5%</span>
                    </div>
                </div>
            </div>
            <div class="window">
                Atque laborum iure laudantium ut eaque delectus
                fuga ipsam cupiditate pariatur aspernatur sint, eligendi nostrum consequuntur amet placeat iste
                architecto rerum vel.
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
    margin-top: 5rem;
    background-color: var(--primary);
    color: var(--light);
    height: calc(100vh - 5rem);
}

.task-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary);
    height: 5rem;
}

.task-menu ul {
    display: flex;
}

.task-menu ul li {
    list-style: none;
    margin: 0px 12px 0px 12px;
    font-size: larger;
    cursor: pointer;
}

.row {
    display: flex;
    color: var(--color-text);
    background-color: var(--light);
    height: calc(100vh - 5rem - 1rem);
}


.task-list {
    width: 20%;
    border-right: 1px solid var(--gray);
}
</style>



<script setup lang="ts">

import { ref, computed, onMounted } from "vue";


class tasksCreator {


    constructor(
        public taskId: number,
        public title: string,
        public text_note: string
    ) { }

    newTask(newTitle: string, newText_note: string) {

        this.title = newTitle;
        this.text_note = newText_note;
    }

    editTask(editTitle: string, editText_note: string) {

        this.title = editTitle;
        this.text_note = editText_note;

    }

    deleteTask(taskArray: any) {

        const index = taskArray.findIndex(task => task.taskId === this.taskId);
        if (index !== -1) {
            taskArray.splice(index, 1);
        }
    }
}

class taskManagement extends tasksCreator {

    constructor(public porsentage: number, taskId: number) {
        super(taskId, '', '');
    }

    //parametros taskId
    markAsCompleted() {

    }

    //parametros taskId
    toggleTaskStatus() {

    }

    //parametros taskId, porcentage
    setProgress() {

    }

}

class taskOrganizer {
    constructor() {

    }

    //parametros taskId, label
    addLabel() {
        //agregar etiquetas/categorias
    }

    //parametros taskId, level
    priorizeTask() {
        //asignar prioridad
    }

    //parametros taskId, ProjectId
    assignToProject() {
        //agrupar tareas en proyectos
    }
}

class rememberTasks {
    constructor() {

    }


    //parametros taskId, date
    setDueDate() {
        //establecer fecha limite
    }


    //parametros taskId, datetime
    setReminder() {
        //programar recoradtorio
    }

    //parametros taskId, hours
    snoozeTask() {
        //posponer 
    }
}

class search_filter {
    constructor() {

    }

    //parametros query
    searchTask() {

    }

    //parametros status
    filterByStatus() {

    }

    //parametros level
    filterByPriority() {

    }


}

class Batch_operations {
    constructor() {

    }

    //tasksIds
    bulkDelete() {

    }

    //tasksIds, label
    bulkAssignLabel() {

    }

    //sin parametros
    archiveCompleted() {

    }
}

class colaborations {
    constructor() {

    }

    //parametros taskId, userId
    assignTaskToUser() {

    }

    //parametros taskId, comment
    addComment() {
        //agg comentarios/discusion a una tarea
    }
}

class recoverTask {
    constructor() {

    }


    //parametros taskId
    getTaskHistory() {

    }

    //taskId, versionId
    restoreVersion() {

    }
}

class planification {
    constructor() {
    }


    sortByPriority() {

    }

    getOverdueTasks() {

    }

    suggestNextTask() {

    }
}

class integration_export {
    constructor() {

    }

    exportToJASON() {

    }

    generateReport() {

    }
}

class advanced_Methods {
    constructor() {

    }

    //taskId, frecuency
    recurringTask() {

    }

    //taskId, subTasks
    addSubtasks() {

    }

    //taskId, dependencie
    setDependencies() {

    }
}


class Additional_Improvements {
    constructor() {

    }


    ticketValidation() {

    }

    errManagement() {

    }

}



</script>