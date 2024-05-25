// // Tao data 
// var Obj1 = {
//     name: "Nguyen Van B",
//     age: 26,

// }
// var Obj2 = {
//     name: "Co Lan Phong",
//     age: 22,

// }
// var Obj3 = {
//     name: "Tieu Viem",
//     age: 23,

// }
// var Obj4 = {
//     name: "Lieu Nhu Yen",
//     age: 24,

// }
// var Obj5 = {
//     name: "Ngon Nhat Tri",
//     age: 25,

// }

// const data_list = [Obj1,Obj2,Obj3,Obj4,Obj5];

// function getRequest(){
//     const request = prompt("Nhap tu can tim kiem")
//     return request.trim().toLowerCase();

// }

// function searchDataByReq(req){
//     let result_list=[];
//     data_list.map((object) => {
//         for (const key in object) {
//             if (object[key].toString().toLowerCase().indexOf(req)!=-1){
//                 result_list.push(object);
//             }
       
//         }

//     });
//     return result_list

// }

// function createHTMLCode(list){
//     const list_container = document.querySelector("#data-list");
//     list.forEach(element => {
//         list_container.innerHTML += `<li>${JSON.stringify(element)}</li>`;
        
//     });
// }
// createHTMLCode(searchDataByReq(getRequest()));

// while -------------------------------------------------------------------------------------
// Tien to prefix , hau to posfix

// x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
// ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
// x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
// --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảm
// let a=10;
// console.log(++a);
// console.log(a++);

//cac chan co it nhat 1 lan thuc hien lenh trong do
// let i = 0;
// do {
//     ++i;

// }while (i<5);
// console.log(i);

// //** 6 kieu  du lieu sau khi converrt => boolean (con lai deu la true)
//  * 0
// * false
// * chuoi rong 
// * underline 
// * nUll
// * NaN
//  */
// let userInput = "";
// while (!userInput) {
//     userInput = Number.parseInt(prompt("Nhap tuoi"));
//     // kiem tra so nguyen va so duong
//     if(Number.isInteger(userInput)&& Number.parseInt(userInput)>0){
//         document.write(userInput);
//         break;

//     } else{
//         userInput='';
     
//     }
//}
