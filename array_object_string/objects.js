require("./array.js");
require("./app.js")

// // // let obj = {
// // //     brand:"toyota",
// // //     color:"red",
// // //     speed:100,
// // //     "full name":"tata motors",
// // //     start: function(){
// // //         return "driving the car"
// // //     },
// // //     stop:()=>{
// // //         return "Stop!!!"
// // //     } 
// // // }
// // // obj.sunroof="4x4"

// // // delete obj["speed"]    //dleete property
// // // console.log(obj);
// // // console.log(obj.brand);
// // // console.log(obj.start());
// // // console.log(obj.stop());
// // // console.log(obj["start"]());
// // // console.log(obj["full name"]);



// // let obj ={
// //     name:"aksas",
// //     age:45,

// // }

// // let bb=Object.keys(obj)
// // let cc=Object.values(obj)
// // let dd= Object.entries(obj)
// // let ee=Object.assign(obj)    // it is used to make copy
// // obj.car="jhg"

// // let ff=Object.freeze(obj)
// // obj.bike="hdf"

// // let hh=obj.hasOwnProperty("ca")  // it return boolean value
// // console.log(obj);
// // console.log(bb);
// // console.log(cc);
// // console.log(dd);
// // console.log(ee);
// // console.log(ff);
// // console.log(hh);
// // // for(let ch in obj){
// // //     console.log(ch);
// // // }




// // QUESTIONS 1
// // let object ={
// //     name:"sonu",
// //     age:"24",
// //     city:"bihar"

// // }
// // object.email="sonu@gmail.com"
// // delete object.city
// // console.log(object);
// // for(let chr in object){
// //     console.log(`value of ${chr} is ${object[chr]}`);
// // }



// // QUESTION 2 & 3
// // let obj={
// //     fname:"param",
// //     mname:"jk",
// //     lastname:"sukhwinder"

// // }
 
// // // let fullname =(param)=>{
// // //  return `${param.fname} ${param.mname} ${param.lastname}`
// // // }
// // // let ji = fullname(obj)
// // // console.log(ji)
 
// // let key =Object.keys(obj).length
// // console.log(key);



// // // QUESTION 4
// // let object =[
// //    {name:"sonu",role:"admin"},
// //    {name:"ram",role:"user"},
// //    {name:"varun",role:"user"},
// //    {name:"sudhir",role:"admin"},

// // ]
// // function filtersdf(object,role){

// //     let filteredItem= object.filter(item=>{
// //         return item.role ===role
// //     })
    
// //     let result =filteredItem.map((items)=>{
// //         return items.name
// //     })
// //     return result;
    
// // }
// // let red =filtersdf(object,"admin")
// // console.log(red);



// // QUESTIONS 5

// // let products=[
// //     {id:1,name:"Pixel"},
// //     {id:2,name:"Samsung"},
// //     {id:3,name:"Oppo"}

// // ]

// // function searchProducts(pro,keyword){
// //     let rek =pro.filter((item)=>{
// //         return item.name.toLowerCase().includes(keyword.toLowerCase())

// //     })
// //     console.log(rek);

// // }
// // searchProducts(products,"p")




// // QUESTION 6

// // const comment=[
// //     {postid:1,text:"great post"},
// //     {postid:2,text:"thanks"},
// //     {postid:1,text:"very helpful"}
// // ]

// // function groupByPost(comsd){
// //     let groupComment ={}
// //     let jadu =comsd.map((item)=>{
// //         if(groupComment.hasOwnProperty(item.postid)){
// //             groupComment[item.postid].push(item.text)

// //         }else{
// //             groupComment[item.postid] =[item.text]
// //         }
        
// //     })

// // console.log(groupComment);
// // }
// // groupByPost(comment)//try again

// //solve using destructuring


// // QUESTION 7

// let params ={search:"laptop",page:2,sort:"price"}

// function pR(para){
// let str =""
// for(let sg in para){
//     str =str+ `${sg}=${para[sg]}&`
// }
// let url =str.slice(0,str.length-1)
// console.log(url);
// }

// pR(params)




//   let d = Number(2000);

//   // TODO: Convert days into years, months, and days
//   let year = Math.floor(d/365)
//   d = d%365
//   let month = Math.floor(d/30)
//   let day = d%30
//    console.log(year,"year")
//     console.log(month,"month")

//     console.log(day,"days")

// let inputs =""
//     const day = inputs[8];
//       const month = inputs[2];
//       const year = inputs[2024]

//       // TODO: Add logic here to check if the date is valid
//            if(!year%4==0){
//             console.log("Not valid")
//            }

          
//          else if(year%400===0||year%4==0||year%100==0){
//             console.log("Valid")
//          }else{
//           console.log("Invalid")
//          }
          
