// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Add event listener to mark task as completed when clicked
        listItem.addEventListener('click', function () {
            listItem.classList.toggle('completed');
        });

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            listItem.remove();
        });
        listItem.appendChild(deleteButton);

        // Append list item to task list
        taskList.appendChild(listItem);

        // Clear input field
        taskInput.value = '';
    }
}
