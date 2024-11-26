// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
    constructor(name = "John Smith", age = 35, country = "The United States of America") {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    display() {
        console.log('Name: ' + this.name + ', Age: ' + this.age + ', Country: ' + this.country + '.');
    }
}

let johnSmith = new Person();
let mikeBaker = new Person('Steve Norman', 49, 'Canada');
johnSmith.display(), mikeBaker.display();

