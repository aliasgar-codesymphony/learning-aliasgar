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

const stud1 = new Student(1, "Amit", 15);
stud1.displayInfo();
