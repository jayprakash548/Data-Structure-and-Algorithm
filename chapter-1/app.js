let x = 5;
let y = 2;

var mid = 25;
var high = 50;
var low = 1;
var current = 13;
var found = -1;

var day;

console.log(x + y);
console.log((x + y) * (x-y));

console.log(Math.sqrt(5).toFixed(2)); // find squre root and Returns a string representing a number in fixed-point notation.

console.log(Math.abs(x/y)); //Returns the absolute value of a number (the value without regard to whether it is positive or negative)


if (current < mid) {
mid = (current-low) / 2;
console.log(mid);
}

switch(new Date().getDay()){
    case 0:
        console.log(day = "Sunday");
        break;
    case 1:
        console.log(day = "Monday");
        break;
    case 2:
        console.log(day = "Tuesday");
        break; 
    case 3:
        console.log(day = "Wednesday");
        break;
    case 4:
        day = "Thrusday";
        break;
    case 5:
        console.log(day = "Friday");
        break;
    case 6:
        console.log(day = "Saturday");
        break; 
    default:
        console.log('Enjoye!!');
}
let num = 1;
let sum = 0;

while(num < 10 ){
    sum+=num;
    ++num;
}
console.log(sum);
