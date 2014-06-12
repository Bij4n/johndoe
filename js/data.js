var MALE_FIRST_NAMES = [
    'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard',
    'Joseph', 'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew',
    'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua',
    'Kenneth', 'Kevin', 'Brian', 'George', 'Timothy', 'Ronald', 'Edward',
    'Jason', 'Jeffrey', 'Ryan', 'Jacob', 'Gary', 'Nicholas', 'Eric',
    'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon'
];

var FEMALE_FIRST_NAMES = [
    'Mary', 'Patricia', 'Jennifer', 'Linda', 'Barbara', 'Elizabeth',
    'Susan', 'Jessica', 'Sarah', 'Karen', 'Lisa', 'Nancy', 'Betty',
    'Margaret', 'Sandra', 'Ashley', 'Dorothy', 'Kimberly', 'Emily',
    'Donna', 'Michelle', 'Carol', 'Amanda', 'Melissa', 'Deborah',
    'Stephanie', 'Rebecca', 'Sharon', 'Laura', 'Cynthia', 'Kathleen',
    'Amy', 'Angela', 'Shirley', 'Anna', 'Brenda', 'Pamela', 'Emma',
    'Nicole', 'Helen'
];

var LAST_NAMES = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller',
    'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez',
    'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
    'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark',
    'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young', 'Allen', 'King',
    'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores', 'Green',
    'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell',
    'Carter', 'Roberts', 'Gomez', 'Phillips', 'Evans', 'Turner', 'Diaz',
    'Parker', 'Cruz', 'Edwards', 'Collins', 'Reyes', 'Stewart', 'Morris',
    'Morales', 'Murphy', 'Cook', 'Rogers', 'Gutierrez', 'Ortiz', 'Morgan',
    'Cooper', 'Peterson', 'Bailey', 'Reed', 'Kelly', 'Howard', 'Ramos',
    'Kim', 'Cox', 'Ward'
];

var STREET_NAMES = [
    'Main St', 'Oak Ave', 'Maple Dr', 'Cedar Ln', 'Elm St', 'Washington Blvd',
    'Park Ave', 'Lake Dr', 'Hill Rd', 'Pine St', 'Walnut St', 'Sunset Blvd',
    'Cherry Ln', 'Meadow Dr', 'River Rd', 'Forest Ave', 'Spring St',
    'Valley Dr', 'Highland Ave', 'Dogwood Ln', 'Birch St', 'Willow Way',
    'Lincoln Ave', 'Jefferson St', 'Franklin Blvd', 'Adams Rd', 'Monroe Dr',
    'Madison Ave', 'Jackson St', 'Harrison Ln', 'Church St', 'Mill Rd',
    'Center St', 'School Ln', 'Court St', 'Prospect Ave', 'Union St',
    'Liberty Ave', 'Railroad St', 'Market St', 'Bridge Rd', 'Chestnut St',
    'Hickory Ln', 'Poplar Dr', 'Spruce St', 'Linden Ave'
];

var STATES = [
    { name: 'Alabama', abbr: 'AL' },
    { name: 'Alaska', abbr: 'AK' },
    { name: 'Arizona', abbr: 'AZ' },
    { name: 'Arkansas', abbr: 'AR' },
    { name: 'California', abbr: 'CA' },
    { name: 'Colorado', abbr: 'CO' },
    { name: 'Connecticut', abbr: 'CT' },
    { name: 'Delaware', abbr: 'DE' },
    { name: 'Florida', abbr: 'FL' },
    { name: 'Georgia', abbr: 'GA' },
    { name: 'Hawaii', abbr: 'HI' },
    { name: 'Idaho', abbr: 'ID' },
    { name: 'Illinois', abbr: 'IL' },
    { name: 'Indiana', abbr: 'IN' },
    { name: 'Iowa', abbr: 'IA' },
    { name: 'Kansas', abbr: 'KS' },
    { name: 'Kentucky', abbr: 'KY' },
    { name: 'Louisiana', abbr: 'LA' },
    { name: 'Maine', abbr: 'ME' },
    { name: 'Maryland', abbr: 'MD' },
    { name: 'Massachusetts', abbr: 'MA' },
    { name: 'Michigan', abbr: 'MI' },
    { name: 'Minnesota', abbr: 'MN' },
    { name: 'Mississippi', abbr: 'MS' },
    { name: 'Missouri', abbr: 'MO' },
    { name: 'Montana', abbr: 'MT' },
    { name: 'Nebraska', abbr: 'NE' },
    { name: 'Nevada', abbr: 'NV' },
    { name: 'New Hampshire', abbr: 'NH' },
    { name: 'New Jersey', abbr: 'NJ' },
    { name: 'New Mexico', abbr: 'NM' },
    { name: 'New York', abbr: 'NY' },
    { name: 'North Carolina', abbr: 'NC' },
    { name: 'North Dakota', abbr: 'ND' },
    { name: 'Ohio', abbr: 'OH' },
    { name: 'Oklahoma', abbr: 'OK' },
    { name: 'Oregon', abbr: 'OR' },
    { name: 'Pennsylvania', abbr: 'PA' },
    { name: 'Rhode Island', abbr: 'RI' },
    { name: 'South Carolina', abbr: 'SC' },
    { name: 'South Dakota', abbr: 'SD' },
    { name: 'Tennessee', abbr: 'TN' },
    { name: 'Texas', abbr: 'TX' },
    { name: 'Utah', abbr: 'UT' },
    { name: 'Vermont', abbr: 'VT' },
    { name: 'Virginia', abbr: 'VA' },
    { name: 'Washington', abbr: 'WA' },
    { name: 'West Virginia', abbr: 'WV' },
    { name: 'Wisconsin', abbr: 'WI' },
    { name: 'Wyoming', abbr: 'WY' }
];

