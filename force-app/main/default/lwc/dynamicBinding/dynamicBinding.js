import { LightningElement } from 'lwc';

export default class DynamicBinding extends LightningElement {
    myValue = 'Salesforce Ben';
    inputUser = '';
    outputuser = '';
    handleChange(event){
        this.myValue = event.target.value;
    }

    handleButtonChange(event){
        this.inputUser = event.target.value;
    }

    handleClick(){
        this.outputuser = this.inputUser;
    }
}