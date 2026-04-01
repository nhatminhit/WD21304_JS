let str = 'hello các bạn';
// hàm length để trả về độ dài của chuỗi
console.log("Độ dài của chuỗi là "+ str.length + " ký tự");
 //Tìm vị trí (index) xuất hiện đầu tiên của chuỗi con.
console.log("Vị trí của từ bạn là: "+str.indexOf("bạn"));
// kiểm tra xem chuỗi con có trong chuỗi mẹ hay ko
console.log(str.includes("các"));
// startswith() kiểm tra chuổi có bắt đầu bằng 1 giá trị nào đó ko
console.log(str.startsWith("hello"));
// endswith() kiểm tra chuỗi có kết thúc bằng 1 giá trị nào đó ko
console.log(str.endsWith("bạn"));

// xử lý khoảng trắng
let str2 = " NguyễnA Văn A        ";
// xoá đầu và cuối
console.log(str2.trim());
// xoá đầu
console.log(str2.trimStart());
// xoá cuối
console.log(str2.trimEnd());

// Biến đổi chuỗi
// Viết chữ Hoa
console.log(str2.toUpperCase());
// chữ thường
console.log(str2.toLowerCase());
// thay thế nhưng chỉ thay thế ở vị trí đầu tiên
console.log(str2.replace("A","B"));
// thay thế tất cả
console.log(str2.replaceAll("A","B"));

let str3 = "emyeutruongem";
// cắt chuỗi dùng substring(start,end): ko dùng số âm
console.log(str3.substring(5,11));
// cắt chuổi dùng slice => chỉ số âm = đếm từ cuối chuỗi
//- 1 sẽ kí tự cuối
console.log(str3.slice(-2));// em
console.log(str3.slice(-8,-2)); // truong

let str4 = "FPT POLYTECHNIC";
// tách chuỗi thành mảng
console.log(str4.split(" "));

let str5 = "ha";
// lặp lại chuỗi
console.log(str5.repeat(3));
let str6 = "Tôi yêu ";
// nối chuỗi
console.log(str6.concat(str4));
