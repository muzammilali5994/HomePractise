
// let a= [1,2,3,4,5];

// let reverse=[];

// for(let i= a.length-1; i>=0; i--){
 
//     reverse.push(a[i]);
 
// }

// console.log(reverse);

// let a= [1,2,3,4,5];
// let min = a[0];
// for(let i =0; i<a.length; i++){
//   if(a[i]<min){
//     min = a[i];
    
//   }
// }
// console.log(min);

// function sortStack(stack) {
//   let temp = [];

//   while (stack.length) {
//     let curr = stack.pop();
//     while (temp.length && temp[temp.length - 1] > curr) {
//       stack.push(temp.pop());
//     }
//     temp.push(curr);
//   }
//   return temp;
// }

// console.log(sortStack([4, 1, 3, 2])); // [1,2,3,4]


// function sortStack(stack) {
//   return stack.sort();
// }

// console.log(sortStack([4, 1, 3, 2])); // [1,2,3,4]

// function sortStack(stack) {
//   let temp = [];

//   while (stack.length) {
//     let curr = stack.pop();
//     while (temp.length && temp[temp.length - 1] > curr) {
//       stack.push(temp.pop());
//     }
//     temp.push(curr);
//   }
//   return temp;
// }

// console.log(sortStack([4, 1, 3, 2])); // [1,2,3,4]

//convert string to arry 

// let str = "hello world";
// let arr= str.split("");
// console.log(arr);

// let str = "hello world";
// let arr= Array.from(str);
// console.log(arr);

// let str= "hello world";
// let arr=[];
// for(let i =0; i<str.length; i++){
//   arr[i]=str[i];

// }
// console.log(arr);

// let arr = ["JS", "is", "easy"];
// let str= arr.join(" ");
// console.log(str);

//reverse string
// let str = "javascript";

// let result= str.split("");

// result = result.reverse();
// result = result.join("");

// console.log('"'+result+'"');

// let str = "javascript";
// let result = "";
// for(let i = str.length-1; i>=0; i--){
//     result += str[i];
// }
// console.log(result);

//check palandrome

// let str = "madam";
// if(str === str.split("").reverse().join("")){
//   console.log("palandrome");
// }

// let str = "madam";
// for(let i =0; i<=str.length; i++){
//   for(let j = str.length-1; j>=0; j--){
//     if(str[i] === str[j]){
//       console.log("palandrome");
//     }
//   }
// }
// let str = "madam";
// let isPalandrome = true;
// for(let i =0; i<=str.length; i++){
//   if(str[i] !== str[str.length-1-i]){
//     isPalandrome = false;
//     break;
//   }
// }
// if(isPalandrome){
//   console.log("palandrome");
// } else{
//   console.log("not palandrome");
// }

// let str = "aabbccdeeFF";
// let empt = "";

// for (let i = 0; i < str.length; i++) {
//   let found = false;

//   for (let j = 0; j < empt.length; j++) {
//     if (empt[j] === str[i]) {
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     empt += str[i];
//   }
// }

// console.log(empt); // "abcd"

// let sentence = "hello world";
// let words = sentence.split(" ");
// let result = [];

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   let capitalWord = word[0].toUpperCase()+word.slice(1);
//   result.push(capitalWord);
// }

// console.log(result); // "Hello World"

let str1 = "listen";
let str2 = "silent";

if (str1.length !== str2.length) {
  console.log(false);
} else {
  let isAnagram = true;

  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) {
      isAnagram = false;
      break;
    }
  }

  console.log(isAnagram); // true
}

