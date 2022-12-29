"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var years = 30;
var name = 'Nora';
console.log("Good morning, I am ".concat(name, " and I am ").concat(years, " years old."));
var a = 15;
a = 20;
var n;
n = 30;
var m = 9.04;
console.log(m.toFixed(0));
var num = 10;
console.log(num);
console.log(num.valueOf());
var myName = 'Nora';
console.log(myName);
;
console.log(myName.charAt(3));
console.log(myName.length);
console.log(myName.includes('p'));
var isLearning = true;
console.log(isLearning);
console.log(isLearning.valueOf());
var k = null;
var u = undefined;
//Array:
var array1 = [1, 2, 3];
console.log(array1[0]); //1
var array2 = [1, 2, 3];
console.log(array2[2]); //3
//Tuple:
var tuple1;
tuple1 = [15, 'hello'];
console.log(tuple1[1]); //hello
console.log(tuple1[1].substring(2)); //llo
console.log(tuple1[1].toUpperCase()); //HELLO 
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log(c); //1
(function (Color) {
    Color[Color["White"] = 3] = "White";
    Color[Color["Violet"] = 7] = "Violet";
    Color[Color["Black"] = 10] = "Black";
})(Color || (Color = {}));
;
var p = Color.Violet;
console.log(p); //7
(function (Color) {
    Color[Color["Grew"] = 1] = "Grew";
    Color[Color["Pink"] = 2] = "Pink";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
;
var z = Color.Pink;
console.log(z); //2
var colorName = Color[3];
console.log(colorName); //Yellow
//Unknown type:
var notSure = 4;
console.log(notSure); // 4
var notSure2;
console.log(notSure2); // undifiend
var notSure3 = 'Nora';
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
function myFunction() {
    console.log('I am here');
}
myFunction(); //I am here
// functions:
function hello() {
    console.log('Hello Greta');
}
hello(); // Hello Greta
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(10, 20)); //30
console.log(sum('no', 'ra')); //nora
function sumVal(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(sumVal(4)); //14
console.log(sumVal(4, 14)); // 18
function getEmployeeDetails(empDetails) {
    console.log(empDetails.firstName);
    console.log(empDetails.lastName);
    console.log(empDetails.ID);
}
getEmployeeDetails({
    firstName: 'Nora',
    lastName: 'Dimitrova',
    ID: 1001
});
//classes:
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employName = name;
    }
    Employee.prototype.hello = function () {
        console.log("hello ".concat(name));
    };
    return Employee;
}());
var emp1 = new Employee('Nora');
console.log(emp1.employName);
emp1.hello();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.greet = function () {
        console.log('Hello from manager');
    };
    return Manager;
}(Employee));
var manager1 = new Manager('Teodor');
manager1.hello();
manager1.greet();
