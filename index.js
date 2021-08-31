//Selectors
document.querySelector('.js-form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleCheckOrDelete);
document.querySelector('.clear-all').addEventListener('click', handleClearAll);

//Event handlers
function handleSubmitForm(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value !== '')
        addTodo(input.value);
    input.value = '';   
    // document.querySelector('.js-form').reset();
}

function handleCheckOrDelete(e){
    if(e.target.name == 'checkButton')
        checkTodo(e);
    
    if(e.target.name == 'deleteButton')
        deleteTodo(e);
}


//Helpers
function addTodo(todo){
    let untitledList = document.querySelector('ul');
    let listItem = document.createElement('li');

    listItem.setAttribute('class', 'list-item');

    listItem.innerHTML = `
    <span class="todo-item">${todo}</span>
    <button name="checkButton"><i class="fas fa-check-square"></i></button>
    <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;

    untitledList.appendChild(listItem);
}

function checkTodo(e){
    let item = e.target.parentNode;
    if(item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}

function deleteTodo(e){
    let item = e.target.parentNode;
    item.remove();
}

function handleClearAll(e){
    document.querySelector('ul').innerHTML = '';
}