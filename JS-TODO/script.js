const addBtn = document.querySelector("#addBtn");
const removeAllBtn = document.querySelector("#removeAllBtn");
const list = document.querySelector("#list");
const inputText = document.querySelector("#inputText");

// Sayfa yüklendiğinde kaydedilmiş görevleri geri yükle
window.addEventListener("load", () => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    list.innerHTML = savedTasks;
    addDeleteButtonListeners();
  }
});

addBtn.addEventListener("click", () => {
  if (inputText.value) {
    const newList = document.createElement("li");
    const newBtn = document.createElement("button");

    newBtn.textContent = "Delete";
    newList.textContent = inputText.value;
    list.appendChild(newList);
    list.appendChild(newBtn);
    inputText.value = "";

    addTaskToLocalStorage(newList.outerHTML + newBtn.outerHTML);

    newBtn.addEventListener("click", () => {
      list.removeChild(newList);
      list.removeChild(newBtn);
      removeTaskFromLocalStorage(newList.outerHTML + newBtn.outerHTML);
    });
  }
});

removeAllBtn.addEventListener("click", () => {
  localStorage.removeItem("tasks");
  list.innerHTML = "";
});

// Görevi local storage'a ekle
function addTaskToLocalStorage(task) {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    localStorage.setItem("tasks", savedTasks + task);
  } else {
    localStorage.setItem("tasks", task);
  }
}

// Görevi local storage'dan kaldır
function removeTaskFromLocalStorage(task) {
  const savedTasks = localStorage.getItem("tasks");
  const updatedTasks = savedTasks.replace(task, "");
  localStorage.setItem("tasks", updatedTasks);
}

// Silme butonlarına dinleyici ekle
function addDeleteButtonListeners() {
  const deleteButtons = document.querySelectorAll("li + button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const taskElement = button.previousElementSibling;
      list.removeChild(taskElement);
      list.removeChild(button);
      removeTaskFromLocalStorage(taskElement.outerHTML + button.outerHTML);
    });
  });
}

























// const addBtn = document.querySelector("#addBtn");
// const list = document.querySelector("#list");
// const inputText = document.querySelector("#inputText");


// addBtn.addEventListener("click", () => {
//     if (inputText.value) {
// const newList = document.createElement("li")
// const newBtn = document.createElement("button")

// newBtn.textContent = "Delete";
// newList.textContent = inputText.value;
// list.appendChild(newList);

// list.appendChild(newBtn);
// inputText.value = "";

// newBtn.addEventListener("click", () => {
//     list.removeChild(newList)
//     list.removeChild(newBtn)
// })

// }
// })





// newList.appendChild(deleteBtn);
// list.appendChild(newList);

// addBtn.addEventListener("click", () => {
//     if (inputText.value) {
//         const newList = document.createElement("li");
//         const nicon = document.createElement("i");
//         nicon.classList.add("fas", "fa-check"); // FontAwesome gibi bir ikon fontu kullanıyorsanız sınıfları buna göre ayarlayın
//         newList.textContent = inputText.value;
//         newList.prepend(nicon);
        
//         const deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.addEventListener("click", () => {
//             list.removeChild(newList);
//         });
//         newList.appendChild(deleteBtn);
//         list.appendChild(newList);

//     }
// })




