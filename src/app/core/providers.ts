import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from '../app.routes';

export const coreProviders = [
  provideRouter(routes, withInMemoryScrolling({
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  }))
];
