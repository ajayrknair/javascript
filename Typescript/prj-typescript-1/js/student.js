var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    if (person.firstName === 'Ajay') {
        let validUser = true;
    }
    console.log(validUser);
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Ajay", "M.", "User");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=student.js.map