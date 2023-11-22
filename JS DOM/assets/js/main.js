//? ====================  part 1 ============================

//!--------- EXAMINE THE DOCUMENT OBJECT MODEL ---------------//
// console.dir(document);
// console.dir(document.URL);
// console.log(document.title);
// console.log(document.body);
// console.log(document.all); 
// console.log(document.all[13]); 
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//!-------------- SELECTOR's ------------
//! -----------------GET ELEMENT BY ID ----------------------

// console.log(document.getElementById('header_title').outerHTML);

// let headerTitle = document.getElementById('header_title').outerHTML
// let headerTitle = document.getElementById('header_title');
// let headerTitle = document.getElementById('header_title').innerText
// console.log(headerTitle);

//**********************************************************  They are same but the difference is innerText returns the valuable text contained in a node, textContent returns the full text ****************************************************************/
// headerTitle.textContent = 'Hello TextContent';
// headerTitle.innerText = "Hello innerText";
// headerTitle.style.borderBottom = `solid 3px #000`;
// headerTitle.style.display = `inline-block`;



//! ------------GET ELEMENT BY CLASSNAME -------------------

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);

// items[1].textContent = "Hello 2";
// items[1].style.backgroundColor = "#600456";
// items[1].style.color = '#fff';

// for(const item of items){
//     console.log(item);
//     item.style.backgroundColor = `#f4f4f4`
// }



//! ------------ QUERYSELECTOR -------------------
// const titles = document.querySelector(`.title`);
// console.log(titles);

// const header = document.querySelector(`#main_header`);
// header.style.borderBottom = `3px solid red`;

// const input = document.querySelector(`input`);
// input.placeholder = `write..`

// const submit = document.querySelector(`input[type="submit"]`);
// submit.value = `Add Item`


//! ------------ QUERYSELECTORALL -------------------

// const titles = document.querySelectorAll(`.title`);
// console.log(titles);

// const odd = document.querySelectorAll(`li:nth-child(odd)`);
// const even = document.querySelectorAll(`li:nth-child(even)`);
// console.log(odd);
// console.log(even);

// for(const el of odd ){
//     console.log(el.innerHTML);
//     el.style.background = `#f4f4f4`;
// }

// for(const el of even ){
//     console.log(el.innerHTML);
//     el.style.background = `#cccccc`;
// }



//? ====================  part 2 ============================

//! ------------ TRAVARSING THE DOM ----------------------

//* --------------- parent node ---------------

// const item = document.querySelector(`#items`);
// console.log(item.parentNode);
// console.log(item.parentNode.parentNode);

//*----------------- parentElement -------------

// const item = document.querySelector(`#items`);
// console.log(item.parentElement);
// console.log(item.parentElement.parentElement);


//*----------------- childNodes ----------------
// const item = document.querySelector(`#items`);
// console.log(item.childNodes); //gives all things inside parents
// console.log(item.TEXT_NODE); // gives all spacing count
// console.log(item.children); //gives just child elements
// console.log(item.childElementCount); // just child counts.
// console.log(item.firstChild); // can't modified,gives error
// console.log(item.firstElementChild); // modified possible
// console.log(item.lastChild); // can't modified,gives error
// console.log(item.lastElementChild); // modified possible

// const last = item.lastElementChild;
// last.style.background = 'red';


//*----------------- Siblings -----------------

// const item = document.querySelector(`#items`);
// console.log(item.nextSibling);
// console.log(item.previousSibling);
// console.log(item.nextElementSibling);
// console.log(item.previousElementSibling);


//*----------------- Create ELement ---------------
// // create a div 
// const newDiv = document.createElement('div');
// // create class 
// newDiv.className = 'hello';

// //create id 
// newDiv.id = 'hello';

// //create attribute
// newDiv.setAttribute = ('title' , 'hello div')

// //create text
// const newDivText = document.createTextNode('Hello World');

// //add this text to div
// newDiv.appendChild(newDivText);
// console.log(newDiv);



//? ====================  part 3 ============================

//! ------------ CLICK EVENTS ----------------------

// const button = document.querySelector(`#button`);

// const buttonClicked = () =>{
//     return console.log(`button click`);
// }

// button.addEventListener('click', buttonClicked);

// function buttonClicked (e){
//     console.log(`button clicked`);
//     document.getElementById(`header_title`).textContent = 'changed';

//     //check doc.js file for learn more
//     console.log(e);
//     console.log(e.currentTarget);
//     console.log(e.timeStamp);
//     console.log(e.keyCode);
//     console.log(e.clientX);
//     console.log(e.clientY);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.classList);
//     console.log(e.target.className);
//     console.log(e.target.id);
// }














