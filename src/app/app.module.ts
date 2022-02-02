import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Navigation/header/topnavbar.component';
import { TestsCardComponent } from './tests/tests.card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TestsCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
