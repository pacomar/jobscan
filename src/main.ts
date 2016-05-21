import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { JobscanAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(JobscanAppComponent, [
	FIREBASE_PROVIDERS,
	defaultFirebase('https://jobscan.firebaseio.com')
]);
