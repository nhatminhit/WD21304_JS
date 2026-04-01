//1. ko tham số, có trả về giá trị
function ten(){
    return "Nguyễn Văn A";
}
console.log(ten());
//2. ko tham số, ko trả về giá trị
function sayHello(){
    console.log("Hello World");
}
sayHello();
//3. có tham số, 0 trả về giá trị
function sayHello2(name){
    console.log("Hello " + name);
}
sayHello2("Nguyễn Thị B");
//4. có tham số, có trả về giá trị
function sum(a,b){
    return a + b;
}
console.log(sum(2,3));

// nhập x = 5 tính x^2
function tinhBinhPhuong(x){
    return x*x;
} 
console.log(tinhBinhPhuong(5));
// arrow function
const binhPhuong = x => x*x;
console.log(binhPhuong(5));

const tong = (a,b) => a+b;
console.log(tong(4,5));

function tinhTienDien(soDien){
    if(soDien<=50){
        return 50*1800;
    }
    else if(soDien<=100){
        return 50*1800+(soDien-50)*2300;
    } else{
        return 50*1800+50*2300+(soDien-100)*3000;
    }
}
let soTien = tinhTienDien(150);
document.writeln("Số tiền điện cần phải thanh toán là:" + soTien);
const tinhLuong = (chucVu,ngayCong) => {
    let heSo = 0;
    if(chucVu == "intern"){
        heSo = 1;
    }else if(chucVu == "staff"){
        heSo = 1.5;
    }else if(chucVu == "senior"){
        heSo = 2;
    } else if(chucVu == "manager"){
        heSo = 3;
    }
    const luong = heSo*ngayCong*(5000000/24); 
    return luong;
}
document.writeln("Lương của nhân viên là: "+ tinhLuong("staff",24));
// hàm isNaN() kiểm tra xem giá trị có phải là số hay không
console.log(isNaN("abc")); // true sẽ là chữ ko phải là số  
console.log(isNaN(123)); // false sẽ là số      
console.log(Math.round(3.55));