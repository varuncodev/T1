// let itemPrice =130
// let item =4
//  let totalItemPrice = itemPrice *item
//  let discount =40
//  let totalDiscount= totalItemPrice *0.4

//  console.log(totalDiscount)// 208

// ternary operator
let age =17
let drive = age >=18 ? "You can Drive the car" : "Sorry You cannot drive the car"
console.log(drive)


let username=""
let password=""
let message =(username && password) ? "Login suceesfully" : "Both field are required"
console.log(message)


let a=10
let b=20
let c=30

let resu = (a<b || b<c)
console.log(resu)


let res=10
let descs=res++ + ++res -10
console.log(descs)

// use find
const nums =[3,7,11,15,18,21,22]
const result =nums.find((value,index)=>{
  return nums[index-1]%2 !=0 && nums[index+1] %2==0
})

console.log(result)

//use find()
const numss=[10,20,30,40,50]
let sum=0
const ans =numss.find((item)=>{
    if(sum>=60){
        return true
    }
    else{
        sum+=item
    }
})
console.log(ans)