var CITIES_BY_STATE = {
    'AL': { cities: ['Birmingham', 'Montgomery', 'Huntsville'], zipStart: '350' },
    'AK': { cities: ['Anchorage', 'Fairbanks', 'Juneau'], zipStart: '995' },
    'AZ': { cities: ['Phoenix', 'Tucson', 'Mesa', 'Scottsdale'], zipStart: '850' },
    'AR': { cities: ['Little Rock', 'Fort Smith', 'Fayetteville'], zipStart: '716' },
    'CA': { cities: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'San Jose'], zipStart: '900' },
    'CO': { cities: ['Denver', 'Colorado Springs', 'Aurora', 'Boulder'], zipStart: '800' },
    'CT': { cities: ['Hartford', 'New Haven', 'Stamford', 'Bridgeport'], zipStart: '060' },
    'DE': { cities: ['Wilmington', 'Dover', 'Newark'], zipStart: '197' },
    'FL': { cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville'], zipStart: '321' },
    'GA': { cities: ['Atlanta', 'Savannah', 'Augusta', 'Athens'], zipStart: '300' },
    'HI': { cities: ['Honolulu', 'Hilo', 'Kailua'], zipStart: '967' },
    'ID': { cities: ['Boise', 'Meridian', 'Nampa'], zipStart: '836' },
    'IL': { cities: ['Chicago', 'Springfield', 'Peoria', 'Naperville'], zipStart: '606' },
    'IN': { cities: ['Indianapolis', 'Fort Wayne', 'Evansville'], zipStart: '462' },
    'IA': { cities: ['Des Moines', 'Cedar Rapids', 'Davenport'], zipStart: '503' },
    'KS': { cities: ['Wichita', 'Topeka', 'Overland Park'], zipStart: '660' },
    'KY': { cities: ['Louisville', 'Lexington', 'Bowling Green'], zipStart: '400' },
    'LA': { cities: ['New Orleans', 'Baton Rouge', 'Shreveport'], zipStart: '700' },
    'ME': { cities: ['Portland', 'Bangor', 'Lewiston'], zipStart: '040' },
    'MD': { cities: ['Baltimore', 'Annapolis', 'Rockville'], zipStart: '210' },
    'MA': { cities: ['Boston', 'Worcester', 'Cambridge', 'Springfield'], zipStart: '021' },
    'MI': { cities: ['Detroit', 'Grand Rapids', 'Ann Arbor', 'Lansing'], zipStart: '481' },
    'MN': { cities: ['Minneapolis', 'Saint Paul', 'Rochester'], zipStart: '554' },
    'MS': { cities: ['Jackson', 'Gulfport', 'Hattiesburg'], zipStart: '390' },
    'MO': { cities: ['Kansas City', 'Saint Louis', 'Springfield'], zipStart: '641' },
    'MT': { cities: ['Billings', 'Missoula', 'Great Falls'], zipStart: '590' },
    'NE': { cities: ['Omaha', 'Lincoln', 'Bellevue'], zipStart: '680' },
    'NV': { cities: ['Las Vegas', 'Reno', 'Henderson'], zipStart: '890' },
    'NH': { cities: ['Manchester', 'Nashua', 'Concord'], zipStart: '030' },
    'NJ': { cities: ['Newark', 'Jersey City', 'Trenton', 'Princeton'], zipStart: '071' },
    'NM': { cities: ['Albuquerque', 'Santa Fe', 'Las Cruces'], zipStart: '870' },
    'NY': { cities: ['New York', 'Buffalo', 'Rochester', 'Albany'], zipStart: '100' },
    'NC': { cities: ['Charlotte', 'Raleigh', 'Durham', 'Greensboro'], zipStart: '271' },
    'ND': { cities: ['Fargo', 'Bismarck', 'Grand Forks'], zipStart: '580' },
    'OH': { cities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo'], zipStart: '430' },
    'OK': { cities: ['Oklahoma City', 'Tulsa', 'Norman'], zipStart: '730' },
    'OR': { cities: ['Portland', 'Salem', 'Eugene', 'Bend'], zipStart: '970' },
    'PA': { cities: ['Philadelphia', 'Pittsburgh', 'Harrisburg'], zipStart: '191' },
    'RI': { cities: ['Providence', 'Warwick', 'Newport'], zipStart: '028' },
    'SC': { cities: ['Charleston', 'Columbia', 'Greenville'], zipStart: '290' },
    'SD': { cities: ['Sioux Falls', 'Rapid City', 'Aberdeen'], zipStart: '570' },
    'TN': { cities: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga'], zipStart: '372' },
    'TX': { cities: ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth'], zipStart: '750' },
    'UT': { cities: ['Salt Lake City', 'Provo', 'Ogden'], zipStart: '840' },
    'VT': { cities: ['Burlington', 'Montpelier', 'Rutland'], zipStart: '054' },
    'VA': { cities: ['Richmond', 'Virginia Beach', 'Norfolk', 'Arlington'], zipStart: '230' },
    'WA': { cities: ['Seattle', 'Tacoma', 'Spokane', 'Olympia'], zipStart: '980' },
    'WV': { cities: ['Charleston', 'Huntington', 'Morgantown'], zipStart: '253' },
    'WI': { cities: ['Milwaukee', 'Madison', 'Green Bay'], zipStart: '530' },
    'WY': { cities: ['Cheyenne', 'Casper', 'Laramie'], zipStart: '820' }
};

var JOB_TITLES = [
    'Software Developer', 'Accountant', 'Marketing Manager', 'Registered Nurse',
    'Sales Representative', 'Teacher', 'Graphic Designer', 'Financial Analyst',
    'Project Manager', 'Human Resources Specialist', 'Mechanical Engineer',
    'Administrative Assistant', 'Dental Hygienist', 'Electrician',
    'Real Estate Agent', 'Chef', 'Pharmacist', 'Web Developer',
    'Civil Engineer', 'Physical Therapist', 'Paralegal', 'Insurance Agent',
    'Truck Driver', 'Social Worker', 'Veterinarian', 'Network Administrator',
    'Journalist', 'Architect', 'Police Officer', 'Data Entry Clerk',
    'Plumber', 'Photographer', 'Librarian', 'Carpenter', 'Receptionist',
    'Office Manager', 'Bank Teller', 'Delivery Driver', 'Retail Manager',
    'Security Guard', 'Warehouse Worker', 'Customer Service Rep',
    'Flight Attendant', 'Loan Officer', 'Maintenance Technician'
];

var COMPANIES = [
    'Apex Solutions', 'Meridian Group', 'Summit Technologies',
    'Pinnacle Services', 'Horizon Enterprises', 'Vanguard Industries',
    'Sterling Associates', 'Bridgepoint Consulting', 'Lakewood Partners',
    'Clearwater Systems', 'Atlas Manufacturing', 'Crestview Financial',
    'Pacific Dynamics', 'Northern Star Corp', 'Redstone Engineering',
    'Blue Ridge Technologies', 'Granite Solutions', 'Silverline Corp',
    'Beacon Health', 'Cornerstone Services', 'Iron Gate Industries',
    'Skyline Consulting', 'Westbrook Partners', 'Evergreen Solutions',
    'Oakmont Group', 'Riverside Medical', 'Falcon Technologies',
    'Diamond Systems', 'Coastal Logistics', 'Prairie Wind Energy'
];

var EMAIL_DOMAINS = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'aol.com', 'outlook.com',
    'mail.com', 'icloud.com', 'comcast.net', 'verizon.net', 'att.net'
];

var BROWSERS = [
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:29.0) Gecko/20100101 Firefox/29.0',
    'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/537.75.14',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36',
    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:28.0) Gecko/20100101 Firefox/28.0',
    'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)'
];

var CC_PREFIXES = {
    'Visa': ['4'],
    'MasterCard': ['51', '52', '53', '54', '55'],
    'American Express': ['34', '37'],
    'Discover': ['6011', '65']
};
