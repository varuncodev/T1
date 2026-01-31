
let a = document.querySelector("h1")
a.innerHTML ="Harsh Pandey"
a.style.color ="green"
a.addEventListener('click', function (){ 
    a.style.color ="pink"
    a.style.backgroundColor ="blue"
})

let box = document.querySelector("h2")
let expand =document.querySelector("button")
let shrink =document.querySelector(".btn2")

expand.addEventListener('click',()=>{
    box.style.scale ="1"

})

shrink.addEventListener('click',()=>{
    box.style.scale ="0.7"
})