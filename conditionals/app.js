
// checking the product  is out of stcok or not
// let product =0

// if(product ===0){
//     console.log("Product is out of stock")
// }
// else{
//     console.log("product is in stock")
// }


// checking the weather is rai ny or not

// let weather  = "rainy"

// if(weather==="rainy"){
//     console.log("Take an umbrella");
// }
// else{
//     console.log("dont take umbrella");
// } 


// checking the grade according to marks

// let marks =90
// if(marks >=90 && marks<=100){
//     console.log("Grade A");
// }
// else if(marks>=80 && marks<=90){
//     console.log("Grade B");
// }
// else if(marks>=70 && marks<=80){
//     console.log("Grade C");
// }
// else if(marks>=60 && marks <=70){
//     console.log("Grade D");
// }
// else{
//     console.log("Fail");
// }



// go to club  18+ age

// let age = 19
// let hasID = true        //false

// if(age>=18){
//     if(hasID){
//         console.log("Allowed in club");
//     }
//     else{
//         console.log("You need ID card");
//     }
// }
// else{
//     console.log("You are not allowed");
// }


// checking username and password

// let username="jk"
// let password ="1293"

// let usernam ="jk"
// let passwo ="123"

// if(username){
//     if(password){
//         if(username ===usernam && password ===passwo){
//             console.log("Login sucussfully");
//         }
//         else{
//             console.log("username or password is inavalid");
//         }
//     }
//     else{
//         console.log("invalid password");
//     }
// }else{
//     console.log("invalid username");
// }



// // again solving this question
// let user =""
// let pass =""

// let a ="ad"
// let b ="bbb"

// if(user === a && pass ===b && user && pass){
//     console.log("login Successfully");
// }
// else{
//     console.log("Invalid username or passwrod");
// }



//  Switch Case Question solve

// let color = "green"

// switch (color){
//     case "red" :
//     console.log("Stop!");
//     break;

//     case "yellow" :
//         console.log("Go slow");
//         break;

//     case "green" :
//         console.log("Go");
//         break;

//      default :
//         console.log("unknown color");
    
// }



//giving discount question

// let cart =120
// let discount
// if(cart< 50){
//     discount =cart
//     console.log("no doscount apply");

// }
// else if (cart <100){
//  discount =cart -(cart *0.1)
//  console.log("10% discount apply")
// }
// else{
//     discount =cart -(cart*(20/100))
//     console.log("20% discount apply");
// }
// console.log("Final Cart Value is: $" +discount.toFixed() )


// checking the the customer has subcription or not

// let subcriptionType = "standard"
// let hasSubcription = false

// if(hasSubcription){
//     if(subcriptionType==="premium"){
//         console.log("Access to All Content");
//     }
//     else if(subcriptionType==="standard"){
//         console.log("Access to Limited Content");
//     }
//     else{
//         console.log("Buy a Subription to view the content");
//     }
// }
// else{
//     console.log("Buy a Subcription to get aceess to all premium content");
// }



//questions  user select the the choice color and console it

// let color =prompt("enter color name")

// if(color){
//     console.log("slected theme");
//     document.body.style.backgroundColor= color    // according to client  color changes
// }
// else if(color ==="red"){
//     console.log("selected theme is red");
//     document.body.style.backgroundColor ="red"    // it checks first then show the color
// }
// else if(color === "pink"){
//     console.log("selected theme is pink");
//     document.body.style.backgroundColor="pink"
// }
// else if(color ==="green"){
//     console.log("Selected color is green");
//     document.body.style.backgroundColor ="green"
// }else{
//     console.log("Invalid color");
//     document.body.style.backgroundColor ="white"
// }




// find the smallest three number 

// let a = Number(prompt("Enter number 1"))
// let b = Number(prompt("Enter number 2"))
// let c = Number(prompt("Enter number 3"))

// if(a>b && a>c){
//     console.log(a);
// }
// else if(b>a && b>c){
//     console.log(b);
// }
// else{
//     console.log(c);
// }


//  Using switch case  solving role based access control

// let user =""

// switch (user){
//     case "admin":
//         console.log("Full Access");
//         break
    
//     case "editor" :
//         console.log("Edit Access");    
//         break

//     case "viewer":
//         console.log("Read only");   
//         break
       
//     default :
//     console.log("No Access");   
// }


// Fizz Buzzz   question 

let n =Number(prompt("enter number"))

if(n%3===0  && n%5===0){
    console.log("FizzBuzz");
}
else if(n%5===0){
    console.log("Buzz");
}
else if(n%3===0){
    console.log("Fizz");
}
else{
    console.log("Neither divisible by 3 or 5");
}