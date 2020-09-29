function convertChoice() {
    var chosenValue = document.getElementById("cAndFChoice").value;
    var inputValue = document.getElementById("numInput").value;

    if (inputValue === "") {
        alert("Please enter a number");
    }

    if (chosenValue === "fahrenheit") {
        convertFahrenheit(inputValue);
    } else {
        convertCelsius(inputValue);
    }
}

function convertFahrenheit(inputVal) {
    var result;
    if (inputVal != "") {
        result = ((inputVal - 32) * 5 / 9).toFixed(1);
        document.getElementById("result").innerHTML = ["Your answer is, " + result];
    }
}

function convertCelsius(inputVal) {
    var result;
    if (inputVal != "") {
        result = ((inputVal * 9 / 5) + 32 ).toFixed(1);
        document.getElementById("result").innerHTML = ["Your answer is, " + result];
    }
}