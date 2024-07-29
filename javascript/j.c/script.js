// let a = 1;
// let b = 5;
// console.log("a+b", a + b);
// console.log("a+b", a / b);

// let name = prompt("enter the number");
// if (name > 80 && name < 100) {
//   console.log(name, "A");
// } else if (name > 70 && name < 79) {
//   console.log(name, "B");
// } else if (name > 60 && name < 69) {
//   console.log(name, "C");
// } else if (name > 50 && name < 59) {
//   console.log(name, "D");
// } else if (name > 0 && name < 49) {
//   console.log(name, "F");
// }

// let student = {
//   name: "rahul kumar",
//   age: 20,
//   cgpa: 7.97,
//   ispass: true,
// };

// for (let key in student) {
//   console.log("key = ", key, " value = ", student[key]);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let game = 35;
// let username = prompt("enter the number");

// while (game != username) {
//   username = prompt("you entered teh wrong number");
//   break;
// }
// console.log("you have entered the righat numvber");

// let str = "striver god";
// let obj = {
//   item: " pen",
//   obect: 10,
// };
// let output = `${obj.item} is ${obj.obect}`;
// console.log(output);

// console.log(str.slice(1, 4));
// let strr = "crump";
// let sd = "NOW";
// let res = strr.concat(sd);
// console.log(res);

// console.log(strr.replace("c", "r"));

// console.log(strr.charAt(0));

//homework//
// let user = prompt("enter your full name");
// let len = user.length;
// let lenn = "@";
// let con = lenn.concat(user);
// let fcon = con.concat(len);
// console.log("your usrname should be ", fcon);

// let z = "@" + user + len;
// console.log(z);

// let cities = ["a", "b", "c", "D", "e"];
// for (city of cities) {
//   console.log(city.toUpperCase());
// }

// let average = [85, 97, 44, 37, 76, 60];
// let add = 0;
// for (let i = 0; i < average.length; i++) {
//   add = add + average[i];
// }
// let z = add / average.length;
// console.log(z);

// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }
// //after change//
// for (let i = 0; i < items.length; i++) {
//   items[i] = items[i] - (10 / 100) * items[i];
// }

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.splice(2, 3, 101, 101, 102, 1));
// console.log(arr);

// let companies = ["bloomberg", " Microsoft", "Uber", "Google", "IBM", "Netflix"];
// // .shift();
// // companies.slice(2, 0,companies "Ola");
// companies.push("Amazon");
// // console.log(y);

// const arrowsum = (a, b) => {
//   console.log(a * b);
// };

// function voow(string) {
//   console.log("a", "e", "i", "o", "u");
// }
// let s;
// let vow = voow(s);
// console.log(vow);

// function voew(s) {
//   let ans = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (
//       s[i] === "a" ||
//       s[i] === "e" ||
//       s[i] === "i" ||
//       s[i] === "o" ||
//       s[i] === "u"
//     ) {
//       ans++;
//     }
//   }
//   console.log(ans);
// }

// let s = ["h", "e", "l", "l", "o", "wS"];
// let vow = voew(s);
// // console.log(vow);

// let arr = ["H", "Y", "j", "k", "i"];
// arr.forEach((val, idx) => {
//   console.log(arr, idx);
// });

// let arr = [4, 5, 6, 7, 78, 8];
// arr.forEach((val, idx) => {
//   val = val * val;
//   console.log(val, idx);
// });

// let a = [1, 2, 3, 4, 5];
// a.map((val) => {
//   console.log(val);
// });

// let a = [1, 2, 3, 4, 5];
// a.filter((val) => {
//   let z = val % 2 === 0;
//   console.log(z);
// });

// let a = [1, 2, 3, 4, 5];
// let even = a.filter((val) => {
//   return val % 2 === 0;
//   //   console.log(z);
// });
// console.log(even);

// let arr = [1, 2, 3, 4, 5, 6];
// const output = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(output);

// let arr = [1, 2, 3, 4, 5, 6];
// const output = arr.reduce((res, curr) => {
//   return res > curr ? res : curr;
// });
// console.log(output);

// let students = [100, 34, 56, 89, 90, 56, 99, 98];

// let passed = students.filter((val) => {
//   if (val >= 90) {
//     return val;
//   }
// });
// console.log(passed);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const output = arr.reduce((rev, orev) => {
//   return rev * orev;
// });
// console.log(output);

// let n = prompt("what is the number of the integer");
// let arr = [];
// for (let i = 0; i < n; i++) {
//   arr[i - 1] = i;
// }

// const output = arr.reduce((rev, orev) => {
//   return rev * orev;
// });
// console.log(output);

// console.dir(document.body.childNodes[1]);
// console.dir(document.getElementById("heading"));
// console.dir(document.getElementsByClassName("head"));

// let jar = document.querySelector("div");
// console.dir(jar);

// let head = document.querySelector("h2");

// head.innerText = head.innerText + "From Apna College";
// console.dir(head.innerText);

// let hea = document.querySelectorAll(".box");
// let idx = 1;
// for (div of hea) {
//   div.innerText = "inner boy";
//   idx++;
// }

// let val = document.querySelector("p");
// console.log(val);
// // let vall = val.getAttribute("class", "newclass");
// // console.log(vall);
// val.style.backgroundColor = "green";

// let newbtn = document.createElement("button");
// newbtn.innerText = "click mee";
// console.log(newbtn);

// let div = document.querySelector("div");
// div.append(newbtn);

// let head = document.createElement("h1");
// head.innerText = " i t my new heading";

