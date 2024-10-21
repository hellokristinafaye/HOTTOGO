// console.log("wicked dreams");

// function getCount(str) {
//     var vowelsCount = 0;
//     str.split("").forEach(function (x) {
//         if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
//             vowelsCount += 1;
//         }
//     });
//     return vowelsCount;
// }

// // getCount("wicked");
// console.log(getCount("west hollywood"));

// function makeNegative(num) {
//     return -Math.abs(num);
// }

// console.log(makeNegative(0));

// function makeNegative(num) {
//     return num <= 0 ? num : -num;
// }

// console.log(makeNegative(0))

//

// function removeChar(str) {
//     //You got this!
//     str1 = str.split('');
//     str1.shift();
//     str1.pop();
//     str1.join('');
//     return str1.join('');
    
// };

// console.log(removeChar('oh right, you'));

// const humanYearsCatYearsDogYears = (humanYears) => {
//     let catYears = 0;
//     let dogYears = 0;

//     for (let i = 1; i <= humanYears; i++) {
//         if (i === 1) {
//             catYears += 15;
//             dogYears += 15;
//         }
//         else if (i === 2) {
//             catYears += 9;
//             dogYears += 9;
//         }
//         else {
//             catYears += 4;
//             dogYears += 5;
//         }
//     }
//     return [humanYears, catYears, dogYears];
// }

// console.log(humanYearsCatYearsDogYears(17))

// function getAge(inputString) {
//     // return the girl's correct age as an integer. Happy coding :) 

//     return parseInt(inputString);
// }

// console.log(getAge("4 years old"));

const century = year => Math.ceil(year / 100)







console.log(century(1705), 'Testing for year ' + year);

