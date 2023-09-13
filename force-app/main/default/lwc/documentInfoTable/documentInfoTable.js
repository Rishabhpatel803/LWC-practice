import { LightningElement, wire } from 'lwc';
import fetchData from '@salesforce/apex/MetaData.fetchMetadata';

const columns = [
    {label: 'Document Number', fieldName: 'documentNumber'},
    {label: 'Document Title', fieldName: 'documentTitle'},
    {label: 'Document Description', fieldName: 'documentDescription'}
];

export default class DocumentInfoTable extends LightningElement {
    column = columns;
    fetchedData = [];
    error;

    @wire(fetchData)
    wiredData({error, data}){
        if(data){
            this.fetchedData = data.map(obtainedData => ({
                documentNumber: obtainedData.Document_Number__c,
                documentTitle: obtainedData.Document_Title__c,
                documentDescription: obtainedData.Document_Description__c
            }));
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.fetchedData = undefined;
        }
    }
}