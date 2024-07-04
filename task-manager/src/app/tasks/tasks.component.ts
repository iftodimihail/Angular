import { Component, Input, inject } from '@angular/core';

import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedUserName!: string;
  @Input({ required: true }) selectedUserId!: string;
  isAddingTask = false;
  private tasksService = inject(TaskService);

  get userTasks() {
    return this.tasksService.getUserTasks(this.selectedUserId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
