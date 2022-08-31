const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

// Task1
const subjectsStr = Object.keys(subjects).join();
console.log(subjectsStr);

// Task2
const studentsSum = Object.values(subjects).reduce((sum, item) => {
  return sum + item.students;
}, 0);
console.log(studentsSum);

const teachersSum = Object.values(subjects).reduce((sum, item) => {
  return sum + item.teachers;
}, 0);
console.log(teachersSum);

// Task3
const averageAmountOfStudents = (obj) => {
  return studentsSum / Object.keys(obj).length;
}
console.log(averageAmountOfStudents(subjects));

// Task4
const subjectsArr = Object.values(subjects);
console.log(subjectsArr);

// Task5
const sortedSubjects = Object.values(subjects).sort((a, b) => b.teachers - a.teachers);

console.log(sortedSubjects);
