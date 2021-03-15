import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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

const appRoutes = [{
  path: '',
  component: HomeComponent
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
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
