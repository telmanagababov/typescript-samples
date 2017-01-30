var Student = (function () {
    function Student(firstName, middleName, secondName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.secondName = secondName;
        this.fullName = firstName + ", " + middleName + ", " + secondName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + ", " + person.secondName;
}
var user = new Student("Jane", "Shaly", "Gilbert");
document.body.innerHTML = greeter(user);
