

let firstButton =document.querySelector('.btn1')

// firstButton.onclick = ()=>{
//     console.log("mai property method wla click hu");
// }

// firstButton.onclick =()=>{
//     console.log("doble click wala method h ye");

// }

firstButton.addEventListener('click', ()=>{
    console.log("ye wlaa 1st event listener wlaa h ");
})

firstButton.addEventListener('click',()=>{
    console.log("ye wala 2nd event listener hai");
})


let res = (een)=>{
    console.log(een);
    console.log("hello");
}
firstButton.addEventListener('click',res)
// firstButton.removeEventListener('click',res)
// firstButton.addEventListener('mouseenter',()=>{
//     console.log("mouse enter");
// })
// firstButton.addEventListener('mouseleave',()=>{
//     console.log("mouse leave");
// })
// firstButton.addEventListener('mousemove',()=>{
//     console.log("mouse move");
// })
// firstButton.addEventListener('auxclick',()=>{
//     console.log("fwes");
// })
// firstButton.addEventListener('contextmenu',()=>{
//     console.log("context menu");
// })

firstButton.addEventListener('keypress',()=>{
    console.log("key press hua h ");
})
firstButton.addEventListener('keydown',function(){
    console.log("key press down hai");
})

firstButton.addEventListener('keyup',function(){
    console.log("key press up h ");
})