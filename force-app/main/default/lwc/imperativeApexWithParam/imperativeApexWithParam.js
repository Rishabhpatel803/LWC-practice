import { LightningElement } from 'lwc';
import findAccList from '@salesforce/apex/AccountController.findAccList';

export default class ImperativeApexWithParam extends LightningElement {
    searchKey;
    accounts;
    error;

    handleOnChange(event){
        this.searchKey = event.target.value;
    }

    handleClick(){
        findAccList({keyword : this.searchKey})
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