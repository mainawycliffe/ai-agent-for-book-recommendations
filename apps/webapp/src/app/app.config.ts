import { ApplicationConfig } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyBPyQxfUqbZ3LcehijHEWUsTQN-lDGJ-ok',
        authDomain: 'angular-genkit-demo.firebaseapp.com',
        databaseURL: 'https://angular-genkit-demo-default-rtdb.firebaseio.com',
        projectId: 'angular-genkit-demo',
        storageBucket: 'angular-genkit-demo.firebasestorage.app',
        messagingSenderId: '603362092209',
        appId: '1:603362092209:web:a014f398175c653b60ee90',
      })
    ),
    provideAuth(() => getAuth()),
  ],
};
