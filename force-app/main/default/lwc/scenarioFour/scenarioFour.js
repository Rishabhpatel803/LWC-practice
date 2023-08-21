import { LightningElement } from 'lwc';
import { getDistance } from 'c/scenarioFourService';

export default class ScenarioFour extends LightningElement {
    firstLatitude;
    firstLongitude;
    secondLatitude;
    secondLongitude;
    distance;

    handleChange(event){
        this.firstLatitude = event.target.latitude;
        this.firstLongitude = event.target.longitude;
    }
    handleSecondChange(event){
        this.secondLatitude = event.target.latitude;
        this.secondLongitude = event.target.longitude;
    }
    handleClick(event){
        this.distance = getDistance(this.firstLatitude, this.firstLongitude, this.secondLatitude, this.secondLongitude);
        
    }
}