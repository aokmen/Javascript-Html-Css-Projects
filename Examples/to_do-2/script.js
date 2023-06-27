
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve,ms));
// }
// async function sayHello(){
//     await delay(2000);
//     console.log("merhaba");
// }
// sayHello();
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve,ms))
    
}
async function sayHello() {
    await delay(2000)
    console.log("hi");
}
sayHello();