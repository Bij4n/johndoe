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

function generateEmail(firstName, lastName) {
    var domain = randomFrom(EMAIL_DOMAINS);
    var formats = [
        firstName.toLowerCase().charAt(0) + lastName.toLowerCase(),
        firstName.toLowerCase() + '.' + lastName.toLowerCase(),
        firstName.toLowerCase() + lastName.toLowerCase().charAt(0),
        firstName.toLowerCase() + randomInt(1, 99)
    ];
    return randomFrom(formats) + '@' + domain;
}

function generatePhone() {
    var area = randomInt(100, 999);
    var prefix = randomInt(100, 999);
    var line = randomInt(1000, 9999);
    return '(' + area + ') ' + prefix + '-' + line;
}

function generateAddress() {
    var number = randomInt(1, 9999);
    var street = randomFrom(STREET_NAMES);
    return number + ' ' + street;
}

function generateLocation() {
    var state = randomFrom(STATES);
    var stateData = CITIES_BY_STATE[state.abbr];
    var city = randomFrom(stateData.cities);
    var zip = stateData.zipStart + ('0' + randomInt(0, 99)).slice(-2);
    return {
        street: generateAddress(),
        city: city,
        state: state.name,
        stateAbbr: state.abbr,
        zip: zip
    };
}
