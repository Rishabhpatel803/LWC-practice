import { LightningElement } from 'lwc';

export default class ScenarioTwoParent extends LightningElement {
    valueOne;
    valueTwo;

    handleChange(event){
        const funEvent = event.target.name;
        if(funEvent === 'valueOne'){
            this.valueOne = event.target.value;
        }else if(funEvent === 'valueTwo'){
            this.valueTwo = event.target.value;
        }
    }
}