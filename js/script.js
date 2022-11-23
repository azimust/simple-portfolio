let myArr = [];
let headerBurger = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu");
let body = document.querySelector("body");
myArr.push(headerBurger, headerMenu)

headerBurger.addEventListener("click",()=>{
  myArr.forEach(element => {
    element.classList.toggle("active")
});

body.classList.toggle("lock")
})