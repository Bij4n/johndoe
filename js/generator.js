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
    // area codes can't start with 0 or 1
    var area = randomInt(200, 999);
    var prefix = randomInt(200, 999);
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
    if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) {
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

function luhnCheckDigit(partial) {
    var digits = partial.split('').reverse();
    var sum = 0;
    for (var i = 0; i < digits.length; i++) {
        var d = parseInt(digits[i], 10);
        if (i % 2 === 0) {
            d = d * 2;
            if (d > 9) d -= 9;
        }
        sum += d;
    }
    return ((10 - (sum % 10)) % 10).toString();
}

function generateCreditCard() {
    var types = Object.keys(CC_PREFIXES);
    var type = randomFrom(types);
    var prefix = randomFrom(CC_PREFIXES[type]);

    var totalLength = (type === 'American Express') ? 15 : 16;
    var number = prefix;

    // fill remaining digits (minus one for check digit)
    while (number.length < totalLength - 1) {
        number += randomInt(0, 9).toString();
    }

    // append luhn check digit
    number += luhnCheckDigit(number);

    // generate expiry (1-5 years in the future from 2014)
    var expMonth = ('0' + randomInt(1, 12)).slice(-2);
    var expYear = randomInt(15, 19);
    var expiry = expMonth + '/' + expYear;

    // cvv
    var cvvLength = (type === 'American Express') ? 4 : 3;
    var cvv = '';
    for (var i = 0; i < cvvLength; i++) {
        cvv += randomInt(0, 9).toString();
    }

    return {
        type: type,
        number: number,
        expiry: expiry,
        cvv: cvv
    };
}

function generatePerson() {
    var gender = generateGender();
    var name = generateName(gender);
    var dob = generateDOB();
    var location = generateLocation();
    var job = generateJob();
    var cc = generateCreditCard();

    return {
        name: name.full,
        firstName: name.first,
        lastName: name.last,
        gender: gender,
        dob: dob.formatted,
        age: calculateAge(dob.date),
        email: generateEmail(name.first, name.last),
        phone: generatePhone(),
        address: location.street,
        city: location.city,
        state: location.state + ' (' + location.stateAbbr + ')',
        zip: location.zip,
        jobTitle: job.title,
        company: job.company,
        username: generateUsername(name.first, name.last),
        password: generatePassword(),
        browser: generateUserAgent(),
        ccType: cc.type,
        ccNumber: cc.number,
        ccExpiry: cc.expiry,
        ccCVV: cc.cvv
    };
}

var currentPerson = null;

$(document).ready(function() {

    $('#generateBtn').on('click', function() {
        var person = generatePerson();
        currentPerson = person;

        $('#fullName').text(person.name);
        $('#gender').text(person.gender);
        $('#dob').text(person.dob);
        $('#age').text(person.age);
        $('#email').text(person.email);
        $('#phone').text(person.phone);
        $('#address').text(person.address);
        $('#city').text(person.city);
        $('#state').text(person.state);
        $('#zip').text(person.zip);
        $('#jobTitle').text(person.jobTitle);
        $('#company').text(person.company);
        $('#username').text(person.username);
        $('#password').text(person.password);
        $('#browser').text(person.browser);
        $('#ccType').text(person.ccType);
        $('#ccNumber').text(person.ccNumber);
        $('#ccExpiry').text(person.ccExpiry);
        $('#ccCVV').text(person.ccCVV);

        $('#results').show();
        $('#copyAllBtn').show();
    });

    // copy all fields
    $('#copyAllBtn').on('click', function() {
        if (!currentPerson) return;
        var p = currentPerson;
        var text = 'Name: ' + p.name + '\n' +
            'Gender: ' + p.gender + '\n' +
            'Date of Birth: ' + p.dob + '\n' +
            'Age: ' + p.age + '\n' +
            'Email: ' + p.email + '\n' +
            'Phone: ' + p.phone + '\n' +
            'Address: ' + p.address + '\n' +
            'City: ' + p.city + '\n' +
            'State: ' + p.state + '\n' +
            'Zip: ' + p.zip + '\n' +
            'Job Title: ' + p.jobTitle + '\n' +
            'Company: ' + p.company + '\n' +
            'Username: ' + p.username + '\n' +
            'Password: ' + p.password + '\n' +
            'Card Type: ' + p.ccType + '\n' +
            'Card Number: ' + p.ccNumber + '\n' +
            'Expires: ' + p.ccExpiry + '\n' +
            'CVV: ' + p.ccCVV;
        copyToClipboard(text);

        var $btn = $(this);
        $btn.html('<span class="glyphicon glyphicon-ok"></span> Copied!');
        setTimeout(function() {
            $btn.html('<span class="glyphicon glyphicon-copy"></span> Copy All');
        }, 1500);
    });

    // copy individual field
    $(document).on('click', '.copy-btn', function() {
        var targetId = $(this).data('target');
        var text = $('#' + targetId).text();
        copyToClipboard(text);

        var $btn = $(this);
        $btn.text('Copied!').addClass('btn-success').removeClass('btn-default');
        setTimeout(function() {
            $btn.text('Copy').addClass('btn-default').removeClass('btn-success');
        }, 1000);
    });

});

function copyToClipboard(text) {
    var $temp = $('<textarea>');
    $('body').append($temp);
    $temp.val(text).select();
    document.execCommand('copy');
    $temp.remove();
}
