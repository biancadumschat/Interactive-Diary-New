
const list = document.querySelector(".goalsList");
const addBtn = document.querySelector("#addGoalBtn");


addBtn.addEventListener("click", function () {

    const addText = document.querySelector('#addText');

    const checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", "randomGoal");
    checkbox.setAttribute("id", "defaultCheck14");
    checkbox.setAttribute("class", "form-check-input");

    const label = document.createElement("label");
    label.setAttribute("class", "form-check-label");
    label.setAttribute("for", "defaultCheck14");

    label.innerHTML = addText.value;
    list.appendChild(checkbox);
    list.appendChild(label);

})


