window.addEventListener("load", () =>{
    "use strict"
    const form = getElement("form")
    const input = getElementID("todos__input")
    let ul = getElement(".todo__ul")
    let todos = []
    let id = 0
    const handleRenderTodo = (arr) =>{
        if(arr?.length){
            ul.innerHTML=null
            for(let i = 0 ; i<arr.length; i++){
                let li = createTag("li")
                li.className="w-100 rounded my-2 bg-light p-2 d-flex justify-content-between align-items-center"
                let todo__title = createTag("h4")
                todo__title.textContent= arr[i].name
                todo__title.className="text-dark"
                let todo__btn = createTag("button")
                todo__btn.textContent="Dalete"
                todo__btn.dataset.id = arr[i].id
                todo__btn.className="btn btn-danger dalete"
                li.appendChild(todo__title)
                li.appendChild(todo__btn)
                ul.appendChild(li)
            }
        }else{
            ul.innerHTML= null
        }
    }  
    const handleSub=(event)=>{
    event.preventDefault()
    if(input.value.length){
        id++
        let todo={
            name: input.value,
            id
        }
        todos.push(todo) 
        handleRenderTodo(todos)
        input.value = null
    }
    }
    form.addEventListener("submit", handleSub)
    const handleClick = (event) => {
        if(event.target.matches(".dalete")){
            let id = event.target.dataset.id-0
            todos= todos.filter(item => item.id!==id)
            handleRenderTodo(todos)
        }
    }
    window.addEventListener("click",handleClick)
})