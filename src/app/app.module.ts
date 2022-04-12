import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Navigation/header/topnavbar.component';
import { TestsCardComponent } from './tests/tests.card.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardLayoutComponent } from './Site/dashboard/dashboard-layout.component';
import { HomeLayoutComponent } from './Site/home-layout.component';
import { TitleCardComponent } from './Site/home/title-card.component';
import { SignUpLayoutComponent } from './Site/sign-up-layout.component';
import { LoginLayoutComponent } from './Site/login-layout.component';
import { ReactiontimeLayoutComponent } from './Site/tests-components/reaction-time/reactiontime-layout.component';
import { DashboardSidebarComponent } from './Site/dashboard/dashboard-sidebar.component';
import { DashboardTitleCardComponent } from './Site/dashboard/dashboard-title-card.component';
import { ReactiontimeHeaderComponent } from './Site/tests-components/reaction-time/reactiontime-header.component';
import { ReactiontimeStatsComponent } from './Site/tests-components/reaction-time/reactiontime-stats.component';
import { ReactiontimeInfoComponent } from './Site/tests-components/reaction-time/reactiontime-info.component';
import { DashboardDataComponent } from './Site/dashboard/dashboard-data.component';
import { DashboardActivityFeedComponent } from './Site/dashboard/dashboard-activity-feed.component.';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddGameComponent } from './Site/add-game/add-game.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './auth/authentication/authentication.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TestsCardComponent,
    DashboardLayoutComponent,
    HomeLayoutComponent,
    TitleCardComponent,
    SignUpLayoutComponent,
    LoginLayoutComponent,
    ReactiontimeLayoutComponent,
    DashboardSidebarComponent,
    DashboardTitleCardComponent,
    ReactiontimeHeaderComponent,
    ReactiontimeStatsComponent,
    ReactiontimeInfoComponent,
    DashboardDataComponent,
    DashboardActivityFeedComponent,
    UserInfoComponent,
    AddGameComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
