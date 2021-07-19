console.log("hello")

//Array of containers that have Q&A
const allQuestionElements = document.querySelectorAll(".container-border-bottom");


//event handler for question and answer menu 

const expandMenu = (e) => {
    console.log(e);
    let target = e.toElement;
    if (target.classList == "fas fa-chevron-down") {
        console.log("the icon area was clicked");
        answer = target.parentElement.parentElement.lastElementChild;
        answer.classList.toggle("hidden");
    }
}
allQuestionElements.forEach((question => {
    question.addEventListener("click", expandMenu);
}));

//Navigation menu 

//icons
const hamburgerIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times")

//navigation menu
const mobileNav = document.querySelector("nav")
console.log(mobileNav)
//header
const header = document.querySelector("header");

//event handler
const showNav = () => {
    mobileNav.classList.toggle("background-transparent-blue");
    header.classList.toggle("hidden");
}

hamburgerIcon.addEventListener("click", showNav);
closeIcon.addEventListener("click", showNav)

//create event listener to toggle .hidden class

//bind event to handler