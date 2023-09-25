let object1 = document.querySelector(".mouseObject1");
let object2 = document.querySelector(".mouseObject2");
let mouseX = 0;
let mouseY = 0;
let objectX = 0;
let objectY = 0;
let easingFactor = 0.1;

document.addEventListener("mousemove", function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function updateObjectPosition() {
    let offset = 15;
    let targetX = mouseX - offset;
    let targetY = mouseY - offset;

    objectX += (targetX - objectX) * easingFactor;
    objectY += (targetY - objectY) * easingFactor;

    object1.style.transform = "translate(" + objectX + "px, " + objectY + "px)";
    object2.style.transform = "translate(" + objectX + "px, " + objectY + "px)";

    requestAnimationFrame(updateObjectPosition);
}

updateObjectPosition();

let typed = new Typed(".auto-type", {
    strings: ["Entertain", "Games", "Joy"],
    typeSpeed: 100,
    backSpeed: 20,
    loop: true
})

let arrowLeft = document.querySelector('.arrowLeft');
let arrowRight = document.querySelector('.arrowRight');
let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let swiper = document.querySelector('.swiper');

arrowLeft.addEventListener('click', () =>{
    swiper.style.right = '100%'
})

arrowRight.addEventListener('click', () =>{
    swiper.style.right = '0%'
})


let bar = document.querySelector('.bar');
let leftMenu = document.querySelector('.leftMenu');
let closeIcon = document.querySelector('.closeIcon');
let leftMenuTop = document.querySelector('.leftMenuTop')
let leftMenuBottom = document.querySelector('.leftMenuBottom')

bar.addEventListener('click', () => {
    bar.style.display = 'none';
    closeIcon.style.display = 'block'
    leftMenu.style.opacity = '1';
    leftMenu.style.pointerEvents = 'all';
    leftMenuTop.style.width = '1000px';
    leftMenuTop.style.opacity = '1';
    leftMenuBottom.style.transform = 'translateY(0)';
})

closeIcon.addEventListener('click', () => {
    bar.style.display = 'block';
    closeIcon.style.display = 'none';
    leftMenu.style.opacity = '0';
    leftMenu.style.pointerEvents = 'none';
    leftMenuTop.style.width = '800px';
    leftMenuTop.style.opacity = '0';
    leftMenuBottom.style.transform = 'translateY(50px)';
})

let search = document.querySelector('.search');
let searchIcon = document.querySelector('.searchIcon');

searchIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    search.classList.toggle("active");
});

document.addEventListener('click', (e) => {
    if (!search.contains(e.target) && e.target !== searchIcon) {
        search.classList.remove("active");
    }
});


let loginInput = document.querySelector('.loginInput2');
let visibility = document.querySelector('.visibility');
let hide = document.querySelector('.hide');
let login = document.querySelector('.login');
let loginClose = document.querySelector('.loginClose');
let user = document.querySelector('.user');
let container = document.querySelector('.container');

visibility.addEventListener('click', () => {
    if(loginInput.type == "password"){
        loginInput.type = "text";
    }else{
        loginInput.type = "password"
    }
    visibility.style.display = 'none'
    hide.style.display = 'block'
})

hide.addEventListener('click', () => {
    if(loginInput.type == "text"){
        loginInput.type = "password";
    }else{
        loginInput.type = "text"
    }
    visibility.style.display = 'block'
    hide.style.display = 'none'
})

user.addEventListener('click', () => {
    login.style.opacity = '1'
    login.style.pointerEvents = 'all'
    container.style.transform = 'translateY(0)';
    loginClose.style.transform = 'translateY(0)'
})

loginClose.addEventListener('click', () => {
    login.style.opacity = '0'
    login.style.pointerEvents = 'none'
    container.style.transform = 'translateY(-50px)';
    loginClose.style.transform = 'translateY(-50px)'
})
