import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { ServerComponent } from './server/server.component';
import { CreateServerComponent } from './server/create-server/create-server.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorAlertComponent,
    WarningAlertComponent,
    ServerComponent,
    CreateServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
