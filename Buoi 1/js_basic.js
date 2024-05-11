// JS CƠ BẢN
// - Nhập xuất dữ liệu --------------------------------
// - 6 hàm built-in thường dùng
// alert("Hello Word");
// confirm("Are you ok?");
// var a = prompt("How old are you?"); // string
// console.log(typeof(a));

// callback: hoãn việc thực thi lệnh
// function write(str) {
//     document.write(str)
// }
// setTimeout(function () {
//     write("Hello world!")
// }, 3000)


// var i = 0;
// var a= setInterval(function(){
//     i++;
//     console.log(i);
    
// }, 1000);
// //sau 10s dừng
// setTimeout(() => {
//     clearInterval(a);
// },10000);


// biến let const var
// var a=1; //global variable
// const pi = 3.14;//hang so
// // pi+=2; //error
// for (var index=0; index<3; index++){
//     console.log(index);

// }
// console.log(index); //loi ko tim thay bien

// comment -------------------------------
/* 
1. ghi chu
2. vo hieu hoa code
*/
//phep toan - logic - gan -...


// 1. Toan tu so hoc: Arithmetic (+-*/%//)
// var c = 10%2; // chia lấy phần dư
// console.log(c);
// var d = Math.floor(11/2);  //chia lay phan nguyen
// console.log(d);
// var luy_thua=3**2; // luy thua
// console.log(luy_thua);

// 2. Toan tu gan: Assignment (= -= += *= /= **=)
// var a = 1;
// a+=5; // a = a + 5;


// // 3. Toan tu so sanh: Comparison (< > == >= <=)
// if (a = 7) {
//     console.log(true); // gán a la 7
// }
// console.log(a);

// 4. Toan tu logic: Logical(|| && !)
// and 2 vế true => true 1 vế hoặc2 2 vế false => Faslse
// var m = 10<3 && 3>1//=> false
// //or 1 vế true ==> true 2 vế false => false
// var n =9<6 || 4>2 //=> True
// //not
// var z = m || !n && !m // =>

//if else
// const age = Number.parseInt( prompt("Nhập tuỏi"));
// if (age < 0){
//     document.write("You're not human");

// } else if (age<18){
//     document.write("You're a teen");

// } else if (age<60){
//     document.write("You're an adult");

// }  else if (age<100){
//     document.write("You're very old");

// }  else {
//     document.write("You're die ");

// } 


// funcitiomn - arow func -----------------------
// function sum1(x,y){
//     return x+y;
// }

// // arow func
// const sum = (x,y) => x+y
// console.log(sum(12,10));


//object ----------------------------------
// {} object , [] list , "" string, 12 number , 
// const student = {
//     name: "tue",
//     grade: 10,
// };


// // create a new property
// student.courses = ["jsb","jsa","jsi"]
// console.log(student);

// //read a property
// console.log(student.grade);

// //update 
// student.grade++;
// console.log(student.grade);

// //delete
// delete student.grade
// console.log(student)

// aray ... ----------------------------------------------
let list_1=[1,2,5,3,9,8,6];
let list_square = list_1.map((item)=> item**2);
console.table(list_square);

// for each
let list_over30 = new Array(); // khai bao ds rong
list_square.forEach((element) => {
    if (element > 30) {
      // add in list
      list_over30.push(element);
    }
  });
  console.table(list_over30);
  // cach rut gon => filter
  let list_over30_1 = list_square.filter((item) => item > 30);
  console.table(list_over30_1);
// update item in list
list_square[3] = 15;

// read list
for (let index = 0; index < list_square.length; index++) {
  console.log(index, list_square[index]);
}

// delete item in list
list_square.splice(3, 1);
list_square.pop(); // xoa phan tu cuoi