document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      // 1. Create a new <li> element and set its textContent
      const li = document.createElement("li");
      li.textContent = taskText;

      // 2. Create remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";

      // 3. Assign onclick to remove the <li> from taskList
      removeBtn.onclick = function () {
        taskList.removeChild(li);
      };

      // 4. Append button to <li>, then append <li> to the list
      li.appendChild(removeBtn);
      taskList.appendChild(li);

      // 5. Clear the input field
      taskInput.value = "";
    } else {
      alert("Enter a task!");
    }
  }

  // Attach event listeners
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
