
// let a = document.querySelector("h1")
// a.innerHTML ="Harsh Pandey"
// a.style.color ="green"
// a.addEventListener('click', function (){ 
//     a.style.color ="pink"
//     a.style.backgroundColor ="blue"
// })

// let box = document.querySelector("h2")
// let expand =document.querySelector("button")
// let shrink =document.querySelector(".btn2")

// expand.addEventListener('click',()=>{
//     box.style.scale ="1"

// })

// shrink.addEventListener('click',()=>{
//     box.style.scale ="0.7"
// })

// let hel =document.getElementsByTagName("div")
// console.log(hel)


// console.log(document.getElementsByClassName("hwe"))

// let daba=document.querySelector("h1")

// console.log(daba);

// let fry =document.querySelectorAll("#qw")
// console.log(fry);

// //question 1
// let trap =document.createElement('h4')
// trap.innerText ="Mai tumse pyaar karta hu"
// trap.style.backgroundColor ="black"
// trap.style.color="green"
// trap.style.fontSize ="50px"
// trap.style.textAlign ="center"
// trap.style.transition = "color 0.3s ease"
// let body =document.querySelector('body')
// body.append(trap)
// trap.setAttribute('style','background-color:black;color:green')

// function randomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16)
// }

// // auto change color every 500ms
// setInterval(() => {
//   trap.style.backgroundColor = randomColor()
//   trap.style.color = randomColor()
//   body.style.backgroundColor =randomColor()
// }, 500)
// trap.addEventListener('click',()=>{
//    trap.style.color ="blue"
// })



// //question 2

// let btn =document.createElement('button')
// btn.innerText ='CliCk ME'
// trap.prepend(btn)




// //Question 3

// let diva =document.querySelector('.ty')
// diva.setAttribute('class',`${diva.getAttribute('class')} tt`)
// console.log(diva.getAttribute('class'))





//Question 4
// html element create using js

// function chngeTagName(oldNode,newTagName){
//   if(oldNode instanceof Element){
//    let mjk =document.createElement(newTagName)
//     mjk.innerHTML =oldNode.innerHTML
//     for(let sh of oldNode.attributes){
//       mjk.setAttribute(sh.name,sh.value)
//     }
//     oldNode.replaceWith(mjk)
//   }else{
//     console.log("Invalid Node");
//   }


// }


// let dau =document.querySelector('h1')
// chngeTagName(dau,'p')





//classList properties mostly used in tech worrld
let the=document.querySelector('h1')
the.classList.add('chngecolor')      //add property add the class
the.classList.remove('chngecolor')   //remove property will remove the class 
the.classList.toggle('rajs')         //toggle property do if there is same name class it removed it if not exist then it add new class to it
the.classList.contains('chngecolor') //constains property used to check the class is present or not  if present it will will return the boolean true /false


// make the button that chnges the theme 

let changeColor=document.querySelector('button')
let body =document.querySelector('body')
let theme ="light"
changeColor.addEventListener('click', ()=>{
  // body.style.backgroundColor = '#' + 
  // Math.floor(Math.random() * 16777215).toString(16)

  // if(theme ==="light"){
  //   body.style.backgroundColor ="black"
  //   body.style.color ='red'
  //   theme ='black'
  // }else{

  //   body.style.backgroundColor ="pink"
  //   body.style.color ='green'
  //   theme ='light'
  // }



  // if(body.className ==="light"){
  //   body.className ='dark'
  
  // }
  // else{
  //   body.className ='light'
  // }



  body.classList.toggle('dark')




})