const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");
const inputText = document.querySelector("#inputText");

addBtn.addEventListener("click", () => {
    if (inputText.value) {
        const newList = document.createElement("li");
        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-check"); // FontAwesome gibi bir ikon fontu kullanıyorsanız sınıfları buna göre ayarlayın
        newList.textContent = inputText.value;
        newList.prepend(icon);
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            list.removeChild(newList);
        });
        newList.appendChild(deleteBtn);
        
        list.appendChild(newList);
    }
})

