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
const strSubjects = Object.keys(subjects).join(", ");
const amountStudents = Object.values(subjects).reduce(
	(previousValue, currentValue) => previousValue + currentValue.students,
	0
);
const averageAmountStudents = amountStudents / Object.keys(subjects).length;
const coupleKeys = Object.values(subjects);
const loler = coupleKeys.sort((a, b) => b.teachers - a.teachers);

