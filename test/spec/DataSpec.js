describe('Name Data', function() {

    it('should have male first names', function() {
        expect(MALE_FIRST_NAMES).toBeDefined();
        expect(MALE_FIRST_NAMES.length).toBeGreaterThan(0);
    });

    it('should have female first names', function() {
        expect(FEMALE_FIRST_NAMES).toBeDefined();
        expect(FEMALE_FIRST_NAMES.length).toBeGreaterThan(0);
    });

    it('should have last names', function() {
        expect(LAST_NAMES).toBeDefined();
        expect(LAST_NAMES.length).toBeGreaterThan(0);
    });

    it('should have at least 30 names in each array', function() {
        expect(MALE_FIRST_NAMES.length).toBeGreaterThan(30);
        expect(FEMALE_FIRST_NAMES.length).toBeGreaterThan(30);
        expect(LAST_NAMES.length).toBeGreaterThan(50);
    });

    it('should contain only strings', function() {
        MALE_FIRST_NAMES.forEach(function(name) {
            expect(typeof name).toBe('string');
        });
        FEMALE_FIRST_NAMES.forEach(function(name) {
            expect(typeof name).toBe('string');
        });
        LAST_NAMES.forEach(function(name) {
            expect(typeof name).toBe('string');
        });
    });
});
