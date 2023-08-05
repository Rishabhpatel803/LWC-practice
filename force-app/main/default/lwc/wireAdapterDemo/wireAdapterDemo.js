import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone'
export default class WireAdapterDemo extends LightningElement {
    @api recordId;

    @wire(getRecord,{recordId: '$recordId', fields:[NAME_FIELD,PHONE_FIELD]})
    wiredData;

    get name(){
        return getFieldValue(this.wiredData.data, NAME_FIELD);
    }
    get phone(){
        return getFieldValue(this.wiredData.data, PHONE_FIELD);
    }
}