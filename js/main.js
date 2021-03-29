// 1. Second in hour

const secondInAMinute = 60;
const minuteInAHour = 60;
const secondsInAHour = secondInAMinute * minuteInAHour;

console.log("Second in hour " + secondsInAHour);


//2. Seconds in a day
const hourInDay = 24;
const secondInDay = secondsInAHour * hourInDay;

console.log("Second in day " + secondInDay);

//3. Seconds per year

const daysInYear = 365;
const secondsInAYear = secondInDay * daysInYear;

console.log("Seconds per year " + secondsInAYear);


//4. Age in seconds
const age = 30;

const totalAgeInSecond = age * secondsInAYear;


// console.log(secondsInAHour, secondInDay);
console.log("Your Age in seconds " +  totalAgeInSecond);