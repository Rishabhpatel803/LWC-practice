import { LightningElement } from 'lwc';
import getAccountId from '@salesforce/apex/AccountController.getAccountId';

export default class ParentChildRecord extends LightningElement {
    accountName;
    firstName;
    lastName;
    email;
    accountWebsite;
    phoneNo;

    accountId;

    handleChange(event){
        const selectedEvent = event.target.name;
        if(selectedEvent === 'accountName'){
            this.accountName = event.target.value;
        }else if(selectedEvent === 'firstName'){
            this.firstName = event.target.value;
        }else if(selectedEvent === 'lastName'){
            this.lastName = event.target.value;
        }else if(selectedEvent === 'email'){
            this.email = event.target.value;
        }else if(selectedEvent === 'accountWebsite'){
            this.accountWebsite = event.target.value;
        }else if(selectedEvent === 'phoneNo'){
            this.phoneNo = event.target.value;
        }
    }

    saveAndNew = false;

    handleSave() {
    this.saveAndNew = false;
    this.handleRecordSave();
    }
/*
    handleSaveAndNew() {
    this.saveAndNew = true;
    this.handleRecordSave();
    }

    handleReset(event) {
    const inputFields = this.template.querySelectorAll(
        'lightning-input-field'
    );
    if (inputFields) {
        inputFields.forEach(field => {
        field.reset();
        });
    }
    }

    handleSuccess() {
    if(this.saveAndNew){
        this.handleReset();
    } else{
        this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: this.activityId,
            objectApiName: 'GRA_RV_Rig_Verification__c',
            actionName: 'view'
        },
        });
    }
    }
*/
    handleRecordSave() {
    getAccountId({accountName : this.accountName, accountWebsite : this.accountWebsite})
    .then((result) => {
        this.accountId = result.Id;
        console.log('Account Id', this.accountId);
    })
    }
}