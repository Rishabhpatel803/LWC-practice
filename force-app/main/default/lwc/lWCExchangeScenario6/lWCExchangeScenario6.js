import { LightningElement, track, wire } from 'lwc';
import getSuccessCode from '@salesforce/apex/getDetails.getSuccessCode';

export default class LWCExchangeScenario6 extends LightningElement {

    @track selectedCode = [];
    selectedMsgCode = '';
    parentAccountSelectedRecord;
    error;

    connectedCallback(){
        getSuccessCode()
            .then(result => {
                let arr = [];
                for(var i = 0; i < result.length; i++){
                    arr.push({label : result[i].Success_Code__c, value : result[i].Message__c});
                    //alert(result[i].Success_Code__c);
                }
                this.selectedCode = arr;
            })
            .catch(error => {
                alert(JSON.stringify(error));
            });
    }

    handleCodeChange(event){
        // this handle change function is for the code combobox change
        this.selectedMsgCode = event.detail.value;
    }

    handleValueSelectedOnAccount(event) {
        this.parentAccountSelectedRecord = event.detail;
    }

    handleClick(){
        // this handle click function  button is for the button
    }
}