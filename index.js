
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




 let inp = document.getElementById("inp");
  let para = document.getElementById("para");

  // Input event listener
  inp.addEventListener("input", function() {
    para.textContent = "sadf"+inp.value;
  });

  inp.addEventListener("input", function(){
    inp.classList.add("highlight")
  })

  // 3️⃣ Highlight on focus, remove on blur
  inp.addEventListener("focus", function() {
    inp.classList.add("highlight");
  });

  inp.addEventListener("blur", function() {
    inp.classList.remove("highlight");
  });
  
  

let form = document.getElementById("myForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let emailError = document.getElementById("emailError");

let form = document.getElementById("myForm")
let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let btnSubmit = document.getElementById("button")


form.addEventListener("submit",function(e){
  e.preventDefault();

  let isValid = true;

  if(nameInput.value.trim() === "" ){
    nameInput.style.border= "2px solid red";
    isValid = false;
  }
  else{
    nameInput.style.border = "2px solid green"
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailInput.style.border = "2px solid red"
    emailError.innerText = "invalid email";
    isValid=false

  }
  else{
    emailInput.style.border = "2px solid green"
    emailInput.innerText="";
  }

  if(isValid){
    alert("form submited")
  }

})

form.addEventListener("submit", function(e) {
  e.preventDefault(); // form submit rok do

  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameInput.style.border = "2px solid red";
    isValid = false;
  } else {
    nameInput.style.border = "2px solid green";
  }

  // Email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    emailError.innerText = "Invalid email address";
    emailInput.style.border = "2px solid red";
    isValid = false;
  } else {
    emailError.innerText = "";
    emailInput.style.border = "2px solid green";
  }

  // Final submit
  if (isValid) {
    alert("Form Submitted Successfully ✅");
    form.reset();
  }
});

  let form = document.getElementById("form")
  let input = document.getElementById("username")
  let count =  document.getElementById("count")
  let btnSubmit = document.getElementById("btnSubmit")
  let btnreset = document.getElementById("reset")
  let msg = document.getElementById("msg")

    input.addEventListener("focus",function(){
      input.style.border = "2px solid green"
    })

    input.addEventListener("blur",function(){
      input.style.border = "2px solid red"
    })
    input.addEventListener("input",function(){
      count.innerText = input.value.length+"characters";
    })

    form.addEventListener("submit",function(e){
      e.preventDefault();

      
        if(input.value.trim()=== ""){
          msg.style.border= "2px solid red "
          msg.innerText="pLEASE INTER TEXT"
        
        }
        
        else{
          msg.innerText="submited"
        }
      })

      form.addEventListener("reset",function(){
        msg.innerText=""
        count.innerText= "0 Count"


      })
    let btn = document.getElementById("btn")
    let ul = document.createElement("ul")
    let dv = document.getElementById("abc")
    
    btn.addEventListener("click",function(){
      dv.classList.toggle("bcd")
    })
    
    btn.addEventListener("click",function(){
     let li = document.createElement("li")
      dv.append(ul)
      ul.append(li)
      li.innerText="hello"
       li.innerText= "hello"
    div.append(li)
      
    })
    li.innerText= "hello"
    div.append(li)
      let btn = document.getElementById("btn")
      let abc = document.getElementById("abc")
      let  ul = document.createElement("ul")
      abc.append(ul)


      
      btn.addEventListener("click",function(){
      
      let li = document.createElement("li")
      li.innerText="first"
      let li2 = document.createElement("li")
      li2.innerText="second"
      let li3 = document.createElement("li")
      li3.innerText="third"


      ul.append(li)
      ul.append(li2)
      ul.append(li3)

        if(li2.nextElementSibling){
          li2.nextElementSibling.style.backgroundColor="yellow"
        }
         if(li2.previousElementSibling){
          li2.previousElementSibling.style.backgroundColor="yellow"
        }
      })


     let btn = document.getElementById("btn");
let ul = document.querySelector("ul"); // your existing ul

let seen = new Set();

btn.addEventListener("click", function() {
  // get all li elements inside ul
  let liElements = ul.querySelectorAll("li");

  liElements.forEach(li => {
    if (seen.has(li.innerText)) {
      li.remove(); // remove duplicates
    } else {
      seen.add(li.innerText); // mark text as seen
    }
  });
});

  let btn = document.getElementById("btn")
  let container = document.getElementById("container")

  btn.addEventListener("click",function(){
      let bt = document.createElement("button")
      bt.innerText="asdf"
      container.appendChild(bt)
  })
    container.addEventListener("click",function(e){
      if(e.target.tagName === "BUTTON"){
        alert("adf")
      }
    })




document.addEventListener("click", function (e) {

  // Sirf editable text par kaam karo
  if (e.target.classList.contains("editable")) {

    const textEl = e.target;
    const oldText = textEl.innerText;

    // Input create karo
    const input = document.createElement("input");
    input.type = "text";
    input.value = oldText;
    input.className = "edit-input";

    // Text ko input se replace karo
    textEl.replaceWith(input);
    input.focus();

    // Blur par save
    input.addEventListener("blur", function () {
      const newText = input.value.trim() || oldText;

      const p = document.createElement("p");
      p.className = "editable";
      p.innerText = newText;

      input.replaceWith(p);
    });
  }

});

 let edit = document.getElementById("editable");

edit.addEventListener("click", function (e) {

  let oldTextEl = e.target;
  let oldText = oldTextEl.innerText;

  let input = document.createElement("input");
  input.type = "text";
  input.value = oldText;

  oldTextEl.replaceWith(input);
  input.focus();

    // Save on blur (INSIDE click handler)
  input.addEventListener("blur", function () {
    let p = document.createElement("p");
    p.id = "editable";
    p.innerText = input.value.trim() || oldText;

    input.replaceWith(p);
  });


});


