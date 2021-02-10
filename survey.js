console.log("helloworld");

const submitData = document.querySelector("#nameSubmit");

var xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:8000/predict_category", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    value: "question"
}));

let radios = document.querySelectorAll(".radioButton");
let val = localStorage.getItem('radios');
for (let i = 0, i<radios.length, i++) {
    if (radios[i].value == val) {
        radios[i].checked = true;
    }
}