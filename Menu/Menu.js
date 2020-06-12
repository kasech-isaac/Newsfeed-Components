/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/



function menuMaker(array){
  //creating 
  const menu=document.createElement('div');
    menu.classList.add('menu');
  const menulist_ul=document.createElement('ul');

  array.forEach(element => {
    const menulistitems=document.createElement('li');
    menulistitems.textContent=element;
    menulist_ul.classList.add('hover');
    menulist_ul.appendChild(menulistitems);
  });
  //styling

  //append
 menu.appendChild(menulist_ul);
  //toggle
  menuButton.addEventListener('click',(e)=>{
  menu.classList.toggle('menu--open');
  });
  return menu;
}

const menuButton=document.querySelector('.menu-button');
const header=document.querySelector('.header');
header.appendChild(menuMaker(menuItems));