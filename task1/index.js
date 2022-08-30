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

const kyes = Object.keys(subjects);
const sumStudents = Object.values(subjects).reduce(
	(previousValue, currentValue) => previousValue + currentValue.students,
	0
);
const averageStudents = sumStudents / kyes.length;
const couple = Object.values(subjects);
const loler = couple.sort((a, b) => b.teachers - a.teachers);
