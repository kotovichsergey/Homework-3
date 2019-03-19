let  element = document.querySelector('body'),
    counter = 0;
element.addEventListener('click', function (event) {
    let  span = document.createElement('span');
    span.innerHTML = ++counter;
    span.style.cssText = 'top: ' +  event.pageY  + 'px; \ left: ' + event.pageX + 'px;';
    element.appendChild(span);
});