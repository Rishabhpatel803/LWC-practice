import { LightningElement, wire } from 'lwc';
import getData from '@salesforce/apex/publicAPICallout.getData';

export default class PublicAPIScenarioEight extends LightningElement {
    publicActivity;
    mapRecords;
    error;
 
    @wire(getData)  
    wiredMapData( { error, data } ) {
        if ( data ) {
            for ( let key in data ) {
                let tempRec = { value : data[ key ], key : key };
                if ( this.mapRecords ) {
                    this.mapRecords = [ ...this.mapRecords, tempRec ];        
                } else {        
                    this.mapRecords = [ tempRec ];        
                }
            }
            this.error = undefined;
        } else if ( error ) {
            this.error = JSON.stringify( error );
            this.records = undefined;
        }
    }
    handleCallout(){
        this.publicActivity = this.mapRecords;
    }  
}