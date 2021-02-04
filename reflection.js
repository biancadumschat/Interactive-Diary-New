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
    reflectionsQuestion.innerText = "What are 3 things you're grateful for?";
    reflectionsQuestion.style.color = "black";
    flashcard.appendChild(reflectionsQuestion);

    let submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("class", "flashButton");
    submitButton.setAttribute("id", "submit");
    submitButton.setAttribute("value", "GO");
    flashcard.appendChild(submitButton);
    submitButton.style.borderRadius = "30px";
    submitButton.style.height = "3rem";
    submitButton.onclick = function () {
        window.location.href = "file:///Users/biancadumschat/Desktop/Interactive%20Diary%20Latest/reflectionChoice.html"
    }

    console.log("done");


})