const list = document.getElementById("list");
let draggedItem = null;

// Drag start
list.addEventListener("dragstart", function (e) {
  if (e.target.tagName === "LI") {
    draggedItem = e.target;
    e.target.classList.add("dragging");
  }
});

// Drag end
list.addEventListener("dragend", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.remove("dragging");
    draggedItem = null;
  }
});

// Drag over (IMPORTANT)
list.addEventListener("dragover", function (e) {
  e.preventDefault(); // drop allow karta hai

  const target = e.target;
  if (target.tagName === "LI" && target !== draggedItem) {
    const rect = target.getBoundingClientRect();
    const offset = e.clientY - rect.top;

    if (offset > rect.height / 2) {
      target.after(draggedItem);
    } else {
      target.before(draggedItem);
    }
  }
});

let input = document.getElementById("todoInput");
let btn = document.getElementById("addBtn");
let list = document.getElementById("todoList");

// Add todo
btn.addEventListener("click", function () {
  let text = input.value.trim();
  if (text === "") return;

  let li = document.createElement("li");
  li.innerText = text;

  let delBtn = document.createElement("button");
  delBtn.innerText = "❌";

  delBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
});


let input = document.getElementById("todoInput")
let btn = document.getElementById("addBtn")
let list = document.getElementById("todoList")


btn.addEventListener("click",function(){
  let inputvalue = input.value.trim();

  let li = document.createElement("li")
  li.innerText= inputvalue;
  list.appendChild(li)

  let delBtn = document.createElement("button")
  delBtn.innerText = "❌";

  li.appendChild(delBtn)
  

  delBtn.addEventListener("click",function(){
    li.remove()
  })

})


function a(a,b){
  return b>a && (b-a) <= 6
}

console.log(a(1,5));
console.log(a(5,6));
console.log(a(5,1));
console.log(a(6,5));

ecommerce cart practise


let cartTotal = 8000;
let discount = 0;
  if(cartTotal > 10000){
  discount =  cartTotal * 20 / 100;
  }
  else if(cartTotal > 5000)
  {
   discount = cartTotal * 10 / 100;
  }

  document.write(cartTotal - discount)


Login attemp 3 limit
let blocked = false;
let attemp =0;
let password = 1234;

function login(inputPass){
    if(blocked){
        return "Session Time Out"
    }
    if(inputPass === password){
        return "Login SuccessFully"
    }
    else{
        attemp++;
        if(attemp === 3){
            blocked = true;
        }
        return "password wrong"
    }
}


console.log(login(12345));
console.log(login(12345));
console.log(login(12345));
console.log(login(1234));


ATM Balance Withdraw
let Balance =100000;
let dailyLimit = 25000;
let withdrawalAmount = 1000;

if(withdrawalAmount > dailyLimit){
    console.log("limite excceed")
}
else if(withdrawalAmount > Balance){
    console.log("amount not availble")
}
else{
    Balance = Balance - withdrawalAmount
    console.log(Balance)
}


function validateEmail(email) {
  if (
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") < email.lastIndexOf(".")
  ) {
    return "Valid Email";
  } else {
    return "Invalid Email";
  }
}

console.log(validateEmail("test@gmail.com"));



function checkPassword(pass) {
  if (pass.length >= 8 && pass.match(/[0-9]/)) {
    return "Strong Password";
  } else {
    return "Weak Password";
  }
}

console.log(checkPassword("abc12345"));



function cleanUsername(name) {
  return name.trim();
}

console.log(cleanUsername("   Muzammil Ali   "));




function searchItem(text, keyword) {
  text = text.toLowerCase();
  keyword = keyword.toLowerCase();

  if (text.includes(keyword)) {
    return "Match Found";
  } else {
    return "No Match";
  }
}

console.log(searchItem("Apple iPhone 15", "iphone"));


let input = document.getElementById("emailcheck");
let span = document.getElementById("span")
input.addEventListener("input",function(){
  let values =  input.value;
  if(values.includes("@")  &&  values.includes(".") && values.indexOf("@") < values.lastIndexOf(".")){
    span.innerText="@ include hay "
  }
})



  let btn = document.getElementById("add");
  let tablebody = document.getElementById("tbody")
  btn.addEventListener("click",function(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    tablebody.innerHTML += `
      <tr>
      <td>${name}</td>
      <td>${age}</td>
      <td>

        <button class="del">Delete </button>

      </td>
      </tr>
    `;

  })

    
    tablebody.addEventListener("click",function(e){
      if (e.target.classList.contains("del")) {
      e.target.closest("tr").remove();
      }
  });

let scores = {
  math: 85,
  eng: 78,
  cs: 92
};

document.writeln(Math.max(Object.values(scores)))

let users = [
  { name: "Ali", active: true },
  { name: "Ahmed", active: false },
  { name: "Sara", active: true }
];
let users = [
  { name: "Ali", active: true },
  { name: "Ahmed", active: false },
  { name: "Sara", active: true }
];

// Loop through array
for (let i = 0; i < users.length; i++) {
    if (users[i].active) {
        document.writeln(users[i].name + " is active<br>");
    }
}
let cart = {
  item: "Mobile",
  price: 50000,
  quantity: 2
};

// Total price calculate
let totalPrice = cart.price * cart.quantity;

document.writeln("Total Price: " + totalPrice);

abc={
  abcd : "adsf"
}

document.writeln(abc.abcd)

const counter = (function () {
  let value = 0;
  return {
    increment() { value++; },
    get() { return value; }
  };
})();

counter.increment();
let x = counter.get();
document.writeln(x)

