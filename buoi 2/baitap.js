//Bai1: Viet ham tinh chu vi va dien tich hin chu nhat:
// param : w,h
// return obj {
//     w:w,
//     h: h,
//     cv: ...;
//     dt: ...;
// }
let cv=0;
let dt=0;
function hinhchunhat(cd , cr){
        return {
            cd: cd,
            cr:cr,
            cv:((cd+cr)*2),
            dt: cd*cr,
        };

}
// aroư function
const objhcn = (w,h)=> new Object({w:w,h:h,cv:(w+h)*2,dt:w*h});
console.log(hinhchunhat(6,5))


console.log(objhcn(6,5))

//deu tra ve obj 
const a = new Number(12);
console.log(typeof null);