// const output = document.getElementById("output");
// const wrapper = document.getElementsByClassName("wrapper");

const output = document.querySelector("#output");
const wrapper = document.querySelector(".wrapper");
const items = document.querySelectorAll(".item");
const target = document.querySelector(".target");
const title = document.querySelector("h1");
const userID = document.querySelector("#userID");
target.style.color = "red";
target.style.fontSize = "36px";
const point = document.querySelector(".point");
title.addEventListener("click", function(){
    title.style.color = "red";
})

userID.addEventListener("input", function(e) {
    target.innerText = this.value
})
//function(e) : 이벤트 객체를 넘겨주는 것이다.

button.addEventListener("click", () => {
    target.style.width = "50px";
    target.style.height = "50px";
    target.style.backgroundColor = userID.value;
    target.style.borderRadius = "50%";
})

items.forEach(item => {
    item.addEventListener("click", () => {
        point.innerHTML = item.innerText;
    })
})