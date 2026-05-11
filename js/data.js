var MALE_FIRST_NAMES = [
    'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard',
    'Joseph', 'Thomas', 'Charles', 'Christopher', 'Daniel', 'Matthew',
    'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua',
    'Kenneth', 'Kevin', 'Brian', 'George', 'Timothy', 'Ronald', 'Edward',
    'Jason', 'Jeffrey', 'Ryan', 'Jacob', 'Gary', 'Nicholas', 'Eric',
    'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon',
    'Benjamin', 'Samuel', 'Raymond', 'Gregory', 'Frank', 'Alexander',
    'Patrick', 'Jack', 'Dennis', 'Jerry', 'Tyler', 'Aaron', 'Nathan',
    'Henry', 'Peter', 'Douglas', 'Harold', 'Carl', 'Arthur', 'Albert',
    'Roger', 'Joe', 'Juan', 'Wayne', 'Ralph', 'Roy', 'Eugene',
    'Randy', 'Vincent', 'Russell', 'Louis', 'Philip', 'Bobby', 'Harry',
    'Johnny', 'Gerald', 'Walter', 'Terry', 'Bruce', 'Lawrence', 'Dylan',
    'Jesse', 'Bryan', 'Billy', 'Christian', 'Alan', 'Sean', 'Howard',
    'Miguel', 'Carlos', 'Luis', 'Jorge', 'Antonio', 'Ricardo', 'Alejandro',
    'Diego', 'Javier', 'Hector', 'Ruben', 'Cesar', 'Fernando', 'Marco',
    'Jamal', 'Marcus', 'Darius', 'Andre', 'Malik', 'Terrence', 'Damon',
    'Antoine', 'Darnell', 'Isaiah', 'Elijah', 'Emmanuel', 'Leroy', 'Curtis',
    'Raj', 'Arjun', 'Omar', 'Amir', 'Ravi', 'Wei', 'Yusuf', 'Kenji'
];

