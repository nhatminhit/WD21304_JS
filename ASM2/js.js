function kiemtra(){
    // lấy toàn bộ giá trị từ các ô
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var sdt = document.getElementById("sdt").value;
    var us = document.getElementById("us").value;
    var pass = document.getElementById("pass").value;
    var repass = document.getElementById("repass").value;
    // kiểm tra radio đã được chọn hay chưa
    var radioChon = document.querySelector('input[name="source"]:checked')
    // ko được để trống tất cả các trường
    if(name == ""||email == ""||sdt == ""||us == ""||pass == ""|| repass == ""){
        alert("Mời bạn nhập đầy đủ thông tin");
        return false;
    }
    if(radioChon == null){
        alert("Mời bạn chọn vào ô bạn biết chúng tôi");
        return false;
    }
     // check số điện thoại phải là có 10 số và chữ số đầu = 0
    // dùng regex để kiểm tra
    let checkSdt =  /^0[0-9]{9}$/;
    // ^0 là bắt đầu bằng số 0
    // [0-9] là các kí tự tiếp theo phải từ 0 - 9
    // {9} phải có đúng 9 số đằng 
    // $ kết thúc chuỗi
    if(!checkSdt.test(sdt)){
        alert("Số điện thoại phải đầu từ 0 và có 10 số");
        return false;
    }
    if(us.length<8){
        alert("User nhỏ nhất phải có 8 kí tự");
        return false;
    }
    if(pass != repass){
        alert("Mật khẩu ko khớp");
        return false;
    }
    alert("Bạn đã đăng ký thành công");
    return true;
}