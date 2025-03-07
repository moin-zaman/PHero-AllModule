const today = new Date();

console.log(today);

const date = new Date("2062-10-20"); //YYYY-MM-DD
console.log(date);
console.log(date.getDay()); //Here  Day means which day like Sunday = 0... Friday = 5, Saturday = 6

console.log(date.getMonth()); // Jan =0, .. Dec = 11

const specificDay = new Date(2091, 0, 22); // here month num = index num but day number not index num

console.log(specificDay);
console.log(specificDay.toLocaleString('en-GB'));

// Unix epoc // Converts dato to sec to compare to date

// Time Zone -------> UTC Time
// Day Light Saving

// Moment Js for Date time Compare