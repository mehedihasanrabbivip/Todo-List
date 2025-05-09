function addTodo() {
    const Todoinput = document.querySelector("#todoIinput");
    const task = Todoinput.value.trim();
    if (task === "") return;

    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.background = "#e74c3c";
    deleteBtn.style.color = "#fff";
    deleteBtn.style.border = "none";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    document.querySelector("#todo-List").appendChild(li);
    Todoinput.value = "";
}
