console.log("hello")


const downArrow = document.getElementsByClassName("fa-chevron-down");
console.log(downArrow);

const questionElement = document.querySelector(".container-border-bottom");
const arrowIcon = document.querySelector("i");
console.log(arrowIcon);

const expandMenu = (e) => {
    console.log(e);
    let target = e.toElement; 
    console.log(target);

    answer = questionElement.lastElementChild
    answer.classList.toggle("hidden");

}

questionElement.addEventListener("click", expandMenu);


// downArrow.addEventListener("click", test);

//We need to make all the down arrow icons trigger an event handler when clicked, that toggles the .hidden class from the below p elements.

//Target the parent and store in a variable (container border bottom)


//if the target is an i element, run the function
// take the parent element's last child (p) and toggle the .hidden class

//Bind the event handler to the parent (container-border-bottom) with click event

//will need to use e as parameter for event handler