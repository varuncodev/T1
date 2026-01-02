//Question using prompt
// let a =Number(prompt("enter first number"))
// let b =Number(prompt("enter second number"))
// console.log("a + b = " ,a+b)
// console.log("a - b = " ,a-b)
// console.log("a * b = " ,a*b)
// console.log("a / b = " ,a/b)
// console.log("a % b = " ,a%b)
// console.log("a ** b = " ,a**b)



//Question  chaining assignment operator

// let a=b=c=d=50
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


//check the number is even or odd by taking user input using prompt

// let user1 =Number(prompt("Enter yor first number"))
// let user2 =Number(prompt("Enter your second number"))

// if(user1%2 ==0 && user2 % 2 ==0){
//     console.log("It is even number")
// }
// else if(user1 %2 !==0 && user2 % 2 !==0){
//     console.log("it is Odd number ")
// }
// else{
//     console.log("one number is even and another number is odd")
// }


// let input1 =Number(prompt("Enter your number"))
// if(input1 %2 ==0){
//     console.log(input1," is Even Number")
// }
// else if(input1 %2 !==0){
//     console.log(input1," is Odd Number")
// }



// solving this question using ternary operator
// let input=Number(prompt("enter your number")) 
// let result = isNaN(input) ? "Invalid input " : input %2 == 0 ? "Even" : "Odd" 
// console.log(result)



//let find the value of x
// let x=5
// console.log(x)
// x +=3
// console.log(x)
// x-=2
// console.log(x)
// x*=4
// console.log(x)
// x/=6
// console.log(x)
// x%=3
// console.log(x)

// //checking range betwwen 10 and 20
// let numv =10
// let range = (numv>=10 && numv<=20) ? "Yes" :"No"
// console.log(range)

// // find the largest number betwwen 3 numbers using ternary operator

// let a =5
// let b=3
// let c=2

// let ans = a > b ? (a > c ? a:c) :(b > c ? b:c)
// console.log(ans)

// //using Math.max
// let anss= Math.max(a,b,c)
// console.log(anss)


// // take email password from the user if email and apssword are incrorrect says invalid
// // if it is correct then it said login successfully
// let email1 =prompt("enter your email")
// let pass1 =prompt("Enter your password")

// let email ="saket@gmail.com"
// let password ="sharma@123"
// if(email1===email && pass1===password){
//     alert("You are Login successfully")
// }
// else{
//     console.log("invalid email or password")
// }


// // output of the following code

// let result =a++ + --b * c-- -++a +b-- / --c
// console.log("a: ",a)
// console.log("b: ",b)
// console.log("c: ",c)
// console.log("result: ",result)




//checking output
// let w=0
// console.log(~w)

// //checking output of the code

// let x=10
// let y=5
// let z="10"

// x += y*2
// console.log(x)

// let isEqual =x  == z 
// console.log(isEqual)

// let isStrictEqual = x === z
// console.log(isStrictEqual)

// let logicTest =(isEqual || isStrictEqual) && !(y>10)
// console.log(logicTest)


// let result =logicTest ? ++x :--y
// console.log(result)


// console.log(typeof z)




//checking the code output

let a = 6
let b = 3
let c= "6"

a += b << 1
// a=a+b<<1
console.log(a)


let d =a & b
console.log(d)

let e =a | b
console.log(e)

let f =a^b
console.log(f);

let g =~a
console.log(g);


let check = (a===c) && (d < e) || !(f===e)
console.log(check);


let result =check ? typeof g : --b
console.log(result);
