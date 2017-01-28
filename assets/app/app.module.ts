import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";

import {AuthentificationComponent} from "./auth/authentification.component";
import {HeaderComponent} from "./header/header.component";

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
        ErrorComponent
    ],
    imports: [
        BrowserModule, 
        routing, 
        HttpModule,
        MessageModule
    ],
    providers: [AuthService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}