import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './presentation/welcome/welcome.component';
import { MapComponent } from './shared/map/map.component';
import { SulaChatComponent } from './shared/speak/sula-chat.component';
import { SignUpComponent } from './presentation/sign-up/sign-up.component';
import { LoginComponent } from './presentation/login/login.component';
import { PersonalDataComponent } from './presentation/personal-data/personal-data.component';
import { MenuComponent } from './presentation/menu/menu.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'map', component: MapComponent },
  { path: 'sula-chat', component: SulaChatComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
