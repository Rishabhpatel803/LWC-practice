import { LightningElement, wire } from 'lwc';
import getAccountDetails from '@salesforce/apex/AccountController.getAccountDetails';

export default class DynamicRendering extends LightningElement {

    accountData;
    accData = [];
    error;

    @wire(getAccountDetails)
    wiredFunction({error,data}){
        if(data){
            this.accData = data;
            this.error = undefined;
        }else if(error){
            this.accData = undefined;
            this.error = error;
        }
    }

    handleClick(){
        this.accountData = this.accData;
    }
}