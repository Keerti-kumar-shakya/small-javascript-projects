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


const searchBtn = document.querySelector('.search-btn-js');
searchBtn.addEventListener('click', () =>{
  search()
})

function search() {

 const searchInput = document.querySelector('.search-todo-js');
 const searchValue = searchInput.value;
 const searchResult = todoStore.filter( (e) => e.name === searchValue)

 const searchSimilarResult = searchResult;
(searchResult.length === 0)&&alert('There is no such result in todo list. Please try again.');
console.log(searchSimilarResult);
 let html = '';

 searchSimilarResult.forEach((result, index) =>{
  console.log(result);
 const {name, date} = result;
  html += `
<div class = "list-search-css">
  <p class="search-name">${name}</p>
  <p class="search-date">${date}</p>
</div>
 `
 })

 document.querySelector('.js-search-display').innerHTML  = html;

 document.querySelector('.js-search-display').classList.add('search-display-active');

setTimeout(() => {
  document.querySelector('.js-search-display').classList.remove('search-display-active');
}, 3000);

searchInput.value = '';

}



