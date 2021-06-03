import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IotComponent } from './iot/iot.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './pages/users/users.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path : '',redirectTo:'/iot',pathMatch:'full'},
  {path : 'login',component:LoginComponent},
  {path : 'register',component:RegisterComponent},
  {path : 'users',component:UsersComponent},
  {path : 'iot',component : IotComponent},
  {path : 'welcome' , component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
