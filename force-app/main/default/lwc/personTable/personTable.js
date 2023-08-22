import { LightningElement } from 'lwc';

const column = [
    {label: 'Name', fieldName: 'name'},
    {label: 'Phone', fieldName: 'phone'},
    {label: 'Country', fieldName: 'country'},
];

export default class PersonTable extends LightningElement {
    data = [];
    column = column;
}