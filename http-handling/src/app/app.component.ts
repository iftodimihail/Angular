import { Component, inject } from '@angular/core';

import { AvailablePlacesComponent } from './places/available-places/available-places.component';
import { ErrorModalComponent } from './shared/modal/error-modal/error-modal.component';
import { ErrorService } from './shared/error.service';
import { UserPlacesComponent } from './places/user-places/user-places.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AvailablePlacesComponent, UserPlacesComponent, ErrorModalComponent],
})
export class AppComponent {
  private errorService = inject(ErrorService);

  error = this.errorService.error;
}
