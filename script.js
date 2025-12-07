document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      // Create li element for the task
      const li = document.createElement("li");
      li.textContent = taskText;

      // Create remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";

      // Remove task when button is clicked
      removeBtn.onclick = () => {
        taskList.removeChild(li);
      };

      // Append remove button to li and li to task list
      li.appendChild(removeBtn);
      taskList.appendChild(li);

      // Clear input field
      taskInput.value = "";
    } else {
      alert("Enter a task!");
    }
  };

  // Event listeners
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
