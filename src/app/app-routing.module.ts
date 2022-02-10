import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/auth-guard.service';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardService]},
  {path: 'home', component: HomeComponent, loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuardService]},
  {path: '',pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
