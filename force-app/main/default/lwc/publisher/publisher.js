import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class Publisher extends LightningElement {
    handleClick(){
        window.console.log('Event Firing....');
        let message = {
            "message" : 'Hello Pubsub',
            "name" : 'Rishabh Calling'
        }
        pubsub.fire('simepleEvent', message);
        window.console.log("Event Fired");
    }
}