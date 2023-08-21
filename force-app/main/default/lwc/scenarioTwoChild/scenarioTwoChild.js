import { LightningElement , api} from 'lwc';

export default class ScenarioTwoChild extends LightningElement {
    @api passdataone;
    @api passdatatwo;
    calculatedValue;

    handleClick(event){
        const currentEvent = event.target.name;
        if(currentEvent === 'addition'){
            console.log(this.passdataone);
            console.log(this.passdatatwo);
            this.calculatedValue = this.passdataone + this.passdatatwo;
            console.log(this.calculatedValue);
        }else if(currentEvent === 'subtraction'){
            this.calculatedValue = this.passdataone - this.passdatatwo;
        }else if(currentEvent === 'multiplication'){
            this.calculatedValue = this.passdataone * this.passdatatwo;
        }else if(currentEvent === 'division'){
            this.calculatedValue = this.passdataone / this.passdatatwo;
        }
    }
}