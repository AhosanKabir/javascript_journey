'use strict';

const form = document.getElementById(`addForm`);
const itemList = document.getElementById(`items`);
const filter = document.getElementById(`filter`) ;

// form submit event 
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e){
    e.preventDefault();

    //get input value
    const newItem = document.getElementById(`item`).value;
    // create new li 
    const li = document.createElement(`li`)
    //add class
    li.className = `list-group-item d-flex`;
    // add text node with input value 
    li.appendChild(document.createTextNode(newItem));

    // create delete button 
    const deleteBtn = document.createElement(`button`);
    // add class 
    deleteBtn.className = `btn btn-danger btn-sm ms-auto delete`;
    // add text 
    deleteBtn.innerText = `x`

    // add this button to the list
    li.appendChild(deleteBtn)

    console.log(li);

    // add this list to the parent 
    itemList.appendChild(li);

}


// remove item 
function removeItem(e){
    if(e.target.classList.contains(`delete`)){
        if(confirm(`Are You Sure ?`)){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}



//filter items 
function filterItems(e){
    //convert text to lowercase
    const text = e.target.value.toLowerCase();
    console.log(text);
    
}
