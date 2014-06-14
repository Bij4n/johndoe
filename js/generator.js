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

function generateDOB() {
    var now = new Date();
    var minAge = 18;
    var maxAge = 75;
    var age = randomInt(minAge, maxAge);
    var year = now.getFullYear() - age;
    var month = randomInt(0, 11);
    var day = randomInt(1, 28);
    var dob = new Date(year, month, day);

    var monthStr = ('0' + (dob.getMonth() + 1)).slice(-2);
    var dayStr = ('0' + dob.getDate()).slice(-2);

    return {
        date: dob,
        formatted: monthStr + '/' + dayStr + '/' + dob.getFullYear()
    };
}

function calculateAge(dob) {
    var now = new Date();
    var age = now.getFullYear() - dob.getFullYear();
    var m = now.getMonth() - dob.getMonth();
    if (m < 0) {
        age--;
    }
    return age;
}

function generateJob() {
    return {
        title: randomFrom(JOB_TITLES),
        company: randomFrom(COMPANIES)
    };
}

function generateUsername(firstName, lastName) {
    var formats = [
        firstName.toLowerCase().charAt(0) + lastName.toLowerCase() + randomInt(1, 99),
        firstName.toLowerCase() + '_' + lastName.toLowerCase(),
        lastName.toLowerCase() + '.' + firstName.toLowerCase().charAt(0),
        firstName.toLowerCase() + randomInt(100, 999)
    ];
    return randomFrom(formats);
}

function generatePassword() {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
    var length = randomInt(10, 14);
    var password = '';
    for (var i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

function generateUserAgent() {
    return randomFrom(BROWSERS);
}
