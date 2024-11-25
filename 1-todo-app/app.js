const input = document.querySelector('#input');
const addButton = document.querySelector('#addButton');
const todos = document.querySelector('#todos');
const alert = document.querySelector('#alert');

const deleteTodo = (e) => {
    todos.removeChild(e.target.parentElement.parentElement);
}

const toggleTodo = (e) => {
    if (e.target.parentElement.previousSibling.tagName == 'P') {
        e.target.parentElement.previousSibling.classList.toggle('complete')
    }
}


const editTask = (e) => {
    const p = e.target
    const editInput = document.createElement('input')
    editInput.value = e.target.textContent
    e.target.replaceWith(editInput)
    editInput.focus();

    editInput.addEventListener('blur', () => {
        p.textContent = editInput.value;
        editInput.replaceWith(p);
    })
}

const addTask = () => {
    const todo = input.value
    input.value = '';
    input.focus();

    if (todo) {
        const li = document.createElement('li');
        li.setAttribute('id', 'liStyle')
        todos.appendChild(li);

        const p = document.createElement('p')
        p.textContent = todo;
        li.appendChild(p);

        const div = document.createElement('div')

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        div.appendChild(completeButton)
        completeButton.addEventListener('click', toggleTodo)

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        div.appendChild(deleteButton)
        deleteButton.addEventListener('click', deleteTodo)

        li.appendChild(div)

        p.addEventListener('click', editTask)

        alert.style.visibility = 'hidden';
    } else {
        alert.style.visibility = 'visible';
    }


}



addButton.addEventListener('click', addTask)
