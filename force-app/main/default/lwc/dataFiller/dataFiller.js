import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class DataFiller extends LightningElement {

    name;
    phone;
    country;

    handleChange(event){
        const selectedEvent = event.target.name;
        if(selectedEvent === 'name'){
            this.name = event.target.value;
        }else if(selectedEvent === 'phone'){
            this.phone = event.target.value;
        }else if(selectedEvent === 'country'){
            this.country = event.target.value;
        }
    }

    handleClick(){
        let message = {
            "name" : this.name,
            "phone" : this.phone,
            "country" : this.country
        };
        pubsub.fire('dataEvent', message);
    }
}