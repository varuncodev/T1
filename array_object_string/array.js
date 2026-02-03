// // array are mutable it means we can  make chnges
// // array typeof is Object
// // arrray is special type of array

// let arr =[23,344,5,56,2,"fef"]
// console.log(arr);

// //literals array method
// let arr2 =[234,"232","iue","g2"]
// console.log(arr2.length);

// //Constructor Array method 
// let arr3 = new Array(24,"heelo","hbe")
// console.log(arr3);



// let arr6=[20]
// let arr5= new Array(20)
// console.log(arr6)
// console.log(arr5)



// for(let i =0 ;i<arr.length;i++){
//     console.log(arr[i]);
// }



// for(let check of arr2){
//     console.log(check);
// }


// for(let index in arr2){
//     console.log(index);
// }


// let arr9 =[23,45,543,53]
// console.log(arr9);
// arr9[0]=55
// let b =arr9.push(345)
// console.log(arr9 ,b);

// let a =arr9.pop()
// console.log(arr9, a );





// let c =arr.unshift(45)
// console.log(arr,c);

// let d =arr.shift()
// console.log(arr ,d);


// let es=arr.splice(2,3)
// console.log(es);




// //concat method add multiple array in one
// let aa=[237,3289,"jhbjs","hs"]

// let sj =aa.concat(arr2,arr3)
// console.log(sj);

// //use ... spread operator instead of concat
// let dad = [...aa,...arr3]
// console.log(dad);



// let result =[3435,45,6,"564","d","df"]
// let ss =result.join() //array to string
// console.log(result);
// console.log(ss);   // this will written string


// let bool = result.includes(6)
// console.log(bool);



// let string =result.toString()
// console.log(string);

// let helof =result.indexOf("d")
// console.log(helof);

// result.reverse()
// console.log(result);




// let dj=result.find((item)=>{
// return(
//     item ==="d"
// )
// })
// console.log(dj);




// let geo = [34,[6,7,[3,77],"34",["dff","ie"]]]
// let res = geo.flat(Infinity)
// console.log(geo);
// console.log(res);


// let arrayad =[22,4,5,772,6,2]
// arrayad.sort((a,b)=>{
//     return a - b
// })
// console.log(arrayad);




// let str ="abcabcbb"
// // let map =new Map()
// let i=0
// let maxlen=0

// // for(let j=0;j<str.length;j++){
// //     let chara =str[j]
// //     if(map.has(chara) && map.get(chara) >=i){
// //         i =map.get(chara) + 1

// //     }
// //     map.set(chara,j)
// //     maxlen =Math.max(maxlen ,j-i +1)
// // }
// // console.log(maxlen);


// // now attempting same question again

// let maps= {}

// for(let j=0;j<str.length;j++){
//     let chs =str[j]

//     if(maps[chs] !==undefined && maps[chs] >= i){
//         i = maps[chs] + 1
//     }
//     maps[chs]=j
//     maxlen =Math.max(maxlen,j-i+1)

// }
// console.log(maxlen);



// let num=[2,5,63,7]
// let target=9
// let map =new Map()
// for(let i=0;i<num.length;i++){
//  const need = target-num[i]
 
//  if(map.has(need)){
//     console.log([map.get(need),i])
//     break;
//  }
//  map.set(num[i],i)
// }



// let map = new Map();
// map.set(3, 0);
// map.set(5, 1);

// console.log(map.has(3)); //true
// console.log(map.get(5)); //0



// for (let i = 0; i <= arr.length; i++) {  //arr is not defined
//    console.log(arr[i]);
// }



// let input=[1, 4, 6, 8]
// let target = 10
// output: true
// let map= new Map()
// function jadu(input,target){
// for(let i=0;i<input.length;i++){
//     let need=target-input[i]

//     if(map.has(need)){
//        return [map.get(input[i],true)]
//     }
// }
// map.set(input[i],true)
// }

// console.log(jadu([1, 4, 6, 8],10))
// let arr =[8,3,62,73,2]
// arr.sort((a,b) => {
//  return b-a
// })
// console.log(arr);


// arr.sort((a,b)=>{
//     return a-b
// })

// console.log(arr);

// let newar = arr.map((element,index,arr) =>{
//     console.log(element,index,arr);
//     return element *2
// })
// console.log(arr);
// console.log(newar);



// arr.forEach((eleme,index)=>{
//     arr[index] =eleme *2

// })
// console.log(arr);



// let arras =arr.filter((eleme,inex,arr)=>{

// return eleme % 2===0

// })
// console.log(arr);
// console.log(arras);



// let jj= arr.reduce((preVal,currVal)=>{
//     return preVal+currVal

// },40)
// console.log(arr)
// console.log(jj);





// Questions

// let marks=[22,35,65,56,25]

// let total =marks.reduce((accu,curr)=>{
// return accu+curr
// })
// console.log(total);
// let average = total/marks.length
// console.log(average);



// let arr =25
// let arrss =new Array(arr).fill() //constructor method


// arrss.forEach((_,index) => {
//     arrss[index] =index+1
// });
// console.log(arrss);


//Question   add spiderman at the end✅
// add superman at the start✅
// remove batman and add thor in its place✅
// check wheather captain is present in the string✅

// let arr =["ironman","hulk","spiderman","batman","superman"]

// arr.push("wanda")
// arr.unshift("Black panthar")

// arr.splice(4,1,"thor")
// let isCap =arr.includes("captain")
// console.log(arr);
// console.log(isCap);




// // to chck given things is an array or not
// let a= {}
// let aa ="ss"
// let b=Array.isArray(a)    //it is used to check the given thing is array or not
// let c=Array.from(a)   //chnged to  string,object  to array
// console.log(Array.of(a,aa))  // it is used to pass the multiple variale 
// console.log(a);
// console.log(b);
// console.log(c);




// array me kya hum multiple value primitive data types pass kar sakte h 
//yes  and it can be chnged to array also with using Array.of(........) 


// check given string is palindrome or not


// let str="ollo"
// let resu = str.split("").reverse().join("")
// if(str ===resu){
//     console.log("It is Palindrome");
// }
// else{
//     console.log("NO");
// }




//make the first ltter of string  in uppercase

// let str = "how are you?"
// let result =str.split(" ").map((elem,index)=>{
//   return elem.charAt(0).toUpperCase()+elem.slice(1)
// })

// let raja =result.join(" ")
// console.log(raja)   ///original string never change





let str=2
for(let i =1;i<=str;i++){
  console.log(i,"*");
}


