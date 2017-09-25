function calculate() {
    var action = document.getElementById('action').value;
    var inoutOneValue = document.getElementById('inputOne').value;
    var inoutTwoValue = document.getElementById('inputTwo').value;

    var displayMessage;
    if ('add' == action) {
        displayMessage = 'The result is: ' +  add(parseInt(inoutOneValue), parseInt(inoutTwoValue));
    } else if ('subtract' == action) {
        displayMessage =  'The result is: ' +  subtract(parseInt(inoutOneValue), parseInt(inoutTwoValue));
    } else {
        displayMessage = 'Please select an action';
    }

    document.getElementById('answer').innerText = displayMessage;
    document.getElementById('answer').className = 'alert alert-success';
}

