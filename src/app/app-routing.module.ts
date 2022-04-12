import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './Site/dashboard/dashboard-layout.component';
import { HomeLayoutComponent } from './Site/home-layout.component';
import { SignUpLayoutComponent } from './Site/sign-up-layout.component';
import { LoginLayoutComponent } from './Site/login-layout.component';
import { ReactiontimeLayoutComponent } from './Site/tests-components/reaction-time/reactiontime-layout.component';
import { AddGameComponent } from './Site/add-game/add-game.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'dashboard', component: DashboardLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'signup', component: SignUpLayoutComponent},
  {path: 'login', component: LoginLayoutComponent},
  {path: 'tests/reactiontime', component: ReactiontimeLayoutComponent},
  {path: 'admin', component: AddGameComponent},
  {path: 'auth', component: AuthenticationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
