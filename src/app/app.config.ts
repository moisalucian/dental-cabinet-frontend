import { ApplicationConfig } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { GtmTitleStrategy } from './core/seo/gtm-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    { provide: TitleStrategy, useClass: GtmTitleStrategy },
  ]
};
