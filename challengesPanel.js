const exercise = document.querySelector("#exercise");
const habits = document.querySelector("#habits");
const relationships = document.querySelector("#relationships");

let front1 = document.querySelector("#front1");
let flashcard1 = document.querySelector("#flashcard1");

let front2 = document.querySelector("#front2");
let flashcard2 = document.querySelector("#flashcard2");

let front3 = document.querySelector("#front3");
let flashcard3 = document.querySelector("#flashcard3");

exercise.addEventListener("click", function () {

    console.log("helloworld");

    front1.style.display = (
        front1.style.display == "none" ? "block" : "none");


    let h3Exercise = document.createElement("h3");
    h3Exercise.setAttribute("class", "flashcardHead");
    h3Exercise.innerText = "Do 10 push-ups today";
    h3Exercise.style.color = "#1E8188"
    h3Exercise.style.fontWeight = "bold";
    flashcard1.appendChild(h3Exercise);

    let submitButton1 = document.createElement("input");
    submitButton1.setAttribute("type", "submit");
    submitButton1.setAttribute("class", "btn");
    submitButton1.setAttribute("id", "submit1");
    submitButton1.setAttribute("value", "GO");
    submitButton1.style.borderRadius = "30px";
    submitButton1.style.width = "3rem";
    submitButton1.style.color = "#1E8188"
    submitButton1.style.border = "1px solid #1E8188"
    flashcard1.appendChild(submitButton1);
    submitButton1.onclick = function () {
        window.location.href = "file:///Users/biancadumschat/Desktop/Interactive%20Diary%20Latest/dashboard.html";
    }
})

habits.addEventListener("click", function () {

    front2.style.display = (
        front2.style.display == "none" ? "block" : "none");


    let h3Habits = document.createElement("h3");
    h3Habits.setAttribute("class", "flashcardHead");
    h3Habits.setAttribute("id", "habits")
    h3Habits.innerText = "Set your alarm for 6am";
    h3Habits.style.color = "#1E8188"
    h3Habits.style.fontWeight = "bold";
    flashcard2.appendChild(h3Habits);

    let submitButton2 = document.createElement("input");
    submitButton2.setAttribute("type", "submit");
    submitButton2.setAttribute("class", "btn");
    submitButton2.setAttribute("id", "submit2");
    submitButton2.setAttribute("value", "GO");
    submitButton2.style.borderRadius = "30px";
    submitButton2.style.width = "3rem";
    submitButton2.style.color = "#1E8188"
    submitButton2.style.border = "1px solid #1E8188"
    flashcard2.appendChild(submitButton2);
    submitButton2.onclick = function () {
        window.location.href = "file:///Users/biancadumschat/Desktop/Interactive%20Diary%20Latest/dashboard.html";
    }
})

relationships.addEventListener("click", function () {

    front3.style.display = (
        front3.style.display == "none" ? "block" : "none");


    let h3Relationships = document.createElement("h3");
    h3Relationships.setAttribute("class", "flashcardHead");
    h3Relationships.setAttribute("id", "relationships")
    h3Relationships.innerText = "Call your best friend today";
    h3Relationships.style.color = "#1E8188"
    h3Relationships.style.fontWeight = "bold";
    flashcard3.appendChild(h3Relationships);

    let submitButton3 = document.createElement("input");
    submitButton3.setAttribute("type", "submit");
    submitButton3.setAttribute("class", "btn");
    submitButton3.setAttribute("id", "submit3");
    submitButton3.setAttribute("value", "GO");
    submitButton3.style.borderRadius = "30px";
    submitButton3.style.width = "3rem";
    submitButton3.style.color = "#1E8188"
    submitButton3.style.border = "1px solid #1E8188"
    flashcard3.appendChild(submitButton3);
    submitButton3.onclick = function () {
        window.location.href = "file:///Users/biancadumschat/Desktop/Interactive%20Diary%20Latest/dashboard.html";
    }

});