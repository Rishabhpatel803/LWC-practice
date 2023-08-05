import { LightningElement } from 'lwc';
import getAccList from '@salesforce/apex/AccountController.getAccList';

export default class ImperativeApex extends LightningElement {
    accounts;
    error;

    handleClick(){
        getAccList()
        .then((result) => {
            this.accounts = result;
            this.error = undefined;
        })
        .catch((error) => {
            this.error =error;
            this.accounts = undefined;
        });
    }
}