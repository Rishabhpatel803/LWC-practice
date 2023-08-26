import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class Subscriber extends LightningElement {
    message;
    connectedCallback(){
        this.regiser();// if we do not register the event we will not be able to listen at the event
    }

    regiser(){
        window.console.log("event registered");
        pubsub.regiseter("simepleEvent", this.handleEvent.bind(this));// if you dont bind then pubsub fire method  then it cannot identify where file is located
    }

    handleEvent(messageFromEvt) {
        window.console.log("Event handled", messageFromEvt);
        this.message = messageFromEvt
        ? JSON.stringify(messageFromEvt, null, "\t")
        : "no message payload";
    }
}