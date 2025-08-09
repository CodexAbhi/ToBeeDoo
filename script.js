let tasks= []

function addTask() {
    const inputVal=document.querySelector("#task-input").value
    tasks.push(inputVal)
    renderTasks()
}

function renderTasks() {
    const taskListEl=document.querySelector("#task-list")
    taskListEl.innerHTML=""
    tasks.forEach((task, index) => {
        const taskItemEl=document.createElement("li")
        taskItemEl.textContent=task
        taskListEl.appendChild(taskItemEl)
    })
}
