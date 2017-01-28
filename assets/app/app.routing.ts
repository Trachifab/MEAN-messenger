import {Routes, RouterModule} from "@angular/router";

import {MessagesComponent} from "./messages/messages.component";
import {AuthentificationComponent} from "./auth/authentification.component";

const APP_ROUTES : Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full' },
    {path: 'messages', component: MessagesComponent},
    {path: 'auth', component: AuthentificationComponent, loadChildren: './auth/auth.module#AuthModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);