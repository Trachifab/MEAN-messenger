import { Message } from "./message.model";
import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable} from 'rxjs';

@Injectable()
export class MessageService {
    private messages: Message[] = [];

    constructor(private http: Http){}

    addMessage(message: Message){
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        return this.http.post('http://localhost:3000/message', body, {headers: headers})
            .map((res) => res.json())
            .catch((error) => Observable.throw(error.json()));
    }

    getMessages(){
        return this.http.get('http://localhost:3000/message')
            .map((res) => {
                const messages = res.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(message.content,'Dummy', message.id, null));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error) => Observable.throw(error.json()));
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}