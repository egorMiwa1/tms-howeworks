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

// Task 1
const subjectsKeys = Object.keys(subjects);
console.log(subjectsKeys.join(', '));

// Task 2
const sumStudents = Object.values(subjects)
  .reduce((acc, subjects) => acc + subjects.students, 0);
console.log(sumStudents);

const sumTeachers = Object.values(subjects)
  .reduce((acc, subjects) => acc + subjects.teachers, 0);
console.log(sumTeachers);
// Task 3
const avrgStudents = sumStudents / Object.values(subjects).length;
console.log(avrgStudents);

// Task 4 & 5
const subjectsArray = Object.values(subjects);
const sortedSubjects = subjectsArray.sort((a, b) => b.teachers - a.teachers);
console.log(sortedSubjects);
