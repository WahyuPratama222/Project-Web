let curtain = document.querySelector(".curtain");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    curtain.style.left = -value + "px"; 
});

let curtain1 = document.querySelector(".curtain1");
