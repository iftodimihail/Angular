import { Component, computed, inject } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { AuthDirective } from './auth/auth.directive';
import { AuthService } from './auth/auth.service';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { LogDirective } from './log.directive';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, NgIf, AuthDirective],
  hostDirectives: [LogDirective],
})
export class AppComponent {
  private authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
