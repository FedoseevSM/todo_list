window.onload = function() {

let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

// Вывод данных из localStorage
if (localStorage.getItem('todo') !==undefined) {
todoList1 = JSON.parse(localStorage.getItem('todo'));
for (let i in todoList1) {
console.log(todoList1[i].todo);
console.log(todoList1[i].class);
// Создаём новую задачу - элемент li
let newTask = document.createElement('li');			  
// Берём текст задачи из поля todo
newTask.textContent = todoList1[i].todo;
// Проверяем, есть ли у переключателя priority класс is-important
if (todoList1[i].class == 'is-important') {
// Если класс есть, добавляем задаче класс is-important
newTask.classList.add('is-important');
}
// Добавляем новую задачу в конец списка list
list.append(newTask);
}
}
// Объеденяем прежний массив с новыми данными
let todoList = todoList1 || [];

// Меняем надпись приоритета для класса на кнопке
priority.onclick = function () {
priority.classList.toggle('is-important');
if (priority.classList.contains('is-important')) {
priority.textContent = 'Важная задача';
} else {
priority.textContent = 'Обычная задача';
}
};

// Добавляем задачи в список при нажатии кнопки формы
form.onsubmit = function (evt) {
evt.preventDefault();
				  
// Создаём новую задачу - элемент li
let newTask = document.createElement('li');
// Берём текст задачи из поля ввода input
newTask.textContent = input.value;
let temp = {};
temp.todo = newTask.textContent;
// Проверяем, есть ли у переключателя priority класс is-important
if (priority.classList.contains('is-important')) {
// Если класс есть, добавляем задаче класс is-important
temp.class = 'is-important';
} else {
temp.class = '';
}
let i = todoList.length;
todoList[i] = temp;

// LocalStorage ввод
localStorage.setItem('todo', JSON.stringify(todoList));
				
// Проверяем, есть ли у переключателя priority класс is-important
if (priority.classList.contains('is-important')) {
// Если класс есть, добавляем задаче класс is-important
newTask.classList.add('is-important');
}
				
// Добавляем новую задачу в конец списка list
list.append(newTask);

// Очищаем поле ввода input
input.value = '';
};
};