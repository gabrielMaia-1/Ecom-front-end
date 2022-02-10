import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { MaterialModule } from './material/material.module';
import { MsgDialogComponent } from './components/msg-dialog/msg-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LoginComponent,
    LoginModalComponent,
    MsgDialogComponent,
    MainNavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
