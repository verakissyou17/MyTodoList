
      // Model
      // If localstorage has a todos array, then use it
      // Otherwise use the default array.
      let todos;

      // Retrieve localStorage
      const savedTodos = JSON.parse(localStorage.getItem('todos'));
      // Check if it's an array
      if (Array.isArray(savedTodos)) {
        todos = savedTodos;
      } else {
        todos = [{
          title: 'Get groceries',
          dueDate: '2021-10-04',
          id: 'id1'
        }, {
          title: 'Wash car',
          dueDate: '2021-02-03',
          id: 'id2'
        }, {
          title: 'Make dinner',
          dueDate: '2021-03-04',
          id: 'id3'
        }];
      }

      // Creates a todo
      function createTodo(title, dueDate) {
        const id = '' + new Date().getTime();

        todos.push({
          title: title,
          dueDate: dueDate,
          id: id
        });

        saveTodos();
      }

      // Deletes a todo
      function removeTodo(idToDelete) {
        todos = todos.filter(function (todo) {
          // If the id of this todo matches idToDelete, return false
          // For everything else, return true
          if (todo.id === idToDelete) {
            return false;
          } else {
            return true;
          }
        });

        saveTodos();
      }

      function toggleTodo(todoId, checked) {
        todos.forEach(function (todo) {
          if (todo.id === todoId) {
            todo.isDone = checked;
          }
        });
      }

      function setEditing(todoId) {
        todos.forEach(function (todo) {
          if (todo.id === todoId) {
            todo.isEditing = true;
          }
        });

        saveTodos();
      }

      function updateTodo(todoId, newTitle, newDate) {
        todos.forEach(function (todo) {
          if (todo.id === todoId) {
            todo.title = newTitle;
            todo.dueDate = newDate;
            todo.isEditing = false;
          }
        });

        saveTodos();
      }

      function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
      }

      // Controller
      function addTodo() {
        const textbox = document.getElementById('todo-title');
        const title = textbox.value;

        const datePicker = document.getElementById('date-picker');
        const dueDate = datePicker.value;

        createTodo(title, dueDate);
        render();
      }

      function deleteTodo(event) {
        const deleteButton = event.target;
        const idToDelete = deleteButton.id;

        removeTodo(idToDelete);
        render();
      }

      function checkTodo(event) {
        const checkbox = event.target;

        const todoId = checkbox.dataset.todoId;
        const checked = checkbox.checked;

        toggleTodo(todoId, checked);
        render();
      }

      function onEdit(event) {
        const editButton = event.target;
        const todoId = editButton.dataset.todoId;

        setEditing(todoId);
        render();
      }

      function onUpdate(event) {
        const updateButton = event.target;
        const todoId = updateButton.dataset.todoId;

        const textbox = document.getElementById('edit-title-' + todoId);
        const newTitle = textbox.value;

        const datePicker = document.getElementById('edit-date-' + todoId);
        const newDate = datePicker.value;

        updateTodo(todoId, newTitle, newDate);
        render();
      }

      // View
      function render() {
        // reset our list
        document.getElementById('todo-list').innerHTML = '';

        todos.forEach(function (todo) {
          const element = document.createElement('div');
          element.classList.add('container');
       
          // If this todo is being edited, render a textbox, date picker and a
          // button for saving the edits.

          if (todo.isEditing === true) {
            const textbox = document.createElement('input');
            textbox.type = 'text';
            textbox.id = 'edit-title-' + todo.id;
            textbox.classList.add('textbox');
            element.appendChild(textbox);

            const datePicker = document.createElement('input');
            datePicker.type = 'date';
            datePicker.id = 'edit-date-' + todo.id;
            datePicker.classList.add('datePicker');
            element.appendChild(datePicker);

            const updateButton = document.createElement('button');
            updateButton.innerText = 'Update'; 
            updateButton.classList.add('updateButton');
            updateButton.onclick = onUpdate;
            updateButton.dataset.todoId = todo.id;
            element.appendChild(updateButton);

          // If this todo is not being edited, render what we had before
          // and add an "Edit" button.
          } else {
            element.innerText = todo.title + ' ' + todo.dueDate;

            const editButton = document.createElement('button');
            editButton.innerText = 'Edit';
            editButton.classList.add('editButton');
            editButton.onclick = onEdit;
            editButton.dataset.todoId = todo.id;
            element.appendChild(editButton);

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.onchange = checkTodo;
            checkbox.dataset.todoId = todo.id;
            if (todo.isDone === true) {
              checkbox.checked = true;
            } else {
              checkbox.checked = false;
            }
            element.prepend(checkbox);

            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.classList.add('deleteButton');
            deleteButton.onclick = deleteTodo;
            deleteButton.id = todo.id;
            element.appendChild(deleteButton);

          }

          const todoList = document.getElementById('todo-list');
          todoList.appendChild(element);
        });
      }

      render();
 