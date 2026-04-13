
// Exercise 1 : First Class

class Student {

    // Here comes the static method

    _graduate = false; // It's better to move out of the constructor

    constructor(name, age, grade){
        this._age = age; // these are private props that can't be accessed outside the class
        this._name = name;
        this._grade = grade;
      //  this._graduate = false;   // The property that we defined for the class
    }

    static compare(a, b){
        return Math.abs(a.grade - b.grade); // since grade is called from a static method its not private
    }

    study(subject){
        console.log(`I'm studying ${subject} and my name is ${this._name}`);
    }

    graduate(){
        this._graduate = true;
    }

   
}

const bob = new Student(30, "Bob", 12);
const maria = new Student(25, "Maria", 3);

Student.compare(bob, maria); 

// Book : "Gang of Four" book Design Patterns : Elements of Reusable Object-Oriented Software(1994) by Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides
