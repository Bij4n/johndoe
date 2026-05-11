describe('Helper Functions', function() {

    describe('randomFrom', function() {
        it('should return an element from the array', function() {
            var arr = ['a', 'b', 'c'];
            for (var i = 0; i < 20; i++) {
                expect(arr).toContain(randomFrom(arr));
            }
        });
    });

    describe('randomInt', function() {
        it('should return an integer within the given range', function() {
            for (var i = 0; i < 50; i++) {
                var result = randomInt(5, 10);
                expect(result).not.toBeLessThan(5);
                expect(result).not.toBeGreaterThan(10);
                expect(result % 1).toBe(0);
            }
        });
    });
});

describe('Name Generation', function() {

    describe('generateGender', function() {
        it('should return Male or Female', function() {
            for (var i = 0; i < 20; i++) {
                var gender = generateGender();
                expect(gender === 'Male' || gender === 'Female').toBe(true);
            }
        });
    });

    describe('generateName', function() {
        it('should return an object with first, middle, last, and full name', function() {
            var name = generateName('Male');
            expect(name.first).toBeDefined();
            expect(name.last).toBeDefined();
            expect(typeof name.middle).toBe('string');
            expect(name.full).toContain(name.first);
            expect(name.full).toContain(name.last);
        });

        it('should pick male names for Male gender', function() {
            var name = generateName('Male');
            expect(MALE_FIRST_NAMES).toContain(name.first);
        });

        it('should pick female names for Female gender', function() {
            var name = generateName('Female');
            expect(FEMALE_FIRST_NAMES).toContain(name.first);
        });
    });
});

describe('Contact Generation', function() {

    describe('generateEmail', function() {
        it('should return a valid-looking email', function() {
            var email = generateEmail('John', 'Smith');
            expect(email).toContain('@');
            var parts = email.split('@');
            expect(parts.length).toBe(2);
            expect(EMAIL_DOMAINS).toContain(parts[1]);
        });

        it('should use lowercase', function() {
            var email = generateEmail('John', 'Smith');
            expect(email).toBe(email.toLowerCase());
        });
    });

    describe('generatePhone', function() {
        it('should return a formatted phone number', function() {
            var phone = generatePhone();
            expect(phone).toMatch(/^\(\d{3}\) \d{3}-\d{4}$/);
        });
    });

    describe('generateAddress', function() {
        it('should return an address with a number and street', function() {
            var address = generateAddress();
            expect(address).toMatch(/^\d+ .+$/);
        });
    });

    describe('generateLocation', function() {
        it('should return city, state, and zip', function() {
            var loc = generateLocation();
            expect(loc.city).toBeDefined();
            expect(loc.state).toBeDefined();
            expect(loc.stateAbbr).toBeDefined();
            expect(loc.zip).toBeDefined();
            expect(loc.street).toBeDefined();
        });

        it('should have a 5-digit zip code', function() {
            var loc = generateLocation();
            expect(loc.zip.length).toBe(5);
        });
    });
});

describe('Date of Birth and Age', function() {

    describe('generateDOB', function() {
        it('should return a date object and formatted string', function() {
            var dob = generateDOB();
            expect(dob.date).toBeDefined();
            expect(dob.date instanceof Date).toBe(true);
            expect(dob.formatted).toBeDefined();
        });

        it('should format as MM/DD/YYYY', function() {
            var dob = generateDOB();
            expect(dob.formatted).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
        });

        it('should generate birthdates for people aged 18-75', function() {
            for (var i = 0; i < 20; i++) {
                var dob = generateDOB();
                var age = calculateAge(dob.date);
                expect(age).not.toBeLessThan(18);
                expect(age).not.toBeGreaterThan(75);
            }
        });
    });

    describe('calculateAge', function() {
        it('should correctly calculate age from a past date', function() {
            var pastDate = new Date();
            pastDate.setFullYear(pastDate.getFullYear() - 30);
            pastDate.setMonth(0);
            pastDate.setDate(1);
            var age = calculateAge(pastDate);
            expect(age).toBe(30);
        });
    });
});

