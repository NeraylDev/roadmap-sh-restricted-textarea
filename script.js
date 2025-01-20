var textareaElement = document.getElementById('message');
var maxTextareaChars = 25;

textareaElement.oninput = function() {
    let charAmount = textareaElement.value.length;
    let charCounter = document.getElementById('textarea-container').lastElementChild;
    charCounter.innerHTML = charAmount.toString() + " / " + maxTextareaChars.toString();

    if (charAmount > maxTextareaChars) {
        document.getElementById('textarea-container').className = 'limit-reached';
    }
    else {
        document.getElementById('textarea-container').className = '';
    }
}