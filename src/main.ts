import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { QrCodeComponent } from './app/qr-code/qr-code.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  // bootstrapApplication(QrCodeComponent);
// import { bootstrapApplication } from '@angular/platform-browser';
// import { QrCodeComponent } from './app/qr-code/qr-code.component';

// bootstrapApplication(QrCodeComponent);
