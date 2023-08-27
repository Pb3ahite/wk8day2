1
let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Sarah Stodder',
        age:99
    }
];


type User = {
    name: string;
    age: number;
    company?: string; 
};


2
//Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

3
//Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {}
}

class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ) {}

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

4
//Create a new class called "Employee" that extends "Person" and adds a new property called salary. 

class Employee extends Person {
    constructor(
        firstName: string, 
        lastName: string,
        public salary: number
    ) {
        super(firstName, lastName);
    }
}


5
//Given the data below, define an interface for representing employees:

interface Address {
    street: string;
    city: string;
    zipCode: number;
}

interface Employee {
    name: string;
    salary: number;
    address: Address;
}
