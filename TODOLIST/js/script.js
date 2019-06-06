let todoList = null;
let todoForm = null;
let todoSearch = null;

function addTask(text) {
    console.log('Dodaję zadanie do listy');
}
document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.querySelector('#todoList');
    const todoForm = document.querySelector('#todoForm');
    const todoSearch = document.querySelector('#todoSearch');

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const textarea = this.querySelector('textarea');
        if (textarea.value !== '') {
            addTask(textarea.value);
            textarea.value = '';
        }
    });


    function addTask(text) {

        const todo = document.createElement('div');
        todo.classList.add('todo-element');


        const todoBar = document.createElement('div');
        todoBar.classList.add('todo-element-bar');

        //DATA
        const todoDate = document.createElement('div');
        todoDate.classList.add('todo-element-bar');
        const date = new Date();
        const dateText = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ' godz.: ' + date.getHours() + ':' + date.getMinutes();
        todoDate.innerText = dateText;


        const todoDelete = document.createElement('button');
        todoDelete.classList.add('todo-element-delete');
        todoDelete.classList.add('button');
        todoDelete.innerHTML = '<i class="fas fa-times-circle"></i>';

        todoBar.appendChild(todoDate);
        todoBar.appendChild(todoDelete);

        //tekst
        const todoText = document.createElement('div');
        todoText.classList.add('todo-element-text');
        todoText.innerText = text;


        todo.appendChild(todoBar);
        todo.appendChild(todoText);

        //LISTA
        todoList.append(todo);
    }
    todoList.addEventListener('click', function (e) {
        if (e.target.closest('.todo-element-delete') !== null) {
            const todoElem = e.target.closest('.todo-element');
            todoElem.parentNode.removeChild(todoElem);
        }
    });

});