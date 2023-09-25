import { LightningElement } from 'lwc';

export default class DemoHandler extends LightningElement {
    getFirstValue;
    getSecondValue;
    getThirdValue;

    handleChange(event){
        const eventOrigin = event.target.name;
        if(eventOrigin === 'firstValue'){
            this.getFirstValue = event.target.value;
        }else if(eventOrigin === 'secondValue'){
            this.getSecondValue = event.target.value;
        }else if(eventOrigin === 'thirdValue'){
            this.getThirdValue = event.target.value;
        }
    }

    handleClick(){
        console.log(this.getFirstValue);
        console.log(this.getSecondValue);
        console.log(this.getThirdValue);
    }
}