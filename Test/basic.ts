export { }
let years = 30;
let name = 'Nora';
console.log(`Good morning, I am ${name} and I am ${years} years old.`)

let a = 15;
a = 20;

let n;
n = 30;

let m = 9.04;
console.log(m.toFixed(0));

let num: number = 10;
console.log(num);
console.log(num.valueOf());

let myName: string = 'Nora';
console.log(myName);;
console.log(myName.charAt(3));
console.log(myName.length);
console.log(myName.includes('p'));

let isLearning: boolean = true;
console.log(isLearning);
console.log(isLearning.valueOf())

let k: null = null;

let u: undefined = undefined;

//Array:

let array1: number[] = [1, 2, 3];
console.log(array1[0]);  //1
let array2: Array<number> = [1, 2, 3];
console.log(array2[2]);  //3

//Tuple:

let tuple1: [number, string];
tuple1 = [15, 'hello'];
console.log(tuple1[1]); //hello
console.log(tuple1[1].substring(2));  //llo
console.log(tuple1[1].toUpperCase()); //HELLO 

//Enum

enum Color { Red, Blue, Green };
let c: Color = Color.Blue;
console.log(c); //1

enum Color { White = 3, Violet = 7, Black = 10 };
let p: Color = Color.Violet;
console.log(p); //7

enum Color { Grew = 1, Pink, Yellow };
let z: Color = Color.Pink;
console.log(z); //2

let colorName: string = Color[3];
console.log(colorName);  //Yellow

//Unknown type:

let notSure: unknown = 4;
console.log(notSure); // 4

let notSure2: unknown;
console.log(notSure2); // undifiend

let notSure3: unknown = 'Nora';
console.log(notSure3); // Nora 

//Any

// let anyValue: any;
// anyValue = 10;
// anyValue = 'hello';
// anyValue = true;

// anyValue();
// anyValue.toUpperCase();
// console.log(anyValue.toUpperCase());

//Void:

function myFunction(): void {
    console.log('I am here');
}

myFunction();  //I am here

// functions:

function hello() {
    console.log('Hello Greta');
}

hello(); // Hello Greta

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(10, 20)); //30
console.log(sum('no', 'ra')) //nora

function sumVal(num1: number, num2: number = 10): number {
    return num1 + num2;
}

console.log(sumVal(4)); //14
console.log(sumVal(4, 14)); // 18


//iterface:

interface employee {
    firstName: string;
    lastName: string;
    ID: number;
}

function getEmployeeDetails(empDetails: employee) {
    console.log(empDetails.firstName);
    console.log(empDetails.lastName);
    console.log(empDetails.ID);
}

getEmployeeDetails({
    firstName: 'Nora',
    lastName: 'Dimitrova',
    ID: 1001,
})


//classes:

class Employee {
    employName: string;

    constructor(name: string) {
        this.employName = name;
    }

    hello() {
        console.log(`hello ${name}`)
    }
}

let emp1 = new Employee('Nora');
console.log(emp1.employName);
emp1.hello();

class Manager extends Employee {
    constructor(name) {
        super(name);
    }

    greet() {
        console.log('Hello from manager');

    }
}

let manager1 = new Manager('Teodor');
manager1.hello();
manager1.greet();



