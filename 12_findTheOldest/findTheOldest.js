const currentDate = new Date();
let year = currentDate.getFullYear();

const findTheOldest = function (people) {
	let oldestAge = 0;
	let oldestPerson;
	for (const person of people) {
		age = !person.yearOfDeath
			? year - person.yearOfBirth
			: person.yearOfDeath - person.yearOfBirth;

		if (oldestAge < age) {
			oldestAge = age;
			oldestPerson = person;
		}
	}
	return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
