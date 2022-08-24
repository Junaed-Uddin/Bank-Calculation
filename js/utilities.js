function getValueByInput(inputId) {
    const inputField = parseFloat(document.getElementById(inputId).value);
    document.getElementById(inputId).value = '';
    return inputField;
}

function getValueByElement(elementId) {
    const elementField = parseFloat(document.getElementById(elementId).innerText);
    return elementField;
}

function setValueByElement(elementId, newValue) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = newValue;
}

// logout 
document.getElementById('logout').addEventListener('click', function () {
    window.location.replace('./index.html');
});