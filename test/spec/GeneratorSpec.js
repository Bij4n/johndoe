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
