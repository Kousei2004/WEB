function checkLoginEmail() { 
    var email = document.getElementById('useremail'); 
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email.value)) { 
             alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
             email.focus(); 
             return false; 
    }
    return true;
}
function checkReEmail() { 
    var email1 = document.getElementById('useremail1'); 
    var filter1= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter1.test(email1.value)) { 
             alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
             email1.focus(); 
             return false; 
    }
    return true;
}
$(document).ready(function() {
    $(".login").submit(function() {
    let useremail = $("#useremail").val();
    let password = $("#password").val();
    if (useremail == "") {
    alert("Bạn chưa nhập email");
    document.getElementById("useremail").focus()
    return false;
    }else if(checkLoginEmail(useremail)){
    }

    if (password == "") {
    alert("Bạn chưa nhập mật khẩu");
    document.getElementById("password").focus()
    return false;
    }else if(password.length < 6 ){
    alert("Mật khẩu quá ngắn");
    document.getElementById("password").focus()
    return false;
    }
    return true;
    });
    });

//Registration

$(document).ready(function() {
    $(".registration").submit(function(){
    let useremail1 = $("#useremail1").val();
    let password1 = $("#password1").val();
    let password2 = $("#password2").val();

    if (useremail1 == "") {
    alert("Bạn chưa nhập email");
    document.getElementById("useremail1").focus()
    return false;
    }else if(checkReEmail()){
    }

    if(password1 == "" || password2 == "") {
    alert("Bạn chưa nhập đầy đủ hai mật khẩu");
    document.getElementById("password1").focus()
    return false;
    }else if(password1 != password2){
    alert("Hai mật khẩu không khớp");
    document.getElementById("password1").focus()
    return false;
    }else if(password1.length < 6 || password2.length <6){
    alert("Cả Hai Mật khẩu quá ngắn");
    document.getElementById("password1").focus()
    return false;
    }
    return true;
    });
    });