const buttoncolor = document.getElementById("btn");
const head = document.getElementById("heading")
const head_2 = document.getElementById("heading_2")
buttoncolor.addEventListener('click', function () {
    head.style.color = 'red';
    head_2.style.color = 'blue';
    document.body.style.backgroundColor = 'black';
})