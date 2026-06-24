// 1. u have to print all top-level keys and values
// 2. u have to print keys and values of marks.

const students = {
  name: "Amit",
  age: "21",
  course: "B.tech",
  marks: {
    Maths: 85,
    Physics: 98,
    Chemistry: 78
  }
}

for(let key in students){
  console.log(key, ":" , students[key]);
}

for(let key in students.marks){
  console.log(key, ":" , students.marks[key]);
}
