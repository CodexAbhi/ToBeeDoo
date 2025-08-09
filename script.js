let tasks = [];

document.querySelector("#add-task-button").addEventListener("click", addTask);
document.querySelector("#task-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const input = document.querySelector("#task-input");
    const taskText = input.value.trim();

    if (taskText === "") return;

    tasks.push({ text: taskText, completed: false });
    input.value = "";
    renderTasks();
}

function renderTasks() {
    const activeList = document.querySelector("#task-list");
    const completedList = document.querySelector("#completed-list");

    activeList.innerHTML = "";
    completedList.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskEl = document.createElement("div");
        taskEl.className = "box";

        const taskInner = document.createElement("div");
        taskInner.className = task.completed ? "completed-task" : "task";

        const taskText = document.createElement("p");
        taskText.textContent = task.text;

        const doneBtn = document.createElement("button");
        doneBtn.className = "task-done-button";
        doneBtn.innerHTML = `<img src="static/${task.completed ? 'revert' : 'done'}.svg" alt="Toggle Task">`;
        doneBtn.addEventListener("click", () => toggleTask(index));

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "task-delete-button";
        deleteBtn.innerHTML = `<img src="static/${task.completed ? 'dull-delete' : 'delete'}.svg" alt="Delete Task">`;
        deleteBtn.addEventListener("click", () => deleteTask(index));

        taskInner.appendChild(taskText);
        taskInner.appendChild(doneBtn);
        taskInner.appendChild(deleteBtn);
        taskEl.appendChild(taskInner);

        if (task.completed) {
            completedList.appendChild(taskEl);
        } else {
            activeList.appendChild(taskEl);
        }
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