var FEMALE_FIRST_NAMES = [
    'Mary', 'Patricia', 'Jennifer', 'Linda', 'Barbara', 'Elizabeth',
    'Susan', 'Jessica', 'Sarah', 'Karen', 'Lisa', 'Nancy', 'Betty',
    'Margaret', 'Sandra', 'Ashley', 'Dorothy', 'Kimberly', 'Emily',
    'Donna', 'Michelle', 'Carol', 'Amanda', 'Melissa', 'Deborah',
    'Stephanie', 'Rebecca', 'Sharon', 'Laura', 'Cynthia', 'Kathleen',
    'Amy', 'Angela', 'Shirley', 'Anna', 'Brenda', 'Pamela', 'Emma',
    'Nicole', 'Helen', 'Samantha', 'Katherine', 'Christine', 'Debra',
    'Rachel', 'Carolyn', 'Janet', 'Catherine', 'Maria', 'Heather',
    'Diane', 'Ruth', 'Julie', 'Olivia', 'Joyce', 'Virginia', 'Victoria',
    'Kelly', 'Lauren', 'Christina', 'Joan', 'Evelyn', 'Judith', 'Megan',
    'Andrea', 'Cheryl', 'Hannah', 'Jacqueline', 'Martha', 'Gloria',
    'Teresa', 'Ann', 'Sara', 'Madison', 'Frances', 'Kathryn', 'Janice',
    'Jean', 'Abigail', 'Alice', 'Judy', 'Sophia', 'Grace', 'Denise',
    'Amber', 'Doris', 'Marilyn', 'Danielle', 'Beverly', 'Isabella',
    'Sofia', 'Carmen', 'Valentina', 'Adriana', 'Gabriela', 'Lucia',
    'Elena', 'Rosa', 'Esperanza', 'Guadalupe', 'Mariana', 'Veronica',
    'Aaliyah', 'Keisha', 'Tamara', 'Nia', 'Imani', 'Destiny', 'Monique',
    'Jasmine', 'Latasha', 'Shanice', 'Brianna', 'Ebony', 'Zora',
    'Priya', 'Aisha', 'Fatima', 'Yasmin', 'Maya', 'Zoe', 'Naomi', 'Mei'
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
    'Kim', 'Cox', 'Ward',
    'Washington', 'Freeman', 'Banks', 'Jefferson', 'Simmons', 'Warren',
    'Coleman', 'Willis', 'Booker', 'Payne', 'Bryant', 'Griffin',
    'Patel', 'Sharma', 'Singh', 'Gupta', 'Kumar', 'Rao',
    'Chen', 'Wong', 'Park', 'Huang', 'Zhang', 'Choi',
    'Ali', 'Hassan', 'Ahmad', 'Okafor', 'Diallo', 'Baptiste'
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
    'AL': { 'Birmingham': ['35203','35205','35209','35213'], 'Montgomery': ['36104','36106','36109','36117'], 'Huntsville': ['35801','35802','35805','35806'], 'Mobile': ['36602','36604','36606','36608'], 'Tuscaloosa': ['35401','35404','35405','35406'] },
    'AK': { 'Anchorage': ['99501','99502','99503','99504'], 'Fairbanks': ['99701','99703','99705','99709'], 'Juneau': ['99801','99803'], 'Sitka': ['99835'] },
    'AZ': { 'Phoenix': ['85003','85004','85006','85008'], 'Tucson': ['85701','85705','85711','85716'], 'Mesa': ['85201','85203','85204','85210'], 'Scottsdale': ['85250','85251','85254','85257'] },
    'AR': { 'Little Rock': ['72201','72204','72205','72207'], 'Fort Smith': ['72901','72903','72904','72908'], 'Fayetteville': ['72701','72703','72704'] },
    'CA': { 'Los Angeles': ['90001','90012','90025','90036'], 'San Francisco': ['94102','94103','94110','94117'], 'San Diego': ['92101','92103','92108','92115'], 'Sacramento': ['95814','95815','95816','95818'], 'San Jose': ['95101','95112','95116','95128'] },
    'CO': { 'Denver': ['80202','80203','80205','80209'], 'Colorado Springs': ['80901','80903','80906','80909'], 'Aurora': ['80010','80012','80013','80014'], 'Boulder': ['80301','80302','80303','80304'] },
    'CT': { 'Hartford': ['06101','06103','06105','06106'], 'New Haven': ['06510','06511','06513','06515'], 'Stamford': ['06901','06902','06903','06905'], 'Bridgeport': ['06604','06605','06606','06608'] },
    'DE': { 'Wilmington': ['19801','19802','19803','19805'], 'Dover': ['19901','19902','19904'], 'Newark': ['19702','19711','19713'], 'Middletown': ['19709'] },
    'FL': { 'Miami': ['33101','33125','33130','33133'], 'Orlando': ['32801','32803','32806','32809'], 'Tampa': ['33602','33605','33606','33609'], 'Jacksonville': ['32204','32205','32207','32210'], 'Fort Lauderdale': ['33301','33304','33308','33311'], 'St. Petersburg': ['33701','33703','33705','33710'] },
    'GA': { 'Atlanta': ['30303','30305','30306','30309'], 'Savannah': ['31401','31404','31405','31406'], 'Augusta': ['30901','30904','30906','30907'], 'Athens': ['30601','30605','30606','30607'] },
    'HI': { 'Honolulu': ['96813','96814','96815','96816'], 'Hilo': ['96720','96721'], 'Kailua': ['96734'] },
    'ID': { 'Boise': ['83702','83703','83704','83705'], 'Meridian': ['83642','83646'], 'Nampa': ['83651','83686','83687'] },
    'IL': { 'Chicago': ['60601','60605','60607','60614'], 'Springfield': ['62701','62702','62703','62704'], 'Peoria': ['61601','61603','61604','61606'], 'Naperville': ['60540','60563','60564','60565'] },
    'IN': { 'Indianapolis': ['46201','46202','46203','46204'], 'Fort Wayne': ['46802','46803','46805','46807'], 'Evansville': ['47708','47710','47711','47714'], 'South Bend': ['46601','46613','46614','46615'], 'Carmel': ['46032','46033'] },
    'IA': { 'Des Moines': ['50309','50310','50311','50312'], 'Cedar Rapids': ['52401','52402','52403','52404'], 'Davenport': ['52801','52803','52804','52806'] },
    'KS': { 'Wichita': ['67202','67203','67204','67206'], 'Topeka': ['66603','66604','66606','66607'], 'Overland Park': ['66062','66212','66213','66214'] },
    'KY': { 'Louisville': ['40202','40203','40204','40205'], 'Lexington': ['40502','40503','40504','40505'], 'Bowling Green': ['42101','42103','42104'] },
    'LA': { 'New Orleans': ['70112','70113','70115','70116'], 'Baton Rouge': ['70801','70802','70806','70808'], 'Shreveport': ['71101','71103','71104','71105'] },
    'ME': { 'Portland': ['04101','04102','04103'], 'Bangor': ['04401','04402'], 'Lewiston': ['04240','04241'] },
    'MD': { 'Baltimore': ['21201','21202','21205','21211'], 'Annapolis': ['21401','21403','21404'], 'Rockville': ['20850','20851','20852','20853'] },
    'MA': { 'Boston': ['02108','02109','02115','02116'], 'Worcester': ['01601','01602','01603','01604'], 'Cambridge': ['02138','02139','02140','02141'], 'Springfield': ['01103','01104','01105','01108'] },
    'MI': { 'Detroit': ['48201','48202','48203','48205'], 'Grand Rapids': ['49503','49504','49505','49506'], 'Ann Arbor': ['48103','48104','48105','48108'], 'Lansing': ['48906','48910','48911','48912'] },
    'MN': { 'Minneapolis': ['55401','55403','55405','55408'], 'Saint Paul': ['55101','55102','55103','55104'], 'Rochester': ['55901','55902','55904','55906'] },
    'MS': { 'Jackson': ['39201','39202','39203','39204'], 'Gulfport': ['39501','39503','39507'], 'Hattiesburg': ['39401','39402','39403'] },
    'MO': { 'Kansas City': ['64105','64108','64109','64111'], 'Saint Louis': ['63103','63104','63106','63108'], 'Springfield': ['65802','65803','65804','65806'] },
    'MT': { 'Billings': ['59101','59102','59105','59106'], 'Missoula': ['59801','59802','59803','59804'], 'Great Falls': ['59401','59403','59404','59405'] },
    'NE': { 'Omaha': ['68102','68104','68105','68107'], 'Lincoln': ['68502','68503','68504','68505'], 'Bellevue': ['68005','68123','68147'] },
    'NV': { 'Las Vegas': ['89101','89104','89106','89109'], 'Reno': ['89501','89502','89503','89505'], 'Henderson': ['89002','89014','89015','89052'] },
    'NH': { 'Manchester': ['03101','03102','03103','03104'], 'Nashua': ['03060','03062','03063','03064'], 'Concord': ['03301','03303'] },
    'NJ': { 'Newark': ['07102','07103','07104','07105'], 'Jersey City': ['07302','07304','07305','07306'], 'Trenton': ['08608','08609','08610','08611'], 'Princeton': ['08540','08542','08543'] },
    'NM': { 'Albuquerque': ['87102','87104','87106','87108'], 'Santa Fe': ['87501','87502','87505','87506'], 'Las Cruces': ['88001','88003','88004','88005'] },
    'NY': { 'New York': ['10001','10002','10003','10011'], 'Buffalo': ['14201','14202','14203','14204'], 'Rochester': ['14604','14605','14607','14608'], 'Albany': ['12203','12204','12206','12207'], 'Syracuse': ['13202','13203','13204','13205'], 'Yonkers': ['10701','10703','10704','10705'] },
    'NC': { 'Charlotte': ['28202','28203','28204','28205'], 'Raleigh': ['27601','27603','27604','27605'], 'Durham': ['27701','27703','27704','27705'], 'Greensboro': ['27401','27403','27405','27406'] },
    'ND': { 'Fargo': ['58102','58103','58104','58105'], 'Bismarck': ['58501','58503','58504','58505'], 'Grand Forks': ['58201','58202','58203'] },
    'OH': { 'Columbus': ['43201','43202','43203','43204'], 'Cleveland': ['44102','44103','44104','44105'], 'Cincinnati': ['45202','45203','45204','45205'], 'Toledo': ['43604','43605','43606','43607'] },
    'OK': { 'Oklahoma City': ['73102','73103','73104','73105'], 'Tulsa': ['74103','74104','74105','74106'], 'Norman': ['73069','73071','73072'] },
    'OR': { 'Portland': ['97201','97202','97203','97205'], 'Salem': ['97301','97302','97303','97304'], 'Eugene': ['97401','97402','97403','97404'], 'Bend': ['97701','97702','97703'] },
    'PA': { 'Philadelphia': ['19102','19103','19104','19106'], 'Pittsburgh': ['15203','15204','15206','15213'], 'Harrisburg': ['17101','17102','17103','17104'] },
    'RI': { 'Providence': ['02903','02904','02905','02906'], 'Warwick': ['02886','02888','02889'], 'Newport': ['02840','02841','02842'] },
    'SC': { 'Charleston': ['29401','29403','29405','29407'], 'Columbia': ['29201','29203','29204','29205'], 'Greenville': ['29601','29605','29607','29609'] },
    'SD': { 'Sioux Falls': ['57103','57104','57105','57106'], 'Rapid City': ['57701','57702','57703'], 'Aberdeen': ['57401','57402'] },
    'TN': { 'Nashville': ['37203','37204','37206','37209'], 'Memphis': ['38103','38104','38105','38106'], 'Knoxville': ['37902','37915','37916','37917'], 'Chattanooga': ['37402','37403','37404','37405'] },
    'TX': { 'Houston': ['77002','77003','77004','77006'], 'Dallas': ['75201','75202','75203','75204'], 'Austin': ['78701','78702','78703','78704'], 'San Antonio': ['78201','78202','78203','78204'], 'Fort Worth': ['76102','76103','76104','76107'], 'El Paso': ['79901','79902','79903','79904'], 'Arlington': ['76010','76011','76012','76013'], 'Plano': ['75023','75024','75025','75074'] },
    'UT': { 'Salt Lake City': ['84101','84102','84103','84104'], 'Provo': ['84601','84602','84603','84604'], 'Ogden': ['84401','84403','84404','84405'] },
    'VT': { 'Burlington': ['05401','05402','05403','05408'], 'Montpelier': ['05601','05602'], 'Rutland': ['05701','05702'] },
    'VA': { 'Richmond': ['23219','23220','23221','23222'], 'Virginia Beach': ['23451','23452','23453','23454'], 'Norfolk': ['23502','23503','23504','23505'], 'Arlington': ['22201','22202','22203','22204'] },
    'WA': { 'Seattle': ['98101','98102','98103','98104'], 'Tacoma': ['98402','98403','98404','98405'], 'Spokane': ['99201','99202','99203','99204'], 'Olympia': ['98501','98502','98503','98506'] },
    'WV': { 'Charleston': ['25301','25302','25303','25304'], 'Huntington': ['25701','25702','25703','25704'], 'Morgantown': ['26501','26502','26505','26506'] },
    'WI': { 'Milwaukee': ['53202','53203','53204','53205'], 'Madison': ['53703','53704','53705','53706'], 'Green Bay': ['54301','54302','54303','54304'] },
    'WY': { 'Cheyenne': ['82001','82002','82003','82007'], 'Casper': ['82601','82602','82604','82609'], 'Laramie': ['82070','82072','82073'] }
};

