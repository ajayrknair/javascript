class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    let validUser;
    if(person.firstName === 'Ajay') {
        validUser = true;
    }
    console.log(validUser);

    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Ajay", "M.", "User");

document.body.innerHTML = greeter(user);