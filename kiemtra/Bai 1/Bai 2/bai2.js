var n =prompt("nhập số tự nhiên n:");
function tamgiac(n){
    let line = '';
    for (let index = 1; index <= n.length; index++) {
        for (let i = 1; i <= 2*n-1; i++) {
            if (i===n-1*1||i===n+index-1||i===n){
                line+='*';
            }else{
            line+=' ';
            
        }
       
        }
        line+='\n';
    
    
    }
    console.log(line);

}
document.write(tamgiac(n));