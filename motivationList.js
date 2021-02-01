let submitButton = document.querySelector("#nameSubmit");

function validate() {
    let valid = false;

    if (document.querySelector("#defaultCheck1").checked) {
        valid = true;
    }
    else if (document.querySelector("#defaultCheck2").checked) {
        valid = true;
    }
    else if (document.querySelector("#defaultCheck3").checked) {
        valid = true;
    }
    else if (document.querySelector("#defaultCheck4").checked) {
        valid = true;
    }
    else if (document.querySelector("#defaultCheck5").checked) {
        valid = true;
    }
    else if (document.querySelector("#defaultCheck6").checked) {
        valid = true;
    }
    else {
        alert("Please select at least one item of the list");
        return false;
    }
}
