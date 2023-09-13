import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class DataSender extends LightningElement {
    sendValue;
    handleChange(event){
        this.sendValue = event.target.value;
        pubsub.fire('senderListener', this.sendValue);
    }
}