//for loop

// for(let i =1 ;i<=10;i++){
//     console.log("Varun sharma");
// }



// while loop

// let i =1;
// while(i<=10){
//     console.log("sonu sharma" ,i);
//     i++
// }


// do-while loop

// let i=1
// do{
// console.log("sonu" ,i);
// i++
// }while(i<=5);



// for-of loop

// let str = "Sonu sharma"
// for(let v of str){             // it will show the value of the string
//     console.log(v);
// }
// // same method in loop  for loop
// for(let i=0;i<=str.length;i++){
//     console.log(str[i]);
// }


//  for-in loop

//of loop se value milega.   value    
//in loop se index milta h.  key pair 

// let str= "sonu"
// for(let v in str){
//     console.log(v);     // it will show index of the string

// }


//  print all even number from 0 to 100
 
// for(let i=0;i<=100;i++){
//     if(i % 2 == 0){        //even number
//         console.log(i);
//     }

// }


// vowel and consonant count

// let str = "aidwd bw"
// let vowel = 0
// let consonant =0

// for(let ch of str){
//     if(ch =="a" || ch == "e" ||ch =="i" ||ch =="o" ||ch =="u" ||ch=="A" || ch== "E" ||ch== "I" || ch== "O" || ch== "U"){
//         vowel++
//     }
//     else if(ch == " "){
//         console.log("Space not counted");
//     }
//     else{
//         consonant++
//     }
// }
// console.log("Vowel count is: ",vowel);
// console.log("Consonant Count is: ",consonant);



// Calculate sum of first n numbers
// let jkk=2
// let sum  =0
// for(let i=1;i<=jkk;i++){
//    sum+=i
// }
// console.log(sum);



//  taking m and n from user 

// let m =2
// let n =4

// let add =0
// for(let i=m;i<=n;i++){
//  add+=i
// }
// console.log(add);




/// Odd number find
// let n= 9
// for(let i=1;i<=n;i++){
//     if(i%2 !==0){
//         console.log(i);
//     }
// }


//  game challenge

// let computerNumber =7
// let guess =null

// while(guess !== computerNumber){
//     let guess =Number(prompt("Enter number"))

//     if(isNaN(guess)){
//         alert("Please enter valid number try again ");
        
//     }else if(guess>computerNumber){
//         alert("guss is high");
//     }else if(guess<computerNumber){
//         alert("guess is low");
//     }
//     else{
//         alert("Congratulation!... You Won");
//     }
    
// }



//  password checker

// let password ="sonu"
// let user =null
// let userAttempt=0


// while(password !==user && userAttempt<3){
//         user=prompt("enter a password")
//         userAttempt++
//         if(password === user){
//             alert("password matched")
//         }
//         else if(userAttempt>=3){
//             alert("All Attempt Over ,Soorry please try again later")
//         }
//         else{
//             alert("your password is incorrect please try again")
//         }
//     }
    


// to find the factorial

// let n= 5
// let factorial =1
// for(let i=1;i<=n;i++){
//     factorial*=i
// }
// console.log(factorial);


