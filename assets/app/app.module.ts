import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";

import {AuthentificationComponent} from "./auth/authentification.component";
import {HeaderComponent} from "./header/header.component";

import {LogoutComponent} from "./auth/logout.component";
import {SigninComponent} from "./auth/signin.component";
import {SignupComponent} from "./auth/signup.component";

import {ErrorComponent} from "./errors/error.component";

import {HttpModule} from "@angular/http";

import {AuthService} from './auth/auth.service';
import {ErrorService} from './errors/error.service';

import {routing} from "./app.routing";

import { MessageModule} from "./messages/message.module";

@NgModule({
    declarations: [
        AppComponent,
        AuthentificationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule, 
        routing, 
        ReactiveFormsModule, 
        HttpModule,
        MessageModule
    ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}