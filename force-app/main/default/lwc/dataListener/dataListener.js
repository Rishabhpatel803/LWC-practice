import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class DataListener extends LightningElement {
    passedData;

    connectedCallback(){
        this.regiser();// if we do not register the event we will not be able to listen at the event
    }

    regiser(){
        pubsub.register("senderListener", this.handleEvent.bind(this));// if you dont bind then pubsub fire method  then it cannot identify where file is located
    }

    handleEvent(messageFromEvt) {
        this.passedData = messageFromEvt
        ? JSON.stringify(messageFromEvt, null, "\t")
        : "no message payload";
    }
}