function register() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (username && email && password){
        localStorage.setItem('username',username);
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);
        document.write(username);
        document.write(email);
        document.write(password);





        alert("đăng ký thành công ");
    } else{
        alert("vui lòng điền đầy đủ thông tin ");

    }
    
}