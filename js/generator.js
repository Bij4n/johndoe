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
    var pool = gender === 'Male' ? MALE_FIRST_NAMES : FEMALE_FIRST_NAMES;
    var firstName = randomFrom(pool);
    var lastName = randomFrom(LAST_NAMES);
    var middleName = Math.random() < 0.8 ? randomFrom(pool) : '';
    var fullName = middleName
        ? firstName + ' ' + middleName + ' ' + lastName
        : firstName + ' ' + lastName;
    return { first: firstName, middle: middleName, last: lastName, full: fullName };
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

function generateAddressLine2() {
    if (Math.random() > 0.35) return '';
    var type = Math.random() < 0.6 ? 'Apt' : 'Unit';
    var formats = [
        randomInt(1, 999).toString(),
        randomInt(1, 99) + randomFrom(['A','B','C','D','E','F']),
        randomFrom(['A','B','C','D','E','F','G','H'])
    ];
    return type + ' ' + randomFrom(formats);
}

function generateLocation() {
    var state = randomFrom(STATES);
    var stateData = CITIES_BY_STATE[state.abbr];
    var cities = Object.keys(stateData);
    var city = randomFrom(cities);
    var zip = randomFrom(stateData[city]);
    return {
        street: generateAddress(),
        address2: generateAddressLine2(),
        city: city,
        state: state.name,
        stateAbbr: state.abbr,
        zip: zip
    };
}

function generateDOB() {
    var now = new Date();
    var earliest = new Date(now.getFullYear() - 75, now.getMonth(), now.getDate());
    var latest   = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate());
    var dob = new Date(earliest.getTime() + Math.random() * (latest.getTime() - earliest.getTime()));

    var monthStr = ('0' + (dob.getMonth() + 1)).slice(-2);
    var dayStr   = ('0' + dob.getDate()).slice(-2);

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
    var sector = randomFrom(JOB_SECTORS);
    return {
        title: randomFrom(sector.titles),
        company: randomFrom(sector.companies)
    };
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

    var expMonth = ('0' + randomInt(1, 12)).slice(-2);
    var expFullYear = (new Date().getFullYear() + randomInt(1, 4)).toString();
    var expiry     = expMonth + '/' + expFullYear.slice(-2);
    var expiryFull = expMonth + '/' + expFullYear;

    var cvvLength = (type === 'American Express') ? 4 : 3;
    var cvv = '';
    for (var i = 0; i < cvvLength; i++) {
        cvv += randomInt(0, 9).toString();
    }

    return {
        type: type,
        number: number,
        expiry: expiry,
        expiryFull: expiryFull,
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
        middleName: name.middle,
        lastName: name.last,
        gender: gender,
        dob: dob.formatted,
        age: calculateAge(dob.date),
        email: generateEmail(name.first, name.last),
        phone: generatePhone(),
        address: location.street,
        address2: location.address2,
        city: location.city,
        state: location.state + ' (' + location.stateAbbr + ')',
        zip: location.zip,
        country: 'United States',
        jobTitle: job.title,
        company: job.company,
        ccType: cc.type,
        ccNumber: cc.number,
        ccExpiry: cc.expiry,
        ccExpiryFull: cc.expiryFull,
        ccCVV: cc.cvv
    };
}

var currentPerson = null;

