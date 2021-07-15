console.log("hello")

//Array of containers that have Q&A
const allQuestionElements = document.querySelectorAll(".container-border-bottom");


//event handler

const expandMenu = (e) => {
    console.log(e);

    //assigns the target as clicked element within the event listener range
    let target = e.toElement; 
    if(target.classList == "fas fa-chevron-down") {
        console.log("the icon area was clicked");
        answer = target.parentElement.parentElement.lastElementChild; 
        console.log(answer + "this is the new element being toggled");
        answer.classList.toggle("hidden");
    } else {
        console.log("this area is not an event listener atrea");
    }

}
allQuestionElements.forEach((question => {
    question.addEventListener("click", expandMenu);
}));
// questionElement.addEventListener("click", expandMenu);


// downArrow.addEventListener("click", test);

//We need to make all the down arrow icons trigger an event handler when clicked, that toggles the .hidden class from the below p elements.

//Target the parent and store in a variable (container border bottom)


//if the target is an i element, run the function
// take the parent element's last child (p) and toggle the .hidden class

//Bind the event handler to the parent (container-border-bottom) with click event

//will need to use e as parameter for event handler