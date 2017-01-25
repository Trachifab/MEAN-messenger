import {Component, OnInit} from '@angular/core';
import {MessageService} from "./message.service";
import {Message} from './message.model';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit{

    messageForm: FormGroup;

    constructor(private messageService: MessageService){}

    ngOnInit() {
        this.messageForm = new FormGroup({
            content: new FormControl(null, Validators.required)
        });
    }

    onSubmit(){
        const message = new Message(this.messageForm.value.content, "Moi");
        this.messageService.addMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
        this.messageForm.reset();
    }

}