$(document).ready(function() {

    $('#generateBtn').on('click', function() {
        var person = generatePerson();
        currentPerson = person;

        $('#fullName').text(person.name);
        $('#middleName').text(person.middleName || '—');
        $('#gender').text(person.gender);
        $('#dob').text(person.dob);
        $('#age').text(person.age);
        $('#email').text(person.email);
        $('#phone').text(person.phone);
        $('#address').text(person.address);
        $('#address2').text(person.address2 || '—');
        $('#city').text(person.city);
        $('#state').text(person.state);
        $('#zip').text(person.zip);
        $('#country').text(person.country);
        $('#jobTitle').text(person.jobTitle);
        $('#company').text(person.company);
        $('#ccType').text(person.ccType);
        $('#ccNumber').text(person.ccNumber);
        $('#ccExpiry').text(person.ccExpiry);
        $('#ccExpiryFull').text(person.ccExpiryFull);
        $('#ccCVV').text(person.ccCVV);

        $('#results').hide().fadeIn(400);
        $('#copyAllBtn').show();
        $('#exportCsvBtn').show();
    });

    // copy all fields
    $('#copyAllBtn').on('click', function() {
        if (!currentPerson) return;
        var p = currentPerson;
        var text = 'Name: ' + p.name + '\n' +
            (p.middleName ? 'Middle Name: ' + p.middleName + '\n' : '') +
            'Gender: ' + p.gender + '\n' +
            'Date of Birth: ' + p.dob + '\n' +
            'Age: ' + p.age + '\n' +
            'Email: ' + p.email + '\n' +
            'Phone: ' + p.phone + '\n' +
            'Address: ' + p.address + '\n' +
            (p.address2 ? 'Address 2: ' + p.address2 + '\n' : '') +
            'City: ' + p.city + '\n' +
            'State: ' + p.state + '\n' +
            'Zip: ' + p.zip + '\n' +
            'Country: ' + p.country + '\n' +
            'Job Title: ' + p.jobTitle + '\n' +
            'Company: ' + p.company + '\n' +
            'Card Type: ' + p.ccType + '\n' +
            'Card Number: ' + p.ccNumber + '\n' +
            'Expires (MM/YY): ' + p.ccExpiry + '\n' +
            'Expires (MM/YYYY): ' + p.ccExpiryFull + '\n' +
            'CVV: ' + p.ccCVV;
        copyToClipboard(text);

        var $btn = $(this);
        $btn.html('<i class="bi bi-check-lg"></i> Copied!');
        setTimeout(function() {
            $btn.html('<i class="bi bi-clipboard"></i> Copy All');
        }, 1500);
    });

    // copy individual field
    $(document).on('click', '.copy-btn', function() {
        var targetId = $(this).data('target');
        var text = $('#' + targetId).text();
        copyToClipboard(text);

        var $btn = $(this);
        $btn.text('Copied!').addClass('btn-success').removeClass('btn-outline-secondary');
        setTimeout(function() {
            $btn.text('Copy').addClass('btn-outline-secondary').removeClass('btn-success');
        }, 1000);
    });

    // export current person as CSV
    $('#exportCsvBtn').on('click', function() {
        if (!currentPerson) return;
        exportPeopleAsCSV([currentPerson], 'fake-person.csv');
    });

    // bulk export
    $('#bulkExportBtn').on('click', function() {
        var count = Math.min(Math.max(parseInt($('#bulkCount').val()) || 10, 1), 500);
        var people = [];
        for (var i = 0; i < count; i++) {
            people.push(generatePerson());
        }
        exportPeopleAsCSV(people, 'fake-people.csv');
    });

});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).catch(function() {
        var $temp = $('<textarea>');
        $('body').append($temp);
        $temp.val(text).select();
        document.execCommand('copy');
        $temp.remove();
    });
}

var CSV_HEADERS = [
    'Full Name', 'First Name', 'Middle Name', 'Last Name',
    'Gender', 'Date of Birth', 'Age',
    'Email', 'Phone', 'Address', 'Address 2', 'City', 'State', 'Zip', 'Country',
    'Job Title', 'Company',
    'Card Type', 'Card Number', 'Expires (MM/YY)', 'Expires (MM/YYYY)', 'CVV'
];

function csvEscape(val) {
    var str = String(val);
    if (str.indexOf(',') !== -1 || str.indexOf('"') !== -1 || str.indexOf('\n') !== -1) {
        return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
}

function personToCSVRow(person) {
    return [
        person.name, person.firstName, person.middleName, person.lastName,
        person.gender, person.dob, person.age,
        person.email, person.phone, person.address, person.address2,
        person.city, person.state, person.zip, person.country,
        person.jobTitle, person.company,
        person.ccType, person.ccNumber, person.ccExpiry, person.ccExpiryFull, person.ccCVV
    ].map(csvEscape).join(',');
}

function exportPeopleAsCSV(people, filename) {
    var rows = [CSV_HEADERS.join(',')];
    for (var i = 0; i < people.length; i++) {
        rows.push(personToCSVRow(people[i]));
    }
    var blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
