//store data in local storage (key, value)
localStorage.setItem("name", "mario");
localStorage.setItem("age", 50);

//get data from local storage
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(name, age);

//updating data
localStorage.setItem("name", "luigi");
//w/ dot notation
localStorage.age = "40";

name = localStorage.getItem("name");
console.log(name);
