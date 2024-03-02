import { LightningElement } from 'lwc';

const COLUMNS = [
    {label: 'Name', fieldName: 'name'},
    {label: 'Number', fieldName: 'phoneNumber'},
];

export default class UpsertfetchAccount extends LightningElement {
    data = [];
    column = COLUMNS;

    accName;

    handleChange(event){
        this.accName = event.target.value;
        console.log(event.target.value);
    }

    handleClick(){

    }

}