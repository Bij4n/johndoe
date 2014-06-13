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
        it('should return an object with first, last, and full name', function() {
            var name = generateName('Male');
            expect(name.first).toBeDefined();
            expect(name.last).toBeDefined();
            expect(name.full).toBe(name.first + ' ' + name.last);
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
                expect(age).not.toBeGreaterThan(76);
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
