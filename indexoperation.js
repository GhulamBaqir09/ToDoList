document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.searchbar input');
    const clearIcon = document.getElementById('clear-icon');
    const list = document.querySelector('.list');
    input.addEventListener('input', function() {
        if (input.value.trim() !== '') {
            clearIcon.style.display = 'block';
        } else {
            clearIcon.style.display = 'none';
        }
    });
    clearIcon.addEventListener('click', function() {
        input.value = '';
        clearIcon.style.display = 'none';
        input.focus();
    });

    function createTodoItem(text) {
        const todoContainer = document.createElement('div');
        todoContainer.className = 'todo-item';

        const todoText = document.createElement('span');
        todoText.textContent = text;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-button';
        editButton.addEventListener('click', () => {
            const newText = prompt('Edit your todo:', todoText.textContent);
            if (newText !== null && newText.trim() !== '') {
                todoText.textContent = newText;
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => {
            list.removeChild(todoContainer);
        });

        todoContainer.appendChild(todoText);
        todoContainer.appendChild(editButton);
        todoContainer.appendChild(deleteButton);

        return todoContainer;
    }

    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const text = e.target.value.trim();
            if (text) {
                const todoItem = createTodoItem(text);
                list.appendChild(todoItem);
                e.target.value = '';
                clearIcon.style.display = 'none';
            }
        }
    });
});
