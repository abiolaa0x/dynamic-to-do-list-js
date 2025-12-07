document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to load tasks from Local Storage on page load
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // false = don't save again
  }

  // Modified addTask function with optional saving
  function addTask(taskText = null, save = true) {
    // If taskText is not provided, get it from input field
    const text = taskText !== null ? taskText : taskInput.value.trim();

    if (text === "") {
      if (taskText === null) alert("Enter a task!");
      return;
    }

    // Create new list item
    const li = document.createElement("li");
    li.textContent = text; // text node

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Remove task from DOM and Local Storage
    removeBtn.onclick = function () {
      taskList.removeChild(li);
      updateLocalStorage(); // Re-save the current tasks after removal
    };

    // Append button to li, then li to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input only if this was a new task (not loaded from storage)
    if (taskText === null) {
      taskInput.value = "";
    }

    // Save to Local Storage only if this is a new task (not loading)
    if (save) {
      updateLocalStorage();
    }
  }

  // Helper function to update Local Storage with current task list
  function updateLocalStorage() {
    const currentTasks = [];
    taskList.querySelectorAll("li").forEach((li) => {
      // Get text content excluding the "Remove" button text
      const text = li.firstChild.textContent; // first child is the text node
      currentTasks.push(text);
    });
    localStorage.setItem("tasks", JSON.stringify(currentTasks));
  }

  // Event Listeners
  addButton.addEventListener("click", () => addTask());

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load saved tasks when page loads
  loadTasks();
});
