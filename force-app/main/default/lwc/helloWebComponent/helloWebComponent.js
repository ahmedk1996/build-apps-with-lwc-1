import { LightningElement } from 'lwc';

export default class HelloWebComponent extends LightningElement {

        greeting='hello';
        
        currentDate = new Date().toDateString();
            
        get capitalizedGreeting() {
            return `Hello ${this.greeting.toUpperCase()}!`;
        }
        

        handleGreetingChange(event){

           // d = new Date().toDateString();
            this.greeting = event.target.value;

        }





}