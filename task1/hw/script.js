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

// 1. Создать строку из названий предметов написаных через запятую
let strSubjects =  Object.keys(subjects).join(', ');
console.log(strSubjects);

// 4. Создать массив из объектов предметов
let arrPeople = Object.values(subjects);
console.log(arrPeople);

// 2. Посчитать общее количнство студентов и учителей на всех предметах. Выдает ошибку, так как нужно выполнить пункт 4
let totalOfPeople = arrPeople.reduce((acc, people) => acc + people.students + people.teachers, 0);
console.log(totalOfPeople);

// 3. Получить среднее количество студентов на всех пердметах
let midStudents = arrPeople.reduce((acc, people) => acc + people.students, 0) / arrPeople.length;
console.log(midStudents);

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
let sortArrTeach = arrPeople.sort((currentValue, nextValue) => nextValue.teachers - currentValue.teachers);
console.log(sortArrTeach);


// 1. Создать строку из названий стран через запятую
// 2. Посчитать общее количнство людей в данном массиве стран.
// 3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
// 4. Получить массив валют.
// 5. Получить массив городов, отсортированных в алвавитном порядке.
// 5. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.



const countries = [
    {
        country: "United Arab Emirates",
        abbreviation: "AE",
        city: "Abu Dhabi",
        currency_name: "Arab Emirates Dirham",
        population: 9630959
        
    },
    {
        country: "Poland",
        abbreviation: "PL",
        city: "Warszawa",
        currency_name: "Polish Zloty",
        population: 37974750
    },
    {
        country: "Russian Federation",
        abbreviation: "RU",
        city: "Moscow",
        currency_name: "Russian Ruble",
        population: 144478050
    }
]

// 4. Получить массив валют.

const currencyArr = countries.map((element) => {return element.currency_name});
console.log(currencyArr);







