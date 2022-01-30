import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UsersComponent } from './pages/users/users.component';
import { AuthGuardService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: "users",
    component: UsersComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: "users/:id",
    component: UserDetailsComponent ,
    canActivate: [AuthGuardService],
  },
  {
    path: "login",
    component: LoginComponent ,
  },
  {
    path: "register",
    component: RegisterComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
