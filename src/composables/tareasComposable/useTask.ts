// useTaskManager.ts
import { ref, computed, reactive, type Ref } from 'vue';

export interface Task {
  taskId: number;
  title: string;
  text_note: string;
  completed?: boolean;
  priority?: number;
  labels?: string[];
  projectId?: number;
  dueDate?: Date | null;
  reminder?: Date | null;
  assignedTo?: number;
  comments?: Comment[];
  subtasks?: Subtask[];
  dependencies?: number[];
  recurrence?: Recurrence;
  history?: TaskHistory[];
}

export interface Comment {
  id: number;
  userId: number;
  text: string;
  date: Date;
}

export interface Subtask {
  id: number;
  title: string;
  completed: boolean;
}

export interface Recurrence {
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  endDate?: Date;
}

export interface TaskHistory {
  versionId: number;
  task: Task;
  date: Date;
}

export function useTaskManager() {
  // Estado reactivo para las tareas
  const tasks: Ref<Task[]> = ref([]);
  let nextId = 1;

  // Computed properties
  const totalTasks = computed(() => tasks.value.length);
  const completedTasks = computed(() => tasks.value.filter(task => task.completed).length);
  const pendingTasks = computed(() => tasks.value.filter(task => !task.completed).length);

  // === Funciones básicas de gestión (tasksCreator) ===
  const addTask = (title: string, text_note: string = ''): Task => {
    const newTask: Task = {
      taskId: nextId++,
      title,
      text_note,
      completed: false,
      priority: 0,
      labels: [],
      comments: [],
      subtasks: [],
      dependencies: [],
      history: []
    };
    tasks.value.push(newTask);
    addToHistory(newTask.taskId, newTask);
    return newTask;
  };

  const editTask = (taskId: number, title: string, text_note: string): boolean => {
    const task = tasks.value.find(t => t.taskId === taskId);
    if (task) {
      addToHistory(taskId, { ...task });
      task.title = title;
      task.text_note = text_note;
      return true;
    }
    return false;
  };

  const deleteTask = (taskId: number): boolean => {
    const index = tasks.value.findIndex(task => task.taskId === taskId);
    if (index !== -1) {
      tasks.value.splice(index, 1);
      return true;
    }
    return false;
  };

  const getTaskById = (taskId: number): Task | undefined => {
    return tasks.value.find(task => task.taskId === taskId);
  };

  // === Gestión de estado (taskManagement) ===
  const markAsCompleted = (taskId: number): boolean => {
    const task = getTaskById(taskId);
    if (task) {
      task.completed = true;
      return true;
    }
    return false;
  };

  const toggleTaskStatus = (taskId: number): boolean => {
    const task = getTaskById(taskId);
    if (task) {
      task.completed = !task.completed;
      return true;
    }
    return false;
  };

  const setProgress = (taskId: number, progress: number): boolean => {
    // Lógica de progreso según necesidad
    return true;
  };

  // === Organización (taskOrganizer) ===
  const addLabel = (taskId: number, label: string): boolean => {
    const task = getTaskById(taskId);
    if (task) {
      if (!task.labels) task.labels = [];
      task.labels.push(label);
      return true;
    }
    return false;
  };

  const prioritizeTask = (taskId: number, level: number): boolean => {
    const task = getTaskById(taskId);
    if (task) {
      task.priority = level;
      return true;
    }
    return false;
  };

  const assignToProject = (taskId: number, projectId: number): boolean => {
    const task = getTaskById(taskId);
    if (task) {
      task.projectId = projectId;
      return true;
    }
    return false;
  };

  // === Recordatorios (rememberTasks) ===
  const setDueDate = (taskId: number, date: Date): boolean => {
    const task = getTaskById(taskId);
    if (task) {
      task.dueDate = date;
      return true;
    }
    return false;
  };

  const setReminder = (taskId: number, datetime: Date): boolean => {
    const task = getTaskById(taskId);
    if (task) {
      task.reminder = datetime;
      return true;
    }
    return false;
  };

  const snoozeTask = (taskId: number, hours: number): boolean => {
    const task = getTaskById(taskId);
    if (task && task.reminder) {
      task.reminder = new Date(task.reminder.getTime() + hours * 60 * 60 * 1000);
      return true;
    }
    return false;
  };

  // === Búsqueda y filtrado (search_filter) ===
  const searchTask = (query: string): Task[] => {
    return tasks.value.filter(task => 
      task.title.toLowerCase().includes(query.toLowerCase()) ||
      task.text_note.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filterByStatus = (completed: boolean): Task[] => {
    return tasks.value.filter(task => task.completed === completed);
  };

  const filterByPriority = (level: number): Task[] => {
    return tasks.value.filter(task => task.priority === level);
  };

  // === Operaciones por lotes (Batch_operations) ===
  const bulkDelete = (taskIds: number[]): void => {
    tasks.value = tasks.value.filter(task => !taskIds.includes(task.taskId));
  };

  const bulkAssignLabel = (taskIds: number[], label: string): void => {
    tasks.value.forEach(task => {
      if (taskIds.includes(task.taskId)) {
        if (!task.labels) task.labels = [];
        task.labels.push(label);
      }
    });
  };

  const archiveCompleted = (): void => {
    // Lógica de archivado aquí
  };

  // === Colaboraciones (colaborations) ===
  const assignTaskToUser = (taskId: number, userId: number): boolean => {
    const task = getTaskById(taskId);
    if (task) {
      task.assignedTo = userId;
      return true;
    }
    return false;
  };

  const addComment = (taskId: number, userId: number, text: string): boolean => {
    const task = getTaskById(taskId);
    if (task) {
      if (!task.comments) task.comments = [];
      task.comments.push({
        id: task.comments.length + 1,
        userId,
        text,
        date: new Date()
      });
      return true;
    }
    return false;
  };

  // === Historial y recuperación (recoverTask) ===
  const addToHistory = (taskId: number, taskData: Task): void => {
    const task = getTaskById(taskId);
    if (task) {
      if (!task.history) task.history = [];
      task.history.push({
        versionId: task.history.length + 1,
        task: { ...taskData },
        date: new Date()
      });
    }
  };

  const getTaskHistory = (taskId: number): TaskHistory[] | undefined => {
    const task = getTaskById(taskId);
    return task?.history;
  };

  const restoreVersion = (taskId: number, versionId: number): boolean => {
    const task = getTaskById(taskId);
    if (task && task.history) {
      const version = task.history.find(h => h.versionId === versionId);
      if (version) {
        Object.assign(task, version.task);
        return true;
      }
    }
    return false;
  };

  // === Planificación (planification) ===
  const sortByPriority = (): Task[] => {
    return [...tasks.value].sort((a, b) => (b.priority || 0) - (a.priority || 0));
  };

  const getOverdueTasks = (): Task[] => {
    const now = new Date();
    return tasks.value.filter(task => 
      task.dueDate && task.dueDate < now && !task.completed
    );
  };

  const suggestNextTask = (): Task | undefined => {
    return tasks.value
      .filter(task => !task.completed)
      .sort((a, b) => (b.priority || 0) - (a.priority || 0))[0];
  };

  // === Exportación (integration_export) ===
  const exportToJSON = (): string => {
    return JSON.stringify(tasks.value, null, 2);
  };

  const generateReport = (): { total: number, completed: number, pending: number } => {
    return {
      total: totalTasks.value,
      completed: completedTasks.value,
      pending: pendingTasks.value
    };
  };

  // === Métodos avanzados (advanced_Methods) ===
  const setRecurrence = (taskId: number, frequency: 'daily' | 'weekly' | 'monthly' | 'yearly', interval: number, endDate?: Date): boolean => {
    const task = getTaskById(taskId);
    if (task) {
      task.recurrence = { frequency, interval, endDate };
      return true;
    }
    return false;
  };

  const addSubtask = (taskId: number, title: string): boolean => {
    const task = getTaskById(taskId);
    if (task) {
      if (!task.subtasks) task.subtasks = [];
      task.subtasks.push({
        id: task.subtasks.length + 1,
        title,
        completed: false
      });
      return true;
    }
    return false;
  };

  const setDependency = (taskId: number, dependsOnTaskId: number): boolean => {
    const task = getTaskById(taskId);
    if (task) {
      if (!task.dependencies) task.dependencies = [];
      if (!task.dependencies.includes(dependsOnTaskId)) {
        task.dependencies.push(dependsOnTaskId);
      }
      return true;
    }
    return false;
  };

  // === Mejoras adicionales (Additional_Improvements) ===
  const validateTask = (taskId: number): string[] => {
    const errors: string[] = [];
    const task = getTaskById(taskId);
    
    if (task) {
      if (!task.title) errors.push('El título es requerido');
      if (task.dueDate && task.dueDate < new Date()) errors.push('La fecha de vencimiento ya pasó');
    }
    
    return errors;
  };

  const handleError = (error: Error, context: string): void => {
    console.error(`Error en ${context}:`, error.message);
  };

  return {
    // Estado
    tasks,
    
    // Computed
    totalTasks,
    completedTasks,
    pendingTasks,
    
    // Métodos básicos
    addTask,
    editTask,
    deleteTask,
    getTaskById,
    
    // Gestión de estado
    markAsCompleted,
    toggleTaskStatus,
    setProgress,
    
    // Organización
    addLabel,
    prioritizeTask,
    assignToProject,
    
    // Recordatorios
    setDueDate,
    setReminder,
    snoozeTask,
    
    // Búsqueda y filtrado
    searchTask,
    filterByStatus,
    filterByPriority,
    
    // Operaciones por lotes
    bulkDelete,
    bulkAssignLabel,
    archiveCompleted,
    
    // Colaboraciones
    assignTaskToUser,
    addComment,
    
    // Historial
    getTaskHistory,
    restoreVersion,
    
    // Planificación
    sortByPriority,
    getOverdueTasks,
    suggestNextTask,
    
    // Exportación
    exportToJSON,
    generateReport,
    
    // Métodos avanzados
    setRecurrence,
    addSubtask,
    setDependency,
    
    // Validación y errores
    validateTask,
    handleError
  };
}