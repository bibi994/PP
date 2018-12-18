function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;

}
// EMPLOYEE PROTOTYPE INGERITANCE PERSON PROTOTYPE

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// ADD METHODS to PROTOTYPE

Employee.prototype.getData = function () {
    return this.name + " " + this.surname + " " + this.salary;
}

Employee.prototype.getSalary = function () {
    return this.salary;
}

Employee.prototype.increaseSalary = function () {
    return this.salary * 10 / 100;
}

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

// DEVELOPER PROTOTYPE INGERITANCE EMPLOYEE PROTOTYPE

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

// ADD METHODS to PROTOTYPE

Developer.prototype.getSpecialization = function () {
    return this.specialization;
}

function Manager(name, surname, job, salary, specialization, department) {

    Developer.call(this, name, surname, job, salary, specialization);
    this.department = department;
}

// DEVELOPER PROTOTYPE INGERITANCE EMPLOYEE PROTOTYPE

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;


// ADD METHODS to PROTOTYPE

Manager.prototype.getDepartment = function () {
    return this.department;
}
Manager.prototype.changeDepartment = function (newDepartment) {
    return this.department = newDepartment;
}


// TEST

var misaManager = new Manager('Misa', 'Misic', 'Manager', 1000, 'none', 'BIT');
console.log(misaManager.getData());
console.log(misaManager.increaseSalary());









