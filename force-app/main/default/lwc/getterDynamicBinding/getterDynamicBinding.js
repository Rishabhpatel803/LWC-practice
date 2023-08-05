import { LightningElement } from 'lwc';

export default class GetterDynamicBinding extends LightningElement {
    firstName = '';
    lastName = '';
    firstNameOne = '';
    lastNameOne = '';
    outputuser = '';

    handleChange(event){
        const inputfield = event.target.name;
        if(inputfield === 'firstName'){
            this.firstName = event.target.value;
        }
        if(inputfield === 'lastName'){
            this.lastName = event.target.value;
        }
    }

    get upperCaseName(){
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }

    handleButtonChange(event){
        const inputfield = event.target.name;
        if(inputfield === 'firstNameOne'){
            this.firstNameOne = event.target.value;
        }
        if(inputfield === 'lastNameOne'){
            this.lastNameOne = event.target.value;
        }
    }

    get upperCaseNameButton(){
        return `${this.firstNameOne} ${this.lastNameOne}`.toUpperCase();
    }

    handleClick(){
        this.outputuser = upperCaseNameButton();
    }
}