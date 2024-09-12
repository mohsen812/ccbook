document.getElementById('myButton').addEventListener('click', function() {
    var messageElement = document.getElementById('message');
    if (messageElement.textContent === 'دکمه کلیک شد!') {
        messageElement.textContent = 'دوباره کلیک شد!';
    } else {
        messageElement.textContent = 'دکمه کلیک شد!';
    }
});
