let todoStore = JSON.parse(localStorage.getItem('todoStore')) || []


function todoDisplay() {
  let html = '';
  todoStore.forEach((listItem, index) =>{
    const {id, name, date} = listItem;
    html += `
    <article class="todo-list-container data-id ='${id}'">

            <p class="todo-text-display-css todo-text-display-js">${name}</p>

            <p class="todo-date-display-css todo-date-display-js">${date}</p>

            <button class="todo-delete-css todo-delete-js">delete</button>
        </article>
    `
  })

  const displayResult = document.querySelector('.todo-list-display-container');
  displayResult.innerHTML = html;

  /**************delete click keydown event******************/
 
  const deleteItems = document.querySelectorAll('.todo-delete-js');
console.log(deleteItems);

deleteItems.forEach(function(deleteTodo, index) {

  deleteTodo.addEventListener('click', () =>{
    todoStore.splice(index, 1);
    todoDisplay()
  })

  const keyBoardElement = document.body;
  keyBoardElement.addEventListener('keydown', (e) =>{
  
    if (e.key === 'Delete') {
      todoStore.splice(index, 1);
    }
  })

})  

  
 
storageTodoList()
}

todoDisplay()


/**************add event******************/
const add = document.querySelector('.btn-add-todo-js');
add.addEventListener('click', () =>{
  todoList()
})

/**************todo list add******************/
function todoList() {
  const inputName = document.querySelector('.todo-text-js');
  const inputDate = document.querySelector('.todo-date-js');
  const id = new Date().getTime();

  const name = inputName.value;
  const date = inputDate.value;
  console.log(name, date);

  todoStore.push({
 id,
 name,
 date
  })

  console.log(todoStore);

  inputName.value = '';
  inputDate.value = '';
  todoDisplay()
}


function storageTodoList() {
  localStorage.setItem('todoStore',JSON.stringify(todoStore))
}