var JOB_SECTORS = [
    {
        titles: ['Software Developer', 'Web Developer', 'Network Administrator', 'Data Entry Clerk'],
        companies: ['Summit Technologies', 'Clearwater Systems', 'Blue Ridge Technologies', 'Falcon Technologies', 'Diamond Systems', 'Nexus Software', 'Apex Digital Solutions']
    },
    {
        titles: ['Registered Nurse', 'Dental Hygienist', 'Pharmacist', 'Physical Therapist'],
        companies: ['Regional Medical Center', 'Valley Health Clinic', "St. Luke's Hospital", 'Northside Medical Group', 'Community Health Network', 'Sunrise Pharmacy']
    },
    {
        titles: ['Veterinarian'],
        companies: ['Riverside Animal Hospital', 'Greenfield Veterinary Clinic', 'PetCare Center', 'Northside Animal Hospital', 'Valley Veterinary Associates']
    },
    {
        titles: ['Accountant', 'Financial Analyst', 'Bank Teller', 'Loan Officer', 'Insurance Agent'],
        companies: ['Crestview Financial', 'First National Bank', 'Capital Trust Group', 'Pacific Insurance', 'Heritage Savings Bank', 'Lakewood Capital', 'Northern Star Financial']
    },
    {
        titles: ['Teacher', 'Librarian'],
        companies: ['Lincoln Elementary School', 'Jefferson Middle School', 'Washington High School', 'Central Public Library', 'Eastside Academy', 'Riverside Community School']
    },
    {
        titles: ['Electrician', 'Plumber', 'Carpenter', 'Maintenance Technician'],
        companies: ['Metro Electric', 'Allied Plumbing', 'Premier Contracting', 'Ironworks Construction', 'Bayview Maintenance Services', 'Cornerstone Contractors']
    },
    {
        titles: ['Paralegal', 'Architect'],
        companies: ['Morrison & Associates', 'Whitfield Architecture Group', 'Cornerstone Law', 'Bridgepoint Legal', 'Elevate Design Studio', 'Pacific Legal Partners']
    },
    {
        titles: ['Journalist', 'Graphic Designer', 'Photographer'],
        companies: ['The Daily Tribune', 'Silverline Creative Agency', 'North Light Studios', 'City Press', 'Horizon Media Group', 'Vanguard Publishing']
    },
    {
        titles: ['Truck Driver', 'Delivery Driver', 'Warehouse Worker'],
        companies: ['Swift Freight Lines', 'National Courier Services', 'Central Logistics', 'Interstate Carriers', 'Pacific Transport', 'Atlas Freight']
    },
    {
        titles: ['Flight Attendant'],
        companies: ['Horizon Air', 'Summit Airlines', 'Pacific Airways', 'Coastal Air Group', 'National Air Services']
    },
    {
        titles: ['Chef', 'Receptionist'],
        companies: ['Harbor Restaurant Group', 'Central Station Bistro', 'Meridian Hotel Group', 'Lakewood Catering', 'Grand View Inn', 'The Riverside Kitchen']
    },
    {
        titles: ['Retail Manager', 'Customer Service Rep', 'Sales Representative'],
        companies: ['Northgate Shopping Center', 'Fresh Market Grocers', 'Lakewood Retail Partners', 'Eastside Mall', 'Pinnacle Retail Group', 'Cornerstone Stores']
    },
    {
        titles: ['Marketing Manager', 'Project Manager', 'Human Resources Specialist', 'Administrative Assistant', 'Office Manager'],
        companies: ['Pinnacle Services', 'Horizon Enterprises', 'Vanguard Industries', 'Sterling Associates', 'Bridgepoint Consulting', 'Oakmont Group', 'Evergreen Solutions']
    },
    {
        titles: ['Mechanical Engineer', 'Civil Engineer'],
        companies: ['Redstone Engineering', 'Atlas Manufacturing', 'Granite Solutions', 'Pacific Dynamics', 'Westbrook Engineering', 'Iron Gate Industries']
    },
    {
        titles: ['Police Officer', 'Social Worker', 'Security Guard'],
        companies: ['Metropolitan Police Department', 'County Social Services', 'City Public Safety Office', 'Community Protection Services', 'Valley Security']
    },
    {
        titles: ['Real Estate Agent'],
        companies: ['Premier Realty Group', 'Lakewood Properties', 'Summit Real Estate', 'Coastal Realty', 'Horizon Homes', 'Pinnacle Properties']
    }
];

var EMAIL_DOMAINS = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'aol.com', 'outlook.com',
    'mail.com', 'icloud.com', 'comcast.net', 'verizon.net', 'att.net'
];

var CC_PREFIXES = {
    'Visa': ['4'],
    'MasterCard': ['51', '52', '53', '54', '55'],
    'American Express': ['34', '37'],
    'Discover': ['6011', '65']
};
