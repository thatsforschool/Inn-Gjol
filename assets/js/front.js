
// setup variables for things that are used more than once
let tableElm = document.querySelector('#table');
let articlesElem = document.querySelector('#articles');

const strActive = 'articlesOpen';

// Add class "opened" to <header> when #menu is clicked
tableElm.addEventListener('click', function(event){
	event.preventDefault(); // stops the element from doing its usual stuff

  if (articlesElem.className.indexOf('articlesClosed') === -1) {
    // if the header element HAS the class 'opened' this code will be read

    articlesElem.classList.add(strActive); // add the content of strActive to the class attribute on <header>
     // change the text inside the button
    
  } else {
    // if the header element DOESN'T have the class 'opened' this code will be read

    articlesElem.classList.remove(strActive); // add the content of strActive to the class attribute on <header>
   // change the text inside the button
  }
});