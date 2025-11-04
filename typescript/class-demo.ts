interface Stud {
  id: number;
  name: string;
  age: number;
}

class Student {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  displayInfo(): void {
    console.log("Student Details: ");
    console.log(`Id: ${this.id}\nName: ${this.name}\nAge: ${this.age}`);
  }
}

const s1 = new Student(1, "Amit", 15);
s1.displayInfo();

const s2: Stud = new Student(2, "Rahul", 17);
console.log(s2);
