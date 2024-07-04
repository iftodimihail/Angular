import { INewTaskData, ITask } from './task/task.model';

import { DUMMY_TASKS } from '../dummy-tasks';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks!: ITask[];
  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    } else {
      this.tasks = DUMMY_TASKS;
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: INewTaskData, userId: string) {
    this.tasks.unshift({
      ...task,
      userId: userId,
      id: new Date().getTime().toString(),
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
