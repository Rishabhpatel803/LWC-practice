import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/scenarioHandler.getAccounts';

export default class LWCExchangeScenario6 extends LightningElement {

    accountAutocomplete = [];
    accountName = '';
    error;
    handleChange(event){
        // this handle change function is for the combobox and searching account

        const selectedEvent = event.target.name;
        if( selectedEvent === 'scode'){

        }
        else if( selectedEvent === 'acc'){
            this.accountName = event.target.value;
            if(this.accountName.length > 2){
                getAccounts({search : this.accountName})
                    .then(accounts => {
                        this.accountAutocomplete = accounts;
                    })
                    .catch(error => {
                        this.error = error;
                    });
            }
            else{
                this.accountAutocomplete = [];
            }
        }
    }
    selectAccount(event){
        const selectAccountId = event.currentTarget.key;
    }
    handleClick(){
        // this handle click function  button is for the button
    }
}