var n =prompt("Nhập giá trị:");
var result=1;
for (let index = 1; index <= n; index++) {
    result*=index;
    
}
document.write("Giai thừa của "+ n +" " + "là"+" " + result);