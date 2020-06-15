import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [SignUpComponent, WelcomeComponent, LoginComponent, PersonalDataComponent, MenuComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class PresentationModule { }
