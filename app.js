

let parentBox = document.querySelector('.parent-box');
let childBox = document.querySelector('.child-box');
let line = document.querySelector('.line');

window.addEventListener('scroll', function(){
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let fromTop = document.documentElement.scrollTop;
    let sub = scrollHeight - clientHeight;
    let result = fromTop * 100 / sub;

    let test = Math.round(result);
    parentBox.style.backgroundImage = `conic-gradient(#E74C3C ${result}%, #48C9B0 ${result}%)`;
    childBox.innerHTML = test;

    line.style.width =`${result}%`
});

