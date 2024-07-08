import { Injectable, inject, signal } from '@angular/core';
import { catchError, map, tap, throwError } from 'rxjs';

import { ErrorService } from '../shared/error.service';
import { HttpClient } from '@angular/common/http';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  private httpClient = inject(HttpClient);
  private errorService = inject(ErrorService);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Something went wrong fetching the available places. Please try again later.'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Something went wrong fetching the favorite places. Please try again later.'
    ).pipe(
      // kind of sets up a new subscription before the main subscription
      tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces),
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    return this.httpClient
      .put<{ userPlaces: Place[] }>('http://localhost:3000/user-places', {
        placeId: place.id,
      })
      .pipe(
        catchError(() => {
          this.errorService.showError('Failed to store the selected place.');
          return throwError(
            () => new Error('Failed to store the selected place.')
          );
        }),
        tap({
          next: (response) => this.userPlaces.set(response.userPlaces),
        })
      );
  }

  removeUserPlace(placeId: Place['id']) {
    return this.httpClient
      .delete<{ userPlaces: Place[] }>(
        `http://localhost:3000/user-places/${placeId}`
      )
      .pipe(
        catchError(() => {
          this.errorService.showError('Failed to delete the selected place.');
          return throwError(
            () => new Error('Failed to delete the selected place.')
          );
        }),
        tap({
          next: (response) => this.userPlaces.set(response.userPlaces),
        })
      );
  }

  private fetchPlaces(url: string, errorMessage: string) {
    return (
      this.httpClient
        .get<{ places: Place[] }>(url, {
          // observe: 'response'
        })
        // transform data
        .pipe(
          map((response) => response.places),
          catchError(() => {
            this.errorService.showError(errorMessage);
            return throwError(() => new Error(errorMessage));
          })
        )
    );
  }
}
