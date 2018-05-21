import './developer.css';

export class Developer {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    showDevelopersName(){
        this.element = document.createElement('div');
        this.element.innerHTML = `Hi, I am a developer ${this.firstName} ${this.lastName}`;
        return this.element
    }
}


