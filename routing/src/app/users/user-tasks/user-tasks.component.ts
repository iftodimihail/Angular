import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import {
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  input,
} from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  // userId = input.required<string>();
  private usersService = inject(UsersService);
  private destroyRef = inject(DestroyRef);
  private activatedRoute = inject(ActivatedRoute);

  // username = computed(
  //   () =>
  //     this.usersService.users.find((user) => user.id === this.userId())?.name
  // );

  username = '';

  ngOnInit(): void {
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) =>
        (this.username =
          this.usersService.users.find(
            (user) => user.id === paramMap.get('userId')
          )?.name || ''),
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
