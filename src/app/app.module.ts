import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { ServerComponent } from './server/server.component';
import { CreateServerComponent } from './server/create-server/create-server.component';
import { HighlightedTextDirective } from './directives/highlighted-text.directive';
import { UsersComponent } from './pages/users/users.component';
import { FeaturesComponent } from './pages/features/features.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { BasicComponent } from './pages/basic/basic.component';
import { UserComponent } from './pages/user/user.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const appRoutes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'users/create',
  component: CreateUserComponent
}, {
  path: 'users',
  component: UsersComponent
}, {
  path: 'users/:id',
  component: UserComponent
}, {
  path: 'features',
  component: FeaturesComponent
}, {
  path: 'basic',
  component: BasicComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    ErrorAlertComponent,
    WarningAlertComponent,
    ServerComponent,
    CreateServerComponent,
    HighlightedTextDirective,
    UsersComponent,
    FeaturesComponent,
    HomeComponent,
    HeaderComponent,
    BasicComponent,
    UserComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