// document.querySelector("body").prepend(head);
// head.remove();
// let p = document.querySelector("p");
// p.remove();

// let butto = document.createElement("butto");
// butto.innerText = "Click Me";
// butto.style.color = "white";
// butto.style.backgroundColor = "red";
// document.querySelector("body").prepend(butto);
// // butto.style.textDecorationColor = "white";

// let para = document.querySelector("p");
//  para.setAttribute("class", "mum");
// para.classList.add("class", "mum");

// let acc = document.querySelector(".idd");
// acc.onclick = (e) => {
//   //   console.log("aa gye tamasha dekhne");
//   //   for (let i = 0; i < 26; i++) {
//   //     console.log(i);

//   console.log(e);
//   console.log(e.type);
// };

// let acc = document.querySelector(".yuup");
// acc.addEventListener("click", () => {
//   console.log("yes sir");
//   console.log(e);
//   console.log(e.type);
// });

// acc.addEventListener("click", () => {
//   console.log("yes sir2");
// });

// acc.addEventListener("click", () => {
//   console.log("yes sir 2222");
// });

// const handler1 = () => {
//   console.log("yes sir ===");
// };
// acc.addEventListener("click", handler1);

// acc.removeEventListener("click", handler1);

//beauty
// let but = document.querySelector("#lets");
// let bob = document.querySelector("body");
// let currmode = "Light";

// but.addEventListener("click", () => {
//   if (currmode === "Light") {
//     currmode = "Dark";
//     bob.classList.add("dark");
//     bob.classList.remove("light");
//   } else {
//     currmode = "Light";
//     bob.classList.add("light");
//     bob.classList.remove("dark");
//   }
//   console.log(currmode);
// });

// const student = {
//   fullName: "shradha khapra",
//   marks: 94.4,
//   printMarks: function () {
//     console.log(" marks = ", this.marks);
//   },
// };

// const employee = {
//   calcu() {
//     console.log("tax rate is 10%");
//   },
// };

// const employee1 = {
//   salary: 50000,
// };

// employee1.__proto__ = employee;

// class toyo {
//   constructor(BRAND) {
//     console.log("CREATING");
//     this.BRAND = BRAND;
//   }
//   start() {
//     console.log("start");
//   }

//   stop() {
//     console.log("stop");
//   }
//   setBrand(brand) {
//     this.brandName = brand;
//   }
//
// }

// let fortuner = new toyo("FORTUNER");
// fortuner.setBrand("fortuner");
// let lexus = new toyo();
// lexus.setBrand("lexus");

// class parent{
//   hello(){
//     console.log("hello");
//   }
// }

// class Child extends Parent {}

// let obj = new Child();

// class person {
//   constructor(name) {
//     console.log("enter the parent constructor");
//     this.species = "homo soa";
//     this.name = name;
//   }
//   eat() {
//     console.log("eat");
//   }

//   sleep() {
//     console.log("sleep");
//   }
// }

// class ENGINEER extends person {
//   constructor(name) {
//     console.log("enter teh child constructor");
//     super(name); //to invoke parent class consructor
//     // this.branch = branch;
//     console.log("exit teh child constructor");
//   }
//   work() {
//     super.eat();
//     console.log("solve problem , build something");
//   }
// }

// let aman = new ENGINEER("AMAN");

// ///IMPPP//
// let DATA = " so the ma";
// class user {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   viewData() {
//     console.log("website data", DATA);
//   }
// }

// class Admin extends user {
//   constructor(name, email) {
//     super(name, email);
//   }
//   editData() {
//     DATA = "some new VAlue";
//   }
// }
// let student_1 = new user("aman", " aman@gmail.com");
// let student_2 = new user("arjun", "arjun@gmail.com");

// let admin1 = new Admin("admin", "admin@gmail.com");

// setTimeout(() => {
//   console.log("hey hello");
// }, 5000);

// function sum(a, b) {
//   console.log(a + b);
// }

// function callbac(a, b, sumcallback) {
//   sumcallback(a, b);
// }

// callbac(1, 2, sum);

// const hello = () => {
//   console.log("helloo");
// };

// setTimeout(hello, 8000);

// function getdata(data) {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log("data", data);
//     }, 2000);
//   }
// }

// getData(1, () => {
//   getData(2, () => {
//     //callbeck hell;
//     getData(3);
//   });
// });

//promises

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       // resolve("success");
//       reject("error");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 6000);
//   });
// }

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("succes");
//     reject("error");
//   });
// };

// let promise = getPromise();
// promise.then(() => {
//   console.log("promise fulfilled");
// });

// promise.catch(() => {
//   console.log("rejected");
// });

// function asynFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some datra");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asynFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some datra");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data");
// let p1 = asynFunc();
// p1.then((res) => {
//   console.log("fetching data2");
//   let p2 = asynFunc1();
//   p2.then((res) => {});
// });

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then(() => {
//     console.log(res);
//   });
// });

// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherdata() {
//   await api();
// }

// function getdata(dataid) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataid);
//       resolve("success");
//     }, 2000);
//   });
// }

// async function getalldata() {
//   await getdata(1);
//   await getdata(4);
//   await api();
// }

//iojmppp

const URL = "https://cat-fact.herokuapp.com/facts";
const btn = document.querySelector("#btn");

const factpara = document.querySelector("#fact");

const getFacts = async () => {
  console.log("getting data........");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  factpara.innerText = data[1].text;
};
btn.addEventListener("click", getFacts);
