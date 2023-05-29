function addTask() {
    var inputField = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var taskText = inputField.value.trim();

    if (taskText !== '') {
        var newTask = document.createElement("li");
        newTask.innerHTML = '<span class="task-text">' + taskText + '</span><span class="delete-btn" onclick="deleteTask(this)">Delete</span>';
        taskList.appendChild(newTask);

        inputField.value = "";
    }
}

function deleteTask(task) {
    var taskItem = task.parentElement;
    taskItem.remove();
}
