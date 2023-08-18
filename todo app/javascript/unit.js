const createTag = (element) =>{
    return(
        document.createElement(element)
    )
}
const getElement = (query)=>{
    return(
        document.querySelector(query)
    )
}
const getElements= (all)=>{
    return(
        document.querySelectorAll(all)
    )
}
const getElementID = (id) =>{
    return(
        document.getElementById(id)
    )
}