
//     *
//    ***
//   *****
//  *******

console.clear();

// let n=3;
// let sum="*";
// console.log(sum);
// for (let i = 0; i < n; i++) {
//     sum += "**"
//  console.log(sum);
   
// }

//  ---*
//  --***
//  -*****


// let n=5;
// for (let i = 1; i <= n; i++) {
//     let star = "*";
//     let space= " ";
//     console.log(`${space.repeat(n-i)}${star.repeat((2*i)-1)}`);
// }
// for (let i = n; i >= 1; i--) {
//     let star = "*";
//     let space= " ";
//     console.log(`${space.repeat(n-i)}${star.repeat((2*i)-1)}`);
// }


 function baklava(n) {
    for (let i = 1; i <= n; i++) {
        let star = "*";
        let space= " ";
        console.log(`${space.repeat(n-i)}${star.repeat((2*i)-1)}${space.repeat(n-i)}`);
    }
    for (let i = n; i >= 1; i--) {
        let star = "*";
        let space= " ";
        console.log(`${space.repeat(n-i)}${star.repeat((2*i)-1)}${space.repeat(n-i)}`);
    }
}

baklava(20);


//     1 3 5 7 9 11
//     ((2*i)-1)

//  ---*
//  --***
//  -*****
// n=5  =>  5 4 3 2 1

// let n = 5;
// let pattern = "";
         
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         pattern += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//     pattern += "*";
//     }
//     pattern += "\n";
// }
// console.log(pattern);