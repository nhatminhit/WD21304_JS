// khai báo bảng
const hoaQua = ["cam", "quýt", "bưởi", "xoài", "dưa hấu"];
console.log(hoaQua);
const hoaQua2 = new Array("cam","Quýt");
console.log(hoaQua2);

// truy suất giá trị của mảng
console.log(hoaQua[4]);

// kiểm tra số lượng phần tử
console.log(hoaQua.length);

// duyệt mảng dùng for
for(let i = 0;i<hoaQua.length;i++){
    console.log(hoaQua[i]);
}
// duyệt mảng dùng for of
for(let item of hoaQua){
    console.log(item);
}
// duyệt mảng dùng for each
hoaQua.forEach(v =>{
    console.log(v);
});

// thêm phần tử vào cuối
hoaQua.push("chuối","mướp");
console.log(hoaQua);
// thêm phần tử vào đầu
hoaQua.unshift("Vú Sữa");
console.log(hoaQua);
// xoá phần tử cuối
hoaQua.pop();
console.log(hoaQua);
// xoá đầu
hoaQua.shift();
console.log(hoaQua);
// xoá ở giữa
hoaQua.splice(1,1);// số đầu tiên là vị trí bắt đầu, số t2 là số phần tử muốn cắt
console.log(hoaQua);


// khái niệm vè Object(obj)
// cách khai báo object 
// Cách 1
const personA = {
    fullName: "Nguyễn Văn A",
    age: 25,
    major:"CNTT"
};
console.log(personA);
// Cách 2
const personB = new Object();
personB.fullName = "Nguyễn Thị B";
personB.age = "30";
personB.major = "Sale";
console.log(personB);
// truy cập thông tin của đối tượng
console.log(personA.fullName);
// duyệt key của obj
for(let item in personA){
    console.log(item);
}
// duyệt giá trị của obj trong mảng
const students = [
  { fullName: "Nguyễn Văn A", age: 20, major: "Công nghệ thông tin" },
  { fullName: "Trần Thị B", age: 21, major: "Kinh tế" },
  { fullName: "Lê Văn C", age: 19, major: "Thiết kế đồ họa" }
];
students.forEach(s => console.log(s.fullName));