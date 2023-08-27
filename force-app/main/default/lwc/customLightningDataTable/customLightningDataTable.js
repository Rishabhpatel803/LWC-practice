import { LightningElement, wire} from 'lwc';
import getList from '@salesforce/apex/AccountController.getList';
import staticImages from '@salesforce/resourceUrl/static_Images';

const columns = [
    {label : "Name", fieldName : "name"},
    {label : "Created Date", fieldName : "createdDate"},
    {label : "Owner Name", fieldName : "ownerName"},
    {label : "Active", fieldName : 'image', type : 'customImage'},
];

export default class CustomLightningDataTable extends LightningElement {
    data = [];
    column = columns;

    green_Tick = staticImages + '/green_Tick.jpg';
    red_Cross = staticImages + '/red_Cross.png';

    @wire(getList)
    wiredData({error,data}){
        if(data){
            this.data = data.map(account => ({
                Id : account.Id,
                name : account.Name,
                createdDate : account.CreatedDate,
                ownerName : account.Owner.Name,
                image : account.Account_Status__c ? this.green_Tick : this.red_Cross
            }));
        }
    }
}