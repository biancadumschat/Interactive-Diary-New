let front = document.querySelector(".flashcardFront");
let back = document.querySelector(".question");
let button = document.querySelector("#buttonCard");
let flashcard = document.querySelector(".flashcard");

button.addEventListener("click", function () {
    console.log("hey");


    front.style.display = (
        front.style.display == "none" ? "block" : "none");


    console.log("hello");


    let reflectionsQuestion = document.createElement("p");
    reflectionsQuestion.innerText = "What are three things you're grateful for today and why?";
    reflectionsQuestion.style.color = "black";
    flashcard.appendChild(reflectionsQuestion);

    let submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("class", "flashButton");
    submitButton.setAttribute("id", "submit");
    submitButton.setAttribute("value", "GO");
    flashcard.appendChild(submitButton);
    submitButton.style.borderRadius = "50px";
    submitButton.style.fontSize = "small";
    submitButton.style.height = "2rem";
    submitButton.style.width = "3rem"
    submitButton.onclick = function () {
        window.location.href = "file:///Users/biancadumschat/Desktop/Interactive%20Diary%20Latest/reflectionChoice.html"
    }

    console.log("done");


})

