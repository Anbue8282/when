var a = {};
console.log(typeof a);

var b = null && true;

var c = a || false;
console.log(a);
console.log(b);
console.log(ac;



//de    quy
function dequy(num,res) {
    // kiem tra th sai
    if (num ==0){
        return res;
    }
    //de quy
    res *=num
    console.table({res:res,num:num});
    return dequy(num-1,res);
    
}

//giai thua
var n=5;
var result =2
for (let index = 1; index <= n; index++) {
    result*=index;

    
}
console.log(result);
dequy(n,1);

