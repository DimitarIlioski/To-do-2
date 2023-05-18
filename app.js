
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOptions = document.querySelector(".filterOptions");

const completed = document.querySelector(".completedOption");
const uncompleted = document.querySelector(".uncompletedOption");
const all = document.querySelector(".allOption");



const allTodos = [];

const addTodo = (event) => {
    event.preventDefault();

    if(todoInput.value === "") {
        return;
    }

    const todoDivEl = document.createElement('div');
    todoDivEl.classList.add("todo");

    const liEl = document.createElement('li');
    liEl.innerHTML = todoInput.value;

    allTodos.push(todoInput.value);

    liEl.classList.add("todo-item");
    todoDivEl.appendChild(liEl);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDivEl.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDivEl.appendChild(trashButton);

    todoInput.value = "";
    todoList.appendChild(todoDivEl);

}

const deleteTodo = (event) => {
    const element = event.target;

    if (element.classList[0] === "trash-btn") {
        const todo = element.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", (e) => {
            todo.remove();
        })

    }

    if (element.classList[0] === "complete-btn") {
        const todo = element.parentElement;
        todo.classList.toggle("completed");
    }
}

const filterTodo = (event) => {
    const todos = todoList.childNodes;

    todos.forEach((todo) => {
        switch(event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
            
        }
    })
}


// const filterTodo = (event) => {

//     const todos = todoList.childNodes;

//     todos.forEach((todo) => {
//         if (todo.target.classList.contains("completed")) {
//             console.log("da");
//         }
//     })
//     //console.log(event.target);
//     const targetValue = event.target.value;
    
    

// }




todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click", deleteTodo);

// completed.addEventListener("click" , filterTodo);
// all.addEventListener("click" , filterTodo);
// uncompleted.addEventListener("click" , filterTodo);

filterOptions.addEventListener("click" , filterTodo);

