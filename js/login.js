/*const player = {
  name: "nico",
  points: 10,
  fat: true,
  sayName: function (playerName) {
    console.log("My name is " + playerName);
  },
};
console.log(player);
console.log(player.name);
console.log(player.points);
console.log(player["fat"]);
player.name = "wonjae";
player.points += 500;
player.fat = false;
player.money = 100000000000000;
console.log(player);
//let name;
//미리 변수 선언을 안해도 됨;
function sayHello(name, age) {
  console.log("hello my name is", name, ".", "my age is", age, ".");
  console.log("hello my name is", name + ".", "my age is", age + ".");
}
sayHello("nico", 13);
sayHello("wonjae", 18);
sayHello("lynn", 19);
sayHello("hyunjun", 18);
function plus(a, b) {
  console.log(a + b);
}
plus(8, 60);
player.sayName("Wonjae");
console.log(player.name);
console.log(player["name"]);
*/

/* calculator
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
console.log(calculator.plus(7, 3));
console.log(calculator.minus(7, 3));
console.log(calculator.times(7, 3));
console.log(calculator.divide(7, 3));
const title = document.querySelector("body .hello:nth-child(2) h1");
const titleA = document.querySelectorAll(".hello h1");
const title2 = document.getElementsByClassName("hello");
const title3 = document.getElementsByTagName("h1");
console.dir(title);
console.log(titleA);
console.log(title2);
console.log(title3);
function handleTitleClick() {
  title.style.color = "red";
}
*/

/*const h1 = document.querySelector("div.mytext h1");
function handleTitleClick() {
  // title.style.color = "blue";
  //js에서 style에 접근해서 color를 변경하는 방법
  if (h1.className === "active") {
    h1.className = "";
  } else {
    h1.className = "active";
  }
}
h1.addEventListener("click", handleTitleClick);*/

//h1.addEventListener("mouseenter", handleMouseEnter);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child");
const greeting = document.querySelector(".greeting");
const HIDDEN_CLASSNAME = "hide";
const USERNAME_KEY = "username";
const savedUserName = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUserName);
}

loginForm.addEventListener("submit", onLoginSubmit);
