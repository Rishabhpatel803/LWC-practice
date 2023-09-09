import { LightningElement, wire } from 'lwc';
import ACCOUNT_DATA from '@salesforce/apex/approvalData.getAccountData';
import OPPORTUNITY_DATA from '@salesforce/apex/approvalData.getOpportunityData';
import CASE_DATA from '@salesforce/apex/approvalData.getCaseData';

const OPPORTUNITY_COLUMNS = [
    {label: 'Opportunity Name', fieldName: 'opportunityName'},
    {label: 'Stage', fieldName: 'stage'},
    {label: 'Amount', fieldName: 'amount'},
    {label: 'Type', fieldName: 'type'},
    {label: 'Approval', fieldName: 'approval'}
];

const ACCOUNT_COLUMNS = [
    { label: 'Name', fieldName: 'accountName'},
    {label: 'Email', fieldName: 'email'},
    {label: 'Billing City', fieldName: 'billingCity'},
    {label: 'Approval', fieldName: 'approval'}
];

const CASE_COLUMNS = [
    {label: 'Subject', fieldName: 'subject'},
    {label: 'Related Account', fieldName: 'relatedAccount'},
    {label: 'Owner', fieldName: 'owner'},
    {label: 'Approval', fieldName: 'approval'}
];
export default class ScenarioOne extends LightningElement {

    opportunityColumns = OPPORTUNITY_COLUMNS;
    accountColumns = ACCOUNT_COLUMNS;
    caseColumns = CASE_COLUMNS;
    opportunityData = [];
    accountData = [];
    caseData = [];

    @wire(OPPORTUNITY_DATA)
    oppData({error,data}){
        if(data){
            this.opportunityData = data.map(opportunity =>({
                opportunityName: opportunity.Name,
                stage: opportunity.StageName,
                amount: opportunity.Amount,
                type: opportunity.Type,
                approval: opportunity.Approved__c
            }));
        }else if(error){
            console.log(error);
        }
    }

    @wire(ACCOUNT_DATA)
    accData({error,data}){
        if(data){
            //let baseUrlOfOrg= 'https://'+location.host+'/';
            this.accountData = data.map(account =>({
                accountName: account.Name,   //baseUrlOfOrg + account.Id,
                email: account.Email__c,
                billingCity: account.BillingCity,
                approval: account.Approved__c
            }));
        }else if(error){
            console.log(error);
        }
    }

    @wire(CASE_DATA)
    caseData({error,data}){
        if(data){
            this.caseData = data.map(caseS =>({
                subject: caseS.Subject,
                relatedAccount: caseS.Account.Name,
                owner: caseS.Owner.Name,
                approval: caseS.Approved__c
            }));
        }else if(error){
            console.log(error);
        }
    }

    opportunityCSV(){
        this.downloadCSV(this.opportunityData, 'Opportunity');
    }

    accountCSV(){
        this.downloadCSV(this.accountData, 'Account');
    }

    caseCSV(){
        this.downloadCSV(this.caseData, 'Case');
    }

    downloadCSV(data, objectName) {
        this.data = data;
        let rowEnd = '\n';
            let csvString = '';
            // this set elminates the duplicates if have any duplicate keys
            let rowData = new Set();
            // getting keys from data
            this.data.forEach(function (record) {
                Object.keys(record).forEach(function (key) {
                    rowData.add(key);
                });
            });
            // Array.from() method returns an Array object from any object with a length property or an iterable object.
            rowData = Array.from(rowData);
            // splitting using ','
            csvString += rowData.join(',');
            csvString += rowEnd;
            // main for loop to get the data based on key value
            for(let i=0; i < this.data.length; i++){
                let colValue = 0;
                // validating keys in data
                for(let key in rowData) {
                    if(rowData.hasOwnProperty(key)) {
                        // Key value
                        // Ex: Id, Name
                        let rowKey = rowData[key];
                        // add , after every value except the first.
                        if(colValue > 0){
                            csvString += ',';
                        }
                        // If the column is undefined, it as blank in the CSV file.
                        let value = this.data[i][rowKey] === undefined ? '' : this.data[i][rowKey];
                        csvString += '"'+ value +'"';
                        colValue++;
                    }
                }
                csvString += rowEnd;
            }
            // Creating anchor element to download
            let downloadElement = document.createElement('a');
            // This  encodeURI encodes special characters, except: , / ? : @ & = + $ # (Use encodeURIComponent() to encode these characters).
            downloadElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvString);
            downloadElement.target = '_self';
            // CSV File Name
            downloadElement.download = objectName + ' Data.csv';
            // below statement is required if you are using firefox browser
            document.body.appendChild(downloadElement);
            // click() Javascript function to download CSV file
            downloadElement.click();
    }
}