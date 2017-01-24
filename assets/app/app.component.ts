import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'

})
export class AppComponent {
    
    private message = {
        content : 'A message',
        author : "Moi"
    };


}