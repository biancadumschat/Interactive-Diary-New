console.log("helloworld");

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://127.0.0.1:8000/predict_category', true)

request.onload = function () {
    var data = JSON.parse(this.response)

    data.forEach((df) => {
        console.log(df);
    })
}

// Send request
request.send()


fastapi
uvicorn
sklearn
xlrd == 1.2.0