document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
      alert("Enter a task!");
      return; // Early return for cleaner logic
    }

    // Create new list item
    const li = document.createElement("li");

    // Create text node and append it (preserves structure)
    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Remove the task when button is clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to list item
    li.appendChild(removeBtn);

    // Append list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Add task when button is clicked
  addButton.addEventListener("click", addTask);

  // Add task when Enter key is pressed
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
