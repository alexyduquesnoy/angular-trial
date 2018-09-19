// -- MODULES --
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// --SERVICES --
import { AppareilService } from './shared/services/appareil.service';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';

// -- COMPONENTS --
import { AppComponent } from './components/app.component';
import { AuthComponent } from './components/auth/auth.component';
import { AppareilViewComponent } from './components/appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './components/single-appareil/single-appareil.component';
import { AppareilItemComponent } from './components/appareil-item/appareil-item.component';
import { ErrorNotFoundComponent } from './components/error-not-found/error-not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { EditAppareilComponent } from './components/edit-appareil/edit-appareil.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: AppareilViewComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'appareils', component: AppareilViewComponent, canActivate: [AuthGuard]},
  {path: 'appareils/:id', component: SingleAppareilComponent, canActivate: [AuthGuard]},
  {path: 'edit', component: EditAppareilComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UserListComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: 'not-found', component: ErrorNotFoundComponent},
  {path: '**', component: ErrorNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilItemComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    ErrorNotFoundComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
