import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDataConnect, provideDataConnect } from '@angular/fire/data-connect';
import { provideRouter } from '@angular/router';
import { connectorConfig } from '@firebasegen/default-connector';
import {
  provideQueryClient,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';
import { authInitializerFactory, AuthService } from './services/auth.service';

const queryClient = new QueryClient();

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDataConnect(() => {
      const dc = getDataConnect(connectorConfig);
      return dc;
    }),
    provideQueryClient(queryClient),
    {
      provide: APP_INITIALIZER,
      useFactory: authInitializerFactory,
      deps: [AuthService],
      multi: true,
    },
  ],
};
