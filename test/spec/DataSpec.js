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

describe('Location Data', function() {

    it('should have all 50 states', function() {
        expect(STATES).toBeDefined();
        expect(STATES.length).toBe(50);
    });

    it('should have state objects with name and abbreviation', function() {
        STATES.forEach(function(state) {
            expect(state.name).toBeDefined();
            expect(state.abbr).toBeDefined();
            expect(state.abbr.length).toBe(2);
        });
    });

    it('should have cities for every state', function() {
        expect(CITIES_BY_STATE).toBeDefined();
        STATES.forEach(function(state) {
            var stateData = CITIES_BY_STATE[state.abbr];
            expect(stateData).toBeDefined();
            expect(stateData.cities.length).toBeGreaterThan(0);
            expect(stateData.zipStart).toBeDefined();
        });
    });

    it('should have street names', function() {
        expect(STREET_NAMES).toBeDefined();
        expect(STREET_NAMES.length).toBeGreaterThan(20);
    });
});

describe('Employment Data', function() {

    it('should have job titles', function() {
        expect(JOB_TITLES).toBeDefined();
        expect(JOB_TITLES.length).toBeGreaterThan(20);
    });

    it('should have company names', function() {
        expect(COMPANIES).toBeDefined();
        expect(COMPANIES.length).toBeGreaterThan(15);
    });
});

describe('Miscellaneous Data', function() {

    it('should have email domains', function() {
        expect(EMAIL_DOMAINS).toBeDefined();
        expect(EMAIL_DOMAINS.length).toBeGreaterThan(5);
        EMAIL_DOMAINS.forEach(function(domain) {
            expect(domain).toContain('.');
        });
    });

    it('should have browser user agents', function() {
        expect(BROWSERS).toBeDefined();
        expect(BROWSERS.length).toBeGreaterThan(3);
        BROWSERS.forEach(function(ua) {
            expect(ua).toContain('Mozilla');
        });
    });

    it('should have credit card prefixes', function() {
        expect(CC_PREFIXES).toBeDefined();
        expect(CC_PREFIXES['Visa']).toBeDefined();
        expect(CC_PREFIXES['MasterCard']).toBeDefined();
        expect(CC_PREFIXES['American Express']).toBeDefined();
        expect(CC_PREFIXES['Discover']).toBeDefined();
    });
});
