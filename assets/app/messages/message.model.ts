export class Message{

    private content: string;
    private username: string;
    private messageId?: string;
    private userId?: string;

    constructor(content: string,
                username: string, 
                messageId?:string,
                userId?: string){

            this.content = content;
            this.username = username;
            this.messageId = messageId;
            this.userId = userId;
    }



}