// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.title = "Employee";
        this.email = email;
    };
    getName(){
        return this.name;

    };
    getId(){
        return this.email;

    };
    getEmail () {
        return this.email;

    };
    getRole () {
        return this.title;
    };
}

module.exports = Employee;