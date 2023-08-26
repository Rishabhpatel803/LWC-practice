import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
const column = [
    {label: 'Name', fieldName: 'name'},
    {label: 'Phone', fieldName: 'phone'},
    {label: 'Country', fieldName: 'country'},
];

export default class PersonTable extends LightningElement {
    data = [];
    dynamicData = [];
    column = column;

    connectedCallback(){
        this.publishRegister();
    }

    publishRegister(){
        console.log('event registered');
        pubsub.register("dataEvent", this.handleEvent.bind(this));
    }

    handleEvent(messageFromPublisher){
        let newData= messageFromPublisher;

        this.dynamicData.push({ name: newData.name, phone: newData.phone, country: newData.country });

        this.data = [...this.dynamicData];
    }
}