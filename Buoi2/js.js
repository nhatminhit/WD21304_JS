// kiểm tra số chẵn hoặc số lẻ
// let x = Number(prompt("Nhập số cần kiểm tra: "));
// if(x%2==0){
//     console.log("X là số chẵn");
// }else{
//     console.log("X là số lẻ");
// }


// tính tiền điện
// 0-50 số điện: 1800/ 1 số
// 51 -100 số: 2300/số
// 100so : 3000/số
// let soTien = 0;
// let soDien = Number(prompt("Nhập số điện"));
// if(soDien<=50){
//     soTien = soDien*1800;
// } else if(soDien<100){
//     soTien = 50*1800+(soDien-50)*2300;
// } else{
//     soTien = 50*1800+ 50*2300+(soDien-100)*3000;
// }
// console.log("số tiền cần phải trả là: "+soTien);


// nhập 2 số a và b và nhập toán tử để ra được tổng, hiệu, tích, thương sử dụng switch case
// let a = Number(prompt("Nhập số a: "));
// let b = Number(prompt("Nhập số b: "));
// let toanTu = prompt("Nhập toán tử: +, -, *, /");
// let kq;
// switch(toanTu){
//     case "+":
//         kq = a+b;
//         break;
//     case "-":
//         kq = a-b;
//         break;
//     case "*":
//         kq = a*b;
//         break;
//     case "/":
//         kq = a/b;
//         break;
//     default:
//         kq = "Phép toán ko hợp lệ";
// }
// console.log("Kết quả: "+kq);

// for: dùng khi lặp biết trước số lần lặp
// in ra số lần lặp từ 1 -5 
for(let i = 1; i <=5 ; i++){
    console.log("lần lặp: "+i);
}
// sử dụng while: lặp khi điều kiện còn đúng và ko biét trc số lần cho trước
let i = 1;
while(i<=5){
    console.log("số: "+i);
    i++;
}
// do while: khác while ở chỗ chạy ít nhất 1 lần rồi mới kiểm tra điều kiện
let k = 1;
do{
    console.log("Giá trị: "+k);
    k++;
} while(k<=5);

// for of (dùng để duyệt giá trị trong mảng)
let traiCay = ["Táo", "Cam","Quýt","Chuối","Bưởi"];
// lấy từng giá trị trong mảng và in ra
for(let qua of traiCay){
    console.log("Quả :"+qua);
}
// xử lí nếu là for
for(let m = 0;m<traiCay.length;m++){
    console.log(traiCay[m]);
}
// for in: dùng khi duyệt key trong obj
let student = {
    names:"Nguyễn Văn A",
    age: 20,
    major:"IT"
}
for(let key in student){
    console.log(key + ":" + student[key]);
}

// muốn in ra 
// name: Nguyen Văn A, age = 20, major = IT