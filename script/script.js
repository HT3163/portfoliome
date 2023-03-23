// const buttons = document.querySelectorAll('button');
const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click', activeLink));

<<<<<<< HEAD
// window.onscroll = function () { scrollFunction() };
// console.log(document.body.scrollHeight)
// function scrollFunction() {
//     if (document.body.scrollTop <= 500 || document.documentElement.scrollTop <= 500) {
//         list.forEach((item) => item.classList.remove('active'));
//         document.querySelector('.indicator').style.display = 'block'
//         list[0].classList.add('active')
//         // console.log('hi')
//     }
//     if ((document.body.scrollTop > 500 || document.body.scrollTo <=1000) || 
//     (document.documentElement.scrollTop > 500 || document.documentElement.scrollTo <=1000)) {
        
//         document.querySelector('.indicator').style.display = 'none'
//         list.forEach((item) => item.classList.remove('active'));
//             // list[1].classList.add('active')
//         // console.log('hi')
//     }
   
// }

// for (let i = 0; i < buttons.length; i++) {
//     const btn = buttons[i]

//     btn.addEventListener('click', function (event) {
//         event.target.classList.toggle('active');
//     });
// }




=======
window.onscroll = function () { scrollFunction() };

>>>>>>> f423997eefa5b53200e9686c3e8d85595cb927cd
// Get the root element
let t = document.querySelector('.topHeaderA')
var getRoot = document.querySelector(':root');
var getBody = document.querySelector('body')
const getMoon = document.querySelector('.moonget');
const getSun = document.querySelector('.sunget');
t.addEventListener('click', setcolor)
var flag = false;

function setcolor(e) {
    e.preventDefault();

    if (flag == false) {
        getMoon.style.display = 'none'
        getSun.style.display = 'block'
        flag = true

        getRoot.style.setProperty('--navbackcolor', '#222327');
        getRoot.style.setProperty('--yellow', 'rgb(255, 0, 0)');
        getRoot.style.setProperty('--azure', 'rgb(0, 0, 0)');
        getRoot.style.setProperty('--white', 'rgb(0, 0, 0)');
        getRoot.style.setProperty('--back', 'rgb(255, 255, 255)');
        getRoot.style.setProperty('--aliceblue', 'rgb(0, 0, 0)');
        getRoot.style.setProperty('--backColor', 'white');
        getRoot.style.setProperty('--textcolor', 'white');
        getRoot.style.setProperty('--blue', 'red');
        getRoot.style.setProperty('--red', '#0582ff');

        getBody.style.backgroundImage = 'repeating-linear-gradient(45deg, rgb(255 255 255 / 90%) 0%, rgb(255 255 255 / 3%) 25%, transparent 25%, rgba(0, 0, 0, 0.10) 50%)'
        getBody.style.backgroundSize = '11rem'

    } else {
        getSun.style.display = 'none'
        getMoon.style.display = 'block'

        flag = false

        getRoot.style.setProperty('--yellow', 'yellow');
        getRoot.style.setProperty('--blue', '#0582ff');
        getRoot.style.setProperty('--azure', 'azure');
        getRoot.style.setProperty('--white', 'white');
        getRoot.style.setProperty('--back', 'black');
        getRoot.style.setProperty('--darkblue', 'darkblue');
        getRoot.style.setProperty('--aliceblue', 'aliceblue');
        getRoot.style.setProperty('--backColor', 'rgb(3, 2, 27)');
        getRoot.style.setProperty('--navbackcolor', '#fff');
        getRoot.style.setProperty('--textcolor', 'black');

        getBody.style.backgroundImage = 'repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%)'
        getBody.style.backgroundSize = 'auto'

    }

}


// Slider

var getbtnclose = document.querySelector('.btn-close')
var getskillhtml = document.querySelector('.skillhtml')
var a = document.querySelectorAll('.skillphoto');
var b = document.querySelectorAll('.dot');

getskillhtml.addEventListener('click', addmodel)
getbtnclose.addEventListener('click', closemodel)

function addmodel() {
    var e = document.getElementsByClassName('closemodel');
    console.log(e)
    e[0].style.display = 'flex'
}

function closemodel() {
    var d = document.getElementsByClassName('closemodel');
    d[0].style.display = 'none'
    console.log(d)
}

var index = 0
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
