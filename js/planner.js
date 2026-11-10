let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        alert("Please enter a task.");
        return;
    }
    tasks.push({ text: text, done: false });
    taskInput.value = "";
    render();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    render();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    render();
}

function render() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");
        if (task.done) li.classList.add("done");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.addEventListener("change", function () {
            toggleTask(index);
        });

        const span = document.createElement("span");
        span.textContent = task.text;

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "delete-btn";
        delBtn.addEventListener("click", function () {
            deleteTask(index);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });

    const remaining = tasks.filter(function (t) { return !t.done; }).length;
    counter.textContent = remaining + " task(s) remaining";
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") addTask();
});

render();