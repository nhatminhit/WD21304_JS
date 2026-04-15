// bài 1
var img = [];
var index = 0;

for (var i = 0; i < 6; i++) {
    img[i] = new Image(); // khởi tạo đối tượng
    img[i].src = "img/" + i + ".JPG";
}

function previous() {
    index--;
    if (index < 0) {
        index = img.length - 1;
    }
    var anh = document.getElementById("display-img");
    anh.src = img[index].src;
}

function next() {
    index++;
    if (index >= img.length) {
        index = 0;
    }
    var anh = document.getElementById("display-img");
    anh.src = img[index].src;
}

function auto() {
    // lặp lại liên tục hàm next sau mỗi 1000ms
    t = setInterval(next, 1000);
}

function stopp() {
    clearInterval(t);
}

// bài 2
function kiemTra() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return false;
    }
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Vui lòng nhập đúng định dạng email");
        return false;
    }
    if (password.length < 6 || password.length > 12) {
        alert("Mật khẩu phải từ 6 đến 12 ký tự");
        return false;
    }
    alert("Đăng nhập thành công");
    return true;
}