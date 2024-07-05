import { Injectable, inject, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private loggingService = inject(LoggingService);
  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: new Date().toString(),
      status: 'OPEN',
    };

    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
    this.loggingService.log('ADDED TASK with title: ' + taskData.title);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) => {
        if (task.id === taskId) {
          console.log(taskId);
          return {
            ...task,
            status: newStatus,
          };
        }

        return task;
      })
    );

    this.loggingService.log('CHANGED TASK STATUS TO: ' + newStatus);
  }
}
