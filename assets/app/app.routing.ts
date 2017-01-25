import {Routes, RouterModule} from "@angular/router";

import {MessagesComponent} from "./messages/messages.component";
import {AuthentificationComponent} from "./auth/authentification.component";

const APP_ROUTES : Routes = [
    {
        path: 'messages', component: MessagesComponent 
    },
    {
        path: 'auth', component: AuthentificationComponent 
    },
    {
        path: '', redirectTo: '/messages', pathMatch: 'full' 
    },

];

export const routing = RouterModule.forRoot(APP_ROUTES);