
const image1 = document.querySelector(".img1")
const image2 = document.querySelector(".img2")
const image3 = document.querySelector(".img3")

image1.addEventListener("mouseenter", () => {
    image1.style.transform = "scale(1.05)"
})

image1.addEventListener("mouseleave", () => {
    image1.style.transform = "scale(1)"
})

image2.addEventListener("mouseenter", () => {
    image2.style.transform = "scale(1.05)"
})

image2.addEventListener("mouseleave", () => {
    image2.style.transform = "scale(1)"
})

image3.addEventListener("mouseenter", () => {
    image3.style.transform = "scale(1.05)"
})

image3.addEventListener("mouseleave", () => {
    image3.style.transform = "scale(1)"
})


const mode = document.querySelector(".mode");
const toggle = document.querySelector(".fa-sharp");
const body = document.querySelector("body");

mode.addEventListener("click", () => {
    if (toggle.classList.contains("fa-moon")) {
        toggle.classList.remove("fa-moon");
        toggle.classList.add("fa-sun");
        body.style.backgroundColor = "black";
        body.style.backgroundImage = "none"
    } else {
        toggle.classList.remove("fa-sun");
        toggle.classList.add("fa-moon");
        body.style.backgroundImage = "linear-gradient(#314128, #a6bfcc 40%)";  
    }
});


const password1 = document.querySelector(".password1")
const password2 = document.querySelector(".password2")
const paragraphText = document.querySelector(".result-text")

password1.addEventListener("input", () => {
    const password1Value = password1.value
    const password2Value = password2.value

    if (password1Value === password2Value){
        paragraphText.textContent = "Heslá sa zhodujú"
        paragraphText.classList.add("valid")
        paragraphText.classList.remove("invalid")
    } else {
        paragraphText.textContent = "Heslá sa nezhodujú"
        paragraphText.classList.add("invalid")
        paragraphText.classList.remove("valid")
    }

    if(password1Value === "" & password2Value === ""){
        paragraphText.textContent = ""
    }
})

password2.addEventListener("input", () => {
    const password1Value = password1.value
    const password2Value = password2.value

    if (password1Value === password2Value){
        paragraphText.textContent = "Heslá sa zhodujú"
        paragraphText.classList.add("valid")
        paragraphText.classList.remove("invalid")
    } else {
        paragraphText.textContent = "Heslá sa nezhodujú"
        paragraphText.classList.add("invalid")
        paragraphText.classList.remove("valid")
    }
    
    if(password1Value === "" & password2Value === ""){
        paragraphText.textContent = ""
    }

});

const button = document.getElementById("top");

button.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        button.style.display = "block";
    }else{
        button.style.display = "none"
    }
});

const menu = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-wrapper");
const close = document.querySelector(".nav-close");
const section = document.querySelector(".section1");

let SectionMoved = false;

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
    close.classList.toggle("active");

    if (SectionMoved) {
        section.style.transform = "translateY(0)";
        SectionMoved = false;
    } else {
        section.style.transform = "translateY(15rem)";
        SectionMoved = true;
    }
});


window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        section.style.transform = "translateY(0)";
        SectionMoved = false;
    }
});



