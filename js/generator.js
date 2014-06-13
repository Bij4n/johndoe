function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateGender() {
    return Math.random() < 0.5 ? 'Male' : 'Female';
}

function generateName(gender) {
    var firstName;
    if (gender === 'Male') {
        firstName = randomFrom(MALE_FIRST_NAMES);
    } else {
        firstName = randomFrom(FEMALE_FIRST_NAMES);
    }
    var lastName = randomFrom(LAST_NAMES);
    return { first: firstName, last: lastName, full: firstName + ' ' + lastName };
}
