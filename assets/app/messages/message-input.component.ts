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
    message: Message;

    constructor(private messageService: MessageService){}

    ngOnInit() {
        this.messageForm = new FormGroup({
            content: new FormControl(null, Validators.required)
        });

        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    }

    onClear() {
        this.message = null;
        this.messageForm.reset();
    }

    onSubmit(){
        if(this.message){
            //EDIT
            this.message.content = this.messageForm.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(

                );
            this.message = null;
        } else {
            //CREATE
            const message = new Message(this.messageForm.value.content, "Moi");
            this.messageService.addMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
        }
        this.messageForm.reset();
    }

}