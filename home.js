let color = 0;
let mode = localStorage.getItem("mode");

if (mode !== "dark") {
    // Light mode styles here
    document.querySelector("body").classList.add("body-light");
    document.querySelector(".header").classList.add("header-light");
    document.querySelector(".headmenu").classList.add("headmenu-light");
    document.querySelector(".banner").classList.add("banner-light");
    document.querySelector(".motto").classList.add("motto-light");
    document.querySelector(".place-bar").classList.add("place-bar-light");
    for (var i = 0; i < 3; i++) {
        document.querySelectorAll(".srvc")[i].classList.add("srvc-light");
    }
    document.querySelector(".ab").classList.add("ab-light");
    document.querySelector(".con").classList.add("con-light");
    document.querySelector(".footer").classList.add("footer-light");
    document.querySelector('.footer').getElementsByTagName('h1')[0].style.color = "black";

    if (window.innerWidth >= 0 && window.innerWidth < 992) {
        var ainside = document.querySelector('.headmenu').getElementsByTagName('a');
        for (i = 0; i < ainside.length; i++) {
            ainside[i].style.color = "black";
        }
    }

    document.querySelector(".dark").style.visibility = "visible";
    document.querySelector(".light").style.visibility = "hidden";
}

// Rest of your code for setting the mode, toggling classes, etc.
