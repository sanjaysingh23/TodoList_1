const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list")
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();     //  prevent from page refresh
    const newTodoText = todoInput.value; // take input that we write
    const newLi = document.createElement("li");  // create new li tag
    const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
    newLi.innerHTML = newLiInnerHtml; // set inner html
    todoList.append(newLi);  // add the written text 
    todoInput.value ="";   // remove text that we write after submit 
});

todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        const targedLi = e.target.parentNode.parentNode;
        console.log(targedLi);
        targedLi.remove();
    }
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }

})