describe('Employment Generation', function() {

    describe('generateJob', function() {
        it('should return a title and company from the same sector', function() {
            for (var i = 0; i < 20; i++) {
                var job = generateJob();
                expect(job.title).toBeDefined();
                expect(job.company).toBeDefined();
                var sector = JOB_SECTORS.find(function(s) { return s.titles.indexOf(job.title) !== -1; });
                expect(sector).toBeDefined();
                expect(sector.companies).toContain(job.company);
            }
        });
    });
});


describe('Credit Card Generation', function() {

    describe('luhnCheck', function() {
        it('should validate known good numbers', function() {
            // test Luhn check digit calculation
            expect(luhnCheckDigit('497940108510733')).toBe('1');
            expect(luhnCheckDigit('403248882588939')).toBe('8');
        });
    });

    describe('generateCreditCard', function() {
        it('should return type, number, expiry, and cvv', function() {
            var cc = generateCreditCard();
            expect(cc.type).toBeDefined();
            expect(cc.number).toBeDefined();
            expect(cc.expiry).toBeDefined();
            expect(cc.cvv).toBeDefined();
        });

        it('should have a valid card type', function() {
            var validTypes = ['Visa', 'MasterCard', 'American Express', 'Discover'];
            var cc = generateCreditCard();
            expect(validTypes).toContain(cc.type);
        });

        it('should have correct number length for card type', function() {
            for (var i = 0; i < 20; i++) {
                var cc = generateCreditCard();
                if (cc.type === 'American Express') {
                    expect(cc.number.length).toBe(15);
                } else {
                    expect(cc.number.length).toBe(16);
                }
            }
        });

        it('should pass luhn validation', function() {
            for (var i = 0; i < 20; i++) {
                var cc = generateCreditCard();
                var digits = cc.number;
                var partial = digits.substring(0, digits.length - 1);
                var checkDigit = digits.charAt(digits.length - 1);
                expect(luhnCheckDigit(partial)).toBe(checkDigit);
            }
        });

        it('should have a valid expiry format', function() {
            var cc = generateCreditCard();
            expect(cc.expiry).toMatch(/^\d{2}\/\d{2}$/);
        });

        it('should have a 3 or 4 digit cvv', function() {
            for (var i = 0; i < 20; i++) {
                var cc = generateCreditCard();
                if (cc.type === 'American Express') {
                    expect(cc.cvv.length).toBe(4);
                } else {
                    expect(cc.cvv.length).toBe(3);
                }
            }
        });
    });
});

describe('generatePerson', function() {

    it('should return a complete person object', function() {
        var person = generatePerson();
        expect(person.name).toBeDefined();
        expect(typeof person.middleName).toBe('string');
        expect(person.gender).toBeDefined();
        expect(person.dob).toBeDefined();
        expect(person.age).toBeDefined();
        expect(person.email).toBeDefined();
        expect(person.phone).toBeDefined();
        expect(person.address).toBeDefined();
        expect(typeof person.address2).toBe('string');
        expect(person.city).toBeDefined();
        expect(person.state).toBeDefined();
        expect(person.zip).toBeDefined();
        expect(person.country).toBe('United States');
        expect(person.jobTitle).toBeDefined();
        expect(person.company).toBeDefined();
        expect(person.ccType).toBeDefined();
        expect(person.ccNumber).toBeDefined();
        expect(person.ccExpiry).toBeDefined();
        expect(person.ccExpiryFull).toBeDefined();
        expect(person.ccCVV).toBeDefined();
    });

    it('should generate unique people on each call', function() {
        var person1 = generatePerson();
        var person2 = generatePerson();
        // very unlikely to generate the exact same person twice
        var same = (person1.name === person2.name &&
                    person1.email === person2.email &&
                    person1.phone === person2.phone);
        expect(same).toBe(false);
    });
});
