const balloonElem = document.getElementById('balloon');

const onKeyUpHandler = function (e) {

    let size = parseInt(balloon.style.fontSize);

    console.log(e.keyCode, size, balloon.style.fontSize);

    if (e.keyCode === 68) {
        size = size - 10;
        if (size <= 0) {
            balloonElem.style.fontSize = '30px';
            balloonElem.textContent = 'Done';
            document.removeEventListener('keyup', onKeyUpHandler);
        } else {
            balloonElem.style.fontSize = size + 'px';
        }
    } else if (e.keyCode === 73) {
        size = size + 10;
        balloonElem.style.fontSize = size + 'px';
        if (size > 60) {
            balloonElem.textContent = '💥';
            document.removeEventListener('keyup', onKeyUpHandler);
        }
    }
}

document.addEventListener('keyup', onKeyUpHandler);