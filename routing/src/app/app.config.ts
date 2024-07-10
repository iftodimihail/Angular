import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';

import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(), // for a component to have access directly as a input to the route params
      withRouterConfig({ paramsInheritanceStrategy: 'always' }) // for children to have access to the route params of the parent
    ),
  ],
};
