
let a= [1,2,3,4,5];

let reverse=[];

for(let i= a.length-1; i>=0; i--){
 
    reverse.push(a[i]);
 
}

console.log(reverse);

let a= [1,2,3,4,5];
let min = a[0];
for(let i =0; i<a.length; i++){
  if(a[i]<min){
    min = a[i];
    
  }
}
console.log(min);

function sortStack(stack) {
  let temp = [];

  while (stack.length) {
    let curr = stack.pop();
    while (temp.length && temp[temp.length - 1] > curr) {
      stack.push(temp.pop());
    }
    temp.push(curr);
  }
  return temp;
}

console.log(sortStack([4, 1, 3, 2])); // [1,2,3,4]


function sortStack(stack) {
  return stack.sort();
}

console.log(sortStack([4, 1, 3, 2])); // [1,2,3,4]

function sortStack(stack) {
  let temp = [];

  while (stack.length) {
    let curr = stack.pop();
    while (temp.length && temp[temp.length - 1] > curr) {
      stack.push(temp.pop());
    }
    temp.push(curr);
  }
  return temp;
}

console.log(sortStack([4, 1, 3, 2])); // [1,2,3,4]

convert string to arry 

let str = "hello world";
let arr= str.split("");
console.log(arr);

let str = "hello world";
let arr= Array.from(str);
console.log(arr);

let str= "hello world";
let arr=[];
for(let i =0; i<str.length; i++){
  arr[i]=str[i];

}
console.log(arr);

let arr = ["JS", "is", "easy"];
let str= arr.join(" ");
console.log(str);

reverse string
let str = "javascript";

let result= str.split("");

result = result.reverse();
result = result.join("");

console.log('"'+result+'"');

let str = "javascript";
let result = "";
for(let i = str.length-1; i>=0; i--){
    result += str[i];
}
console.log(result);

check palandrome

let str = "madam";
if(str === str.split("").reverse().join("")){
  console.log("palandrome");
}

let str = "madam";
for(let i =0; i<=str.length; i++){
  for(let j = str.length-1; j>=0; j--){
    if(str[i] === str[j]){
      console.log("palandrome");
    }
  }
}
let str = "madam";
let isPalandrome = true;
for(let i =0; i<=str.length; i++){
  if(str[i] !== str[str.length-1-i]){
    isPalandrome = false;
    break;
  }
}
if(isPalandrome){
  console.log("palandrome");
} else{
  console.log("not palandrome");
}

let str = "aabbccdeeFF";
let empt = "";

for (let i = 0; i < str.length; i++) {
  let found = false;

  for (let j = 0; j < empt.length; j++) {
    if (empt[j] === str[i]) {
      found = true;
      break;
    }
  }

  if (!found) {
    empt += str[i];
  }
}

console.log(empt); // "abcd"

let sentence = "hello world";
let words = sentence.split(" ");
let result = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let capitalWord = word[0].toUpperCase()+word.slice(1);
  result.push(capitalWord);
}

console.log(result); // "Hello World"

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


let num=15,fact=1;
for(let i=1;i<=num;i++) 
  fact*=i;
console.log(fact);

let a =0;
let b =1;
let n = 10;

for(let i=1;i<=n;i++){
 [a+b]= [b,a+b]

}

shift zero to end


let a = [1,2,3,0,11,5,0,5];
let result = [];
let alength = 0;
for(let i=0; i<a.length;i++){
  if(a[i]!== 0){
    result.push(a[i]);
  }
}
 alength = a.length -result.length;
for(let j=0; j<alength;j++){
  result.push(0)
}
console.log(result)

let mat=[[1,2,3],[4,5,6]], t=[];
for(let i=0;i<mat[0].length;i++){
  t[i]=[];
  for(let j=0;j<mat.length;j++) t[i][j]=mat[j][i];
}
console.log(t);

let arr = [1,2,3]



for(let i =0; i<arr.length; i++)
{
  let newar= [];
  for(let j=i;j<arr.length;j++){
    newar.push(arr[i])
    console.log(newar)
  }

}

let n =5;


for(let i=1;i<=n;i++  ){
  let row="";
  for(let s=1;s<=n-i;s++  ){
    row+=" ";
  }
  for(let j=1;j<=2*i-1;j++){
    row+="*";
  }
  console.log(row)
}
for(let i=n-1;i>=1;i--){
  let row="";
  for(let s =1;s<=n-i;s++){
    row+=" ";
  }
  for(let j=1;j<=2*i-1;j++){
    row+="*";
  }
  console.log(row)
}
let n=5;
for(let i=1;i<=n;i++){
  let row="";

  for(let s=1;s<=n-i;s++){
    row+=" ";
  }
  for(j=1;j<=2*i-1;j++){
    row+="*"
  }
  console.log(row)
}
for(let i =n;i>=1;i--){
  let row="";
  for(let s=1 ; s<=n-i;s++){
    row+=" ";
  }
  for(let j=1;j<=2*i-1;j++){
    row+="*";
  }
  console.log(row)
}

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    document.write(i * j + "&nbsp;&nbsp;");
  }
  document.write("<br>");
}
let btn = document.getElementById("bt")
btn.addEventListener("click", function() {
    console.log("btn clicked");
});
let input = document.getElementById("inp");
    input.addEventListener("keydown",function(x){
        if(x.key == 'Enter'){
            alert("enter")
        }
    });

    let grand = document.getElementById("grand")
    grand.addEventListener("click",function(){
        alert("grand clicked")
    })

    let parent = document.getElementById("parent")
    parent.addEventListener("click",function(){
        
        alert("parent clicked")
    })
    let child = document.getElementById("child")
    child.addEventListener("click",function(e){
        alert("child clicked")
        e.stopPropagation()
    })


    let list = document.getElementById("list")
    let btn = document.getElementById("btn")

    btn.addEventListener("click",function(){
        let li = document.createElement("li")
        li.innerText="hello"
        list.append(li);
    })

    list.addEventListener("click",(e)=>{
        if(e.target.tagName === "LI")
        {
            alert("adsf")
        }
    })



