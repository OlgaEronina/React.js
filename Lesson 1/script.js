//1st task
console.log('Task 1 -----------------------------');

const loop = (times = 0, callback = null) => {
    if (callback === null) {
        console.log('No definition')
    } else {
        for (let i = 2; i < times; i++) {
            callback();
        }
    }
};

let test = () => {
    console.log('This is a test');
};

loop();
loop(2, test);

//2nd task
console.log('Task 2 -----------------------------');

const calculateRectangleArea = (a, b) => {
    const square = a * b;
    console.log('Square of the rectangle is ' + square);
    const obj = {};
    obj.area = square;
    obj.figure = 'rectangle';
    obj.inputs = [a, b];
    console.log(obj);
    return obj;
};

calculateRectangleArea(23, 55);

//3rd task
console.log('Task 3 -----------------------------');

// Human -> Employee -> Developer
// Human -> Employee -> Manager
// Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков),
// а также методы по удалению/добавлению разработчиков.
// Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера
// (имеется ввиду возможность назначить другого менеджера).
// У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)
// У класса Employee должны присутствовать параметры: salary (число), department (строка)
// В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
//    В классе Employee должен быть реализовать такой же метод (displayInfo), который вызывает базовый метод и дополняет
// его параметрами из экземпляра Employee
// Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать:
// super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a.

class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth
    }

    displayInfo() {
        return `Name = ${this.name} ; Age = ${this.age} ; Date of birth = ${this.dateOfBirth}`;
    }
}

console.log(new Human("Ivan", 35, "11.11.1999").displayInfo());

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.salary = salary;
        this.department = department
    }

    displayInfo() {
        return `${super.displayInfo()} ; Salary =  ${this.salary} ; Department =  ${this.department}`;
    }

}

console.log(new Employee("Ivan", 35, "11.11.1999", 25000, "Development").displayInfo());

class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.staff = [];
    }

    addStaff() {

    }
}

class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department, manager) {
        super(name, age, dateOfBirth, salary, department);
        this.manager = manager;
    }
}
