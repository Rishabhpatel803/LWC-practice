import { LightningElement, wire, api} from 'lwc';
import getContacts from '@salesforce/apex/apexWireController.getContacts';

export default class WireApexClass extends LightningElement {
    @api recordId;

    @wire(getContacts, {accId: '$recordId'})
    contacts;
}