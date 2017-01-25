import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";

import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";

import {AuthentificationComponent} from "./auth/authentification.component";
import {HeaderComponent} from "./header/header.component";

import {LogoutComponent} from "./auth/logout.component";
import {SigninComponent} from "./auth/signin.component";
import {SignupComponent} from "./auth/signup.component";

import {routing} from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthentificationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}