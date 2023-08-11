import { LightningElement } from 'lwc';

export default class LES3Parent extends LightningElement {
    selectedValue = '';

    get option(){
        return [
            { label: 'Show Input 1', value: 'input1' },
            { label: 'Show Input 2', value: 'input2' },
            { label: 'Show Input 3', value: 'input3' },
        ];
    }
    handleChange(event){
        this.selectedValue = event.detail.value;
        console.log("####selected value",this.selectedValue);
    }
}