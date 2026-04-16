function chonLoaiVe(){
    let loai = document.getElementById("loaiVe");
    let giaVe = document.getElementById("giaVe");
    giaVe.value = loai.value;
    tinhTongTien();
}
function chonNhan(radio){
    let phi = document.getElementById("phi");
    phi.value = radio.value;
    tinhTongTien();
}
function tinhTongTien(){
    let gia = Number(document.getElementById("giaVe").value);
    let sl = Number(document.getElementById("soLuong").value);
    let phiShip = Number(document.getElementById("phi").value);
    if(!gia||!sl||sl<0){
        document.getElementById("tongTien").value = "";
        return;
    }
    let tong = (gia* sl) +  phiShip;
    document.getElementById("tongTien").value = tong.toLocaleString()+"VND";
}
function datVe(){
    let ten = document.getElementById("ten").value.trim();
    let gia = Number(document.getElementById("giaVe").value);
    let sl = Number(document.getElementById("soLuong").value);
    let err = false;
    document.getElementById("errTen").innerText = "";
    document.getElementById("errLoai").innerText = "";
    document.getElementById("errSL").innerText = "";
    if(ten === ""){
        document.getElementById("errTen").innerText = "Vui Lòng Nhập Tên";
        err = true;
    }
    if(gia === 0){
        document.getElementById("errLoai").innerText = "Chọn Loại Vé";
        err = true;
    }
    if(sl<=0){
        document.getElementById("errSL").innerText = "Số lượng phải lớn hơn 0";
        err = true;
    }
    if(err) return false;
    alert("Đặt vé thành công");
    return true;
}