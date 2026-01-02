//find the largest no. from given 3 numbers 

// let a =[1,3,6,7]
let a=5 
let b=2
let c=8

let ans= a >b ? a>c?a:c :b>c ?b:c
console.log(ans)



// bitwise 
console.log(8|11)
console.log(26|15)
console.log(~(-6))


let dataFromAPI = null;

let data = dataFromAPI ?? "No data available";
console.log(data);



function getScore(score) {
  return score ?? 0;
}

console.log(getScore())
console.log(0.1+0.2 ==0.3);