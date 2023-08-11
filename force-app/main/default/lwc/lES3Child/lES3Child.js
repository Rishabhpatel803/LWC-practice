import { LightningElement, api } from 'lwc';

export default class LES3Child extends LightningElement {
    @api passdata;

    get namevalue(){
        return this.passdata === 'input1';
    }
    get phonevalue(){
        return this.passdata === 'input2';
    }
    get emailvalue(){
        return this.passdata === 'input3';
    }
}