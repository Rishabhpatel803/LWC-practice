import { LightningElement, track } from 'lwc';
import getSuccessCode from '@salesforce/apex/getDetails.getSuccessCode';

//this code is intended to upload from LWC to apex
import uddData from '@salesforce/apex/uploadData.uddData';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import Name_FIELD from '@salesforce/schema/Transaction__c.Name';
import Account_FIELD from '@salesforce/schema/Account.Id';
import Success_FIELD from '@salesforce/schema/Transaction__c.Success_Code__c';
import Message_FIELD from '@salesforce/schema/Transaction__c.Message__c';
//importing fields from the salesofrce org

export default class LWCExchangeScenario6 extends LightningElement {

    transactionName;
    @track selectedCode = [];
    selectedMsgCode;
    parentAccountSelectedRecord;
    error;

    @track transRecord = {
        Name : Name_FIELD,
        Account : Account_FIELD,
        Code : Success_FIELD,
        Message : Message_FIELD
    };

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

    handleChangeName(event){
        this.transactionName = event.target.value;
        this.transRecord.Name = event.target.value; //variable declared to store and pass value
    }

    handleCodeChange(event){
        // this handle change function is for the code combobox change
        this.transRecord.Code = event.target.options.find(opt => opt.value === event.detail.value).label; //variable declared to store and pass value
        this.selectedMsgCode = event.detail.value;
        this.transRecord.Message = event.detail.value; //variable declared to store and pass value
    }

    handleValueSelectedOnAccount(event) {
        this.parentAccountSelectedRecord = event.detail;
        this.transRecord.Account = event.detail.id; //variable declared to store and pass value
    }

    handleClick(){
        // this handle click function  button is for the button
        //this function performs the uploading via click of the button
        uddData({tRecordName : this.transRecord.Name,tRecordAccount : this.transRecord.Account, tRecordCode : this.transRecord.Code,tRecordMsg : this.transRecord.Message})
        .then((result) =>{
            this.transRecord = {};
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success!!',
                message: 'Transaction Created Successfully!!',
                variant: 'success'
            }),);
        })
        .catch((error) =>{
            alert('Transaction Not Created because of error : ', error);
        });
    }
}
