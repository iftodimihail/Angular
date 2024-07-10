import { Component, computed, inject, input } from '@angular/core';

import { Task } from './task/task.model';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})
export class TasksComponent {
  private tasksService = inject(TasksService);

  userId = input.required<string>();
  userTasks = computed(() =>
    this.tasksService.allTasks().filter((task) => {
      return task.userId === this.userId();
    })
  );
}
