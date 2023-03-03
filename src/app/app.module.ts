import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogInAndSignUpComponent } from './log-in-and-sign-up/log-in-and-sign-up.component';
import { RememberMeComponent } from './remember-me/remember-me.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [AppComponent, LogInAndSignUpComponent, RememberMeComponent, MessageComponent],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
