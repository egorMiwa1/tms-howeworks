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

// Создать строку из названий предметов написаных через запятую
const strNameItems = Object.keys(subjects).join();
console.log(strNameItems);

// Создать массив из объектов предметов
const arrItems = Object.values(subjects);
console.log(arrItems);

// Посчитать общее количнство студентов и учителей на всех предметах
const amountStuAndTeach = arrItems.reduce((acc, item) => acc + item.students + item.teachers, 0);
console.log(amountStuAndTeach);

// Получить среднее количество студентов на всех пердметах
const averageAmountStu = arrItems.reduce((acc, item) => acc + item.students, 0) / arrItems.length;
console.log(averageAmountStu);

// Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
const sortArrItems = arrItems.sort((currentValue, nextValue) => nextValue.students - currentValue.students);
console.log(sortArrItems);
