const buttons = document.querySelectorAll('button');
const list = document.querySelectorAll('.list');
// Get the root element
var r = document.querySelector(':root');
var rr = document.querySelector('body')
const m = document.querySelector('.moonget');
const s = document.querySelector('.sunget');
var flag = false;


var a = document.querySelectorAll('.skillphoto');
var b = document.querySelectorAll('.dot');



function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
    item.addEventListener('click', activeLink));


for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i]

    btn.addEventListener('click', function (event) {
        event.target.classList.toggle('active');
    });
}





function setcolor(e) {
    e.preventDefault();

    if (flag == false) {
        m.style.display = 'none'
        s.style.display = 'block'
        flag = true

        r.style.setProperty('--navbackcolor', '#222327');
        r.style.setProperty('--yellow', 'rgb(255, 0, 0)');
        r.style.setProperty('--azure', 'rgb(0, 0, 0)');
        r.style.setProperty('--white', 'rgb(0, 0, 0)');
        r.style.setProperty('--back', 'rgb(255, 255, 255)');
        r.style.setProperty('--aliceblue', 'rgb(0, 0, 0)');
        r.style.setProperty('--backColor', 'white');
        r.style.setProperty('--textcolor', 'white');
        r.style.setProperty('--blue', 'red');
        r.style.setProperty('--red', '#0582ff');

        rr.style.backgroundImage = 'repeating-linear-gradient(45deg, rgb(255 255 255 / 90%) 0%, rgb(255 255 255 / 3%) 25%, transparent 25%, rgba(0, 0, 0, 0.10) 50%)'
        rr.style.backgroundSize = '11rem'

    } else {
        s.style.display = 'none'
        m.style.display = 'block'

        flag = false

        r.style.setProperty('--yellow', 'yellow');
        r.style.setProperty('--blue', '#0582ff');
        r.style.setProperty('--azure', 'azure');
        r.style.setProperty('--white', 'white');
        r.style.setProperty('--back', 'black');
        r.style.setProperty('--darkblue', 'darkblue');
        r.style.setProperty('--aliceblue', 'aliceblue');
        r.style.setProperty('--backColor', 'rgb(3, 2, 27)');
        r.style.setProperty('--navbackcolor', '#fff');
        r.style.setProperty('--textcolor', 'black');

        rr.style.backgroundImage = 'repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%)'
        rr.style.backgroundSize = 'auto'

    }

}



var index = 0


function closemodel() {
    var d = document.getElementsByClassName('closemodel');
    d[0].style.display = 'none'
    console.log(d)
}

function addmodel() {
    var e = document.getElementsByClassName('closemodel');
    console.log(e)
    e[0].style.display = 'flex'
}

function add(n) {
    index = n
    slider()
}

function slider() {
    for (var i = 0; i < a.length; i++) {
        a[i].style.display = 'none'
        b[i].style.background = 'white'
    }

    a[index].style.display = 'block'
    b[index].style.background = 'red'
}
slider()
