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
//------------------------------------
//Navigation menu display

//icons
const hamburgerIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times")
//navigation menu
const mobileNav = document.querySelector("nav")
const header = document.querySelector("header");

const showNav = () => {
    mobileNav.classList.toggle("background-transparent-blue");
    header.classList.toggle("hidden");
}
hamburgerIcon.addEventListener("click", showNav);
closeIcon.addEventListener("click", showNav)

//----------------------------

//target text input box
//right now working on classes

const userEmail = document.querySelector("#userEmail")
const subButton = document.querySelector("#subButton");
const errMessage = document.querySelector("error");
// console.log(userEmail.value);

// //write function to validate

const validateEmail = (email) => {
    errMessage.classList.remove("hidden");
    errMessage.innerHTML = "Whoops, make sure it's an email"
//     
    }
//     };

subButton.addEventListener("click", validateEmail)
validateEmail();

//get user's text input with. value
//if its not an email, add class to show error
//bind to submit button listener

