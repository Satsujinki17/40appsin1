<template>
    <div>

        <h1>Hola</h1>


    </div>
</template>

<script setup lang="ts">


class tasksCreator {
    title: string;
    text_note: string;

    constructor(public taskId: number, title: string, text_note: string) {

        this.taskId = taskId;
        this.title = title;
        this.text_note = text_note;


    }

    newTask() {
        
    }

    editTask() {

    }

    deleteTask() {

    }

}

class taskManagement extends tasksCreator {


    porsentage: number; 

    constructor(porsentage: number, taskId: number) {

        super(taskId);
        this.porsentage = porsentage; 


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

<style scoped>
div {
    display: flex;
    justify-content: center;
    margin-top: 10rem;

}
</style>