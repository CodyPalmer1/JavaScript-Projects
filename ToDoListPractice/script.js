function addTask() {
    // Get the input field and the task list
    var inputField = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    // Create a new list item and add it to the task list
    var newTask = document.createElement("li");
    newTask.innerHTML = inputField.value;
    taskList.appendChild(newTask);

    // Clear the input field
    inputField.value = "";
}
