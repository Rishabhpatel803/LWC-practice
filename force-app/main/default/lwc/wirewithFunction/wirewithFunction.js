import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class WirewithFunction extends LightningElement {
    @api recordId;
    accounts;
    error;

    @wire(getRecord, {recordId: '$recordId', fields:['Account.Name']})
    wiredAccount({error, data}){
        if(data){
            //perform any logic here
            console.log('###GEtting thee data from wire function');

            this.accounts = data;
        }
        else if(error){
            this.error = error;
            console.log('###Error : '+error.body.message);
        }
    }
}