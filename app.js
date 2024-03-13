// chapter no 14/16
// Q1
var arr = []
// Q2
var arr1 = {
    array: []
}
// Q3
var stringArray = ["apple", "banana", "orange", "grape"];
var numberArray = [1, 2, 3, 4];
// Q4
var booleanArray = [true, false, true, false];
// Q5
var mixedArray = ["apple", 123, true, "banana", 456, false];
// Q6
var Array = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("1) ", Array[0], "</br>");
document.write("2) ", Array[2], "</br>");
document.write("3) ", Array[3], "</br>");
document.write("4) ", Array[4], "</br>");
document.write("5) ", Array[5], "</br>");
document.write("6) ", Array[6], "</br>");
document.write("7) ", Array[7], "</br>");
// Q7
var studentNames = ["Alice", "Bob", "Charlie"];

var scores = [400, 450, 380];

function calculatePercentage(score) {
    return (score / 500) * 100;
}

console.log("Student Scores and Percentages:");
for (let i = 0; i < studentNames.length; i++) {
    let percentage = calculatePercentage(scores[i]);
    console.log(studentNames[i] + " scored " + scores[i] + " out of 500, with a percentage of " + percentage.toFixed(2) + "%");
}
// Q8
var studentScores = [85, 72, 93, 65, 88];
console.log("Original array: " + studentScores.join(", "));
studentScores.sort(function (a, b) {
    return a - b;
});
console.log("Sorted array in ascending order: " + studentScores.join(", "));
// Q9
var cityArr = ["Karachi", "Lahor", "islambad", "Queta", "Sakkhar"];
var selectedCity = [];
selectedCity = cityArr.slice(0, 3);
console.log("Selected cities array:", selectedCity);
//  Q10
var arr = ["This ", " is ", " my ", " cat"];

var singleString = arr.join("");

console.log(singleString);
// Q11

var tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

document.write("Multiplication table of ", tableNumber, " with length ", tableLength);
for (i = 1; i <= tableLength; i++) {
    document.write(tableNumber, " x ", i, " = " ,(tableNumber * i),"</br>");
} 
// Q12

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Items of the array 'fruits':");
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Q13
// Counting: 1 to 15
console.log("Counting:");
for ( i = 1; i <= 15; i++) {
    console.log(i);
}

// Reverse counting: 10 to 1
console.log("\nReverse counting:");
for ( i = 10; i >= 1; i--) {
    console.log(i);
}

// Even numbers: 0 to 20
console.log("\nEven:");
for ( i = 0; i <= 20; i += 2) {
    console.log(i);
}

// Odd numbers: 1 to 19
console.log("\nOdd:");
for ( i = 1; i <= 19; i += 2) {
    console.log(i);
}

// Series: 2k to 20k
console.log("\nSeries:");
for (let i = 2; i <= 20; i += 2) {
    console.log(i + "k");
}
// Q14
var Arr = ["cake", "apple pie", "cookie", "chips", "patties"];


function searchItem(item) {
    for ( i = 0; i < Arr.length; i++) {
        if (Arr[i] === item) {
            return true;
        }
    }
    return false;
}

var userInput = prompt("Enter the item to search:");
var isFound = searchItem(userInput);

if (isFound) {
    console.log("Yes, " ,userInput," is found in the list.");
} else {
    console.log("No, ",userInput," is not found in the list.");
}

// Q15
var Arr = [24, 53, 78, 91, 12];

var largest = Arr[0];
for ( i = 1; i < Arr.length; i++) {
    if (Arr[i] > largest) {
        largest = Arr[i];
    }
}
console.log("The largest number in the array is:", largest);

// Q16
var ArrSmall = [24, 53, 78, 91, 12];

var smallest = ArrSmall[0];
for ( i = 1; i < ArrSmall.length; i++) {
    if (ArrSmall[i] < smallest) {
        smallest = ArrSmall[i];
    }
}

// Output the smallest number
console.log("The smallest number in the array is:", smallest);

// Q17
console.log("Multiples of 5 from 1 to 100:");
for ( i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
