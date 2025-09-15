<script setup lang="ts">

import { ref, computed, onMounted } from "vue";


interface Task {
    taskId: number;
    title: string;
    text_note: string;
}

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

    deleteTask(taskArray: Task[]) {
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

                        <div class="date-content">
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

                <div class="task-card">
                    <div class="task-card-header">
                        <span class="taskTitle">Titulo</span>

                        <div class="date-content">
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

                <div class="task-card">
                    <div class="task-card-header">
                        <span class="taskTitle">Titulo</span>

                        <div class="date-content">
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

                <div class="task-card">
                    <div class="task-card-header">
                        <span class="taskTitle">Titulo</span>

                        <div class="date-content">
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

                <div class="task-card">
                    <div class="task-card-header">
                        <span class="taskTitle">Titulo</span>

                        <div class="date-content">
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

                <div class="task-card">
                    <div class="task-card-header">
                        <span class="taskTitle">Titulo</span>

                        <div class="date-content">
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

                <div class="task-card">
                    <div class="task-card-header">
                        <span class="taskTitle">Titulo</span>

                        <div class="date-content">
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

                <div class="task-card">
                    <div class="task-card-header">
                        <span class="taskTitle">Titulo</span>

                        <div class="date-content">
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

                <div class="titulo" id="titleNote">Titulo De la nota</div>

                <br>
                <div class="body-note" id="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni facere
                    cum illo
                    dignissimos nihil rerum veritatis, repellendus fuga, eum pariatur debitis animi maiores praesentium
                    quia iste, voluptate eaque repellat.
                    Quam magni quasi laudantium id? Similique ipsa voluptate deserunt sit qui odio nam eos dicta, nisi
                    magni natus dolore, delectus quibusdam earum facilis perferendis reprehenderit unde, aut quod error
                    sequi.
                    Laborum eius aliquid soluta, esse earum eos beatae? Sunt facere atque eligendi odio aliquam velit
                    laudantium, ullam, omnis ab deserunt provident. Velit omnis eos laborum laboriosam expedita odit
                    quae et!
                    Illum praesentium quo ex reiciendis quaerat provident rem molestias sint optio quod. Placeat
                    consequuntur, necessitatibus nobis quo dolore maxime laboriosam tempore natus iste soluta ab,
                    repellat illum facilis incidunt veritatis.</div>

                <div class="tools-bar">

                    <div class="tools">
                        <div class="tool-Elemnt" id="">Font Style</div>
                        <div class="tool-Elemnt" id="">Type List</div>
                        <div class="tool-Elemnt" id="">Grafico</div>
                        <div class="tool-Elemnt" id="">Table</div>
                    </div>

                    <div class="" id="">Save</div>
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

.task-menu ul {
    display: flex;
}

.task-menu ul li {
    display: flex;
    margin: 0px 12px;
    font-size: larger;
    list-style: none;
    cursor: pointer;
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

.task-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
}

.window {
    width: calc(100rem - 5rem);
    margin: 10px;
    overflow: hidden;
}

.titulo {
    font-size: xx-large;
    text-align: center;
}

.body-note {
    padding: 1rem 2rem;
    font-size: large;
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
}
</style>
