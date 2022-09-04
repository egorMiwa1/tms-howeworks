// С ниже приведенным объектом решить следующие задачи:

// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количнство студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех пердметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

// 1.
const subjectKeys = Object.keys(subjects);
console.log(subjectKeys.join(', '));

// 2.
const sumStudents = Object.values(subjects).reduce(
(acc, subjects) => acc + subjects.students,
0
);
console.log(sumStudents);

const sumTeachers = Object.values(subjects).reduce(
(acc, subjects) => acc + subjects.teachers,
0
);
console.log(sumTeachers);

// 3.
let middleStudents = sumStudents / Object.values(subjects).length;
console.log(middleStudents);

// 4.
const newArray = Object.values(subjects);
console.log(newArray);

// 5.
const arraySortedByTeaches = newArray.sort((a, b) => {
return b.teachers - a.teachers;
});
console.log(arraySortedByTeaches);
