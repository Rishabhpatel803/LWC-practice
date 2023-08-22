import { LightningElement } from 'lwc';

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

    handleClick(event){
        
    }
}