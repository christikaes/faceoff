import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'build') {
  enableProdMode();
}

const startBootstrap = function() {
  platformBrowserDynamic().bootstrapModule(AppModule);
}

// if cordova
if (window.cordova) {
  // wait for device ready if cordova
  document.addEventListener('deviceready', startBootstrap, false);
} else { // else just start
  startBootstrap();
}
