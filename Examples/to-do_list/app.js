
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("todo-button");
const ulList = document.getElementById("todo-ul");

const li = document.createElement("li")

addButton.addEventListener("click",(e)=>{
  e.preventDefault()
 ulList.appendChild(li);
 li.append()
 console.log(li);
console.log(todoInput.value);
})


// const m1 = ["Kiraz","Muz","Kivi","Uzum"]
// const m2 = localStorage.setItem("Armut","Elma")

// const m3 = localStorage.getItem("Armut")
// const m4 = localStorage.setItem("m1",JSON.stringify(m1))
// const m5 = JSON.parse(localStorage.getItem("m1")) 

// console.log(m5);