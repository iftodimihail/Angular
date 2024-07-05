import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

bootstrapApplication(
  AppComponent
  //{ providers: [provideExperimentalZonelessChangeDetection()] },
).catch((err) => console.error(err));
