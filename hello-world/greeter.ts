class Student {
    fullName: String;
    constructor(public firstName, public middleName, public secondName) {
        this.fullName = firstName + ", " + middleName + ", " + secondName;
    }
}

interface Person {
    firstName: String;
    secondName: String;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + ", " + person.secondName;
}

var user = new Student("Jane", "Shaly", "Gilbert");

document.body.innerHTML = greeter(user);