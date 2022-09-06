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

console.log(subjects);

const subjectsKeys = Object.keys(subjects);
const stringSubjects = subjectsKeys.join();
console.log(stringSubjects);

const subjectsValues = Object.values(subjects);

const sumValues = subjectsValues.reduce((acc, item) => acc + item.students + item.teachers, 0);
console.log(sumValues);

const averageStudents = subjectsValues.reduce((acc, item) => acc + item.students, 0) / subjectsKeys.length;
console.log(averageStudents);

const subjectsSortedByTeachers = subjectsValues.sort((a, b) => b.teachers - a.teachers);
console.log(subjectsSortedByTeachers);
