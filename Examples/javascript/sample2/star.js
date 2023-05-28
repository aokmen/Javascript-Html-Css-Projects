
//     *
//    ***
//   *****
//  *******

console.clear();

// function star(n){


// for (let i = 0; i < n; i++) {
//     let sum="";
//     for (let j = n; j > i; j--) {
//         sum += " ";
//     }

//     for (let k = 0; k < (i*2+1); k++) {
//         sum += "*"      
//     }
//     for (let j = n; j > i; j--) {
//         sum += " ";
//     }
//     console.log(sum);
// }

// for (let i = n; i >= 0; i--) {
//     let sum="";
//     for (let j = n; j > i; j--) {
//         sum += " ";
//     }

//     for (let k = 0; k < (i*2+1); k++) {
//         sum += "*"      
//     }
//     for (let j = n; j > i; j--) {
//         sum += " ";
//     }
//    console.log(sum);
// }
// }

// star(10);

//     *
//    ***
//   *****

// 5 >> 4 3 2 1
// let n=5;
// let star="*";
// let space="_";
// for (let i = 1; i <= n; i++) {
//     document.write(`${space.repeat(n-i)}${star.repeat(i*2-1)}${space.repeat(n-i)}`)
//     document.write("<br>") 
// }
// for (let i = n-1; i >= 1; i--) {
//     document.write(`${space.repeat(n-i)}${star.repeat(i*2-1)}${space.repeat(n-i)}`)
//     document.write("<br>") 
// }
 // document.write("<br>");

 var romanToInt = function(s) {
let n=s;
let sum = 0;
for (let i = 0; i < s.length; i++) {
    if(n[i] === "I"){
        if(n[i+1] === "V") sum += 4;
        else if(n[i+1] === "X") sum += 9; 
        else  sum += 1;
    }
    if(n[i] === "X" && n[i-1] !== "I"){
        if(n[i+1] === "L") sum += 40;
        else if(n[i+1] === "C") sum += 90; 
        else  sum += 10;
    }
    if(n[i] === "C" && n[i-1] !== "X"){
        if(n[i+1] === "D") sum += 400;
        else if(n[i+1] === "M") sum += 900; 
        else  sum += 100;
    }
    
    if(n[i] === "V" && n[i-1] !== "I") sum += 5;
    if(n[i] === "L" && n[i-1] !== "X") sum += 50;
    if(n[i] === "D" && n[i-1] !== "C") sum += 500;
    if(n[i] === "M" && n[i-1] !== "C") sum += 1000;
}

return parseInt(sum);

 }


//  var romanToInt = function(s) {
//     const sym = {
//       'I': 1,
//       'V': 5,
//       'X': 10,
//       'L': 50,
//       'C': 100,
//       'D': 500,
//       'M': 1000
//   }

//   let result = 0;

//   for (let i = 0; i < s.length; i++) {
//       const cur = sym[s[i]];
//       const next = sym[s[i + 1]];

//       if (cur < next) {
//           result += next - cur;
//           i++;
//       } else {
//           result += cur;
//       }
//   }

//   return result;
// };
// document.write(romanToInt("MCMXCIV"));

// let n="MCMXCIV";
// let sum = 0;

// for (let i = 0; i < n.length; i++) {
//     const sym = {
//         'I' : 1,
//         'V' : 5,
//         'X' : 10,
//         'L' : 50,
//         'C' : 100,
//         'D' : 500,
//         'M' : 1000
//     }
//     let vor = sym[n[i]];
//     let next = sym[n[i+1]];
//     if(vor > next) sum += vor; 
//     else {
//         sum +=next-vor;
//         i++;
//     }   
// }
// document.write(sum);

// var isValid = function(s) {
//     for (let i = 0; i < s.length; i++) {
//        return (s[i]==="(" && s[i+1]===")") || (s[i]==="{" && s[i+1]==="}") || (s[i]==="[" && s[i+1]==="]") ? true : false;
        
//     }
    
// };
// document.write(isValid("(]"));

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let array=[];

        for (let j = nums.length-1; j > i; j--) {
            if (nums[i]+nums[j]===target) {
                array.push(i);
                array.push(j);
                return array;
            }
        }
    }
};

console.log(twoSum([2,5,5],10));