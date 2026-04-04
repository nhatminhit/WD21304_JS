//BOM
//Tập hợp các đối tượng do trình duyệt cung cấp, cho phép JS giao tiếp trực tiếp và kiểm soát hành vi của trình duyệt ngoài phạm vi của HTML
// 1. đối tượng window là đối tượng cha cao nhất. Mọi biến toàn cục hoặc trong hàm JS đề là thuộc tính của window
// dùng để tương tác với người dùng qua các hộp thoại
// hiển thị thông báo
//alert("chào mừng bạn đến với FPT POLYTECHNIC");
// xác nhận hành động(trả về true hoặc false)
//let isDelete = confirm("Bạn có chắc chắn muốn xoá mục này?");
// if(isDelete){
//     console.log("Đã xoá thành công");
// }else{
//     console.log("Bạn đã huỷ");
// }
//prompt
//let userName = prompt("Vui lòng nhập tên của bạn");
// console.log("Xin chào: "+userName);
// 2. đối tượng location(điều hướng URL)
// dùng để lấy thông tin đường dẫn hoặc chuyển hướng trang
// lấy url hiện tại 
console.log("URL hiện tại: "+ location.href);
// chuyển hương sang trang khác(có lưu lịch sử)
function gotoDanTri(){
    location.assign("https://dantri.com.vn/");
}
// tải lại trang
function reloadPage(){
    location.reload();
}
// thay thế trang hiện tại(ko thể nhấn"back" để quay lại trang trước đó
// location.replace("https://vnexpress.net/");
//3. đối tượng history(lịch sử trình duyệt)
// dùng để truy cập vào danh sách các trang mà người dùng đã đi qua trong tab hiện tại
// lùi 1 trang
history.back();
// tiến 1 trang
history.forward();
// đi tới 1 trang cụ thể trong lịch sử(ví dụ lùi 2 trang)
history.go(-2);
// xem số lượng trang đã mở trang tab này
console.log("Số lượng tab đã mở trong lịch sử: "+history.length);
// 4.đối tượng navigator(trình duyệt)
// hữu ích khi bạn muốn kiểm tra xem người dùng có đang ở trạng thái onl hay ko hoặc họ dùng trình duyệt gì
// kiểm tra trạng thái onl
if(navigator.onLine){
    console.log("bạn đang trực tuyến");
}else{
    console.log("mất kết nối");
}
// lấy thông tin trình duyệt
console.log("Tên trình duyệt: "+navigator.userAgent);
// lấy vị trí địa lý của người dùng
navigator.geolocation.getCurrentPosition(position =>{
    console.log("Vĩ độ: "+position.coords.latitude);
    console.log("Kinh độ: "+position.coords.longitude);
})
// hàm time(quản lí thời gian)
// settimeout()
// chạy 1 lần sau 1 khoảng thời gian nhất định
setTimeout(()=>{
    console.log("Buổi học hôm nay rất vui");
},2000);
// setinterval()
// chạy lặp lại sau mỗi 1 khoảng thời gian nhất định
let count = 0;
let time = setInterval(()=>{
    count++;
    console.log("Thời gian trôi qua: "+count+" giây");
    // dừng chạy khi đủ 10 giây
    if(count === 10){
        clearInterval(time);
        console.log("Dừng đếm");
    }
},1000);
// 6.đối tượng screen
// dùng để kiểm tra độ phân giải
console.log("Chiều rộng màn hình: "+screen.width+"px");
console.log("Chiều dài màn hình: "+screen.height+"px");
console.log("Chiều cao màn hình: "+screen.availHeight+"px");


function openStudentInfo() {
    // 1. Thiết lập kích thước cửa sổ theo yêu cầu
    const width = 600;
    const height = 400;

    // 2. Tính toán vị trí để cửa sổ hiển thị ngay giữa màn hình
    // Sử dụng đối tượng screen để lấy kích thước màn hình vật lý
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    // 3. Mở cửa sổ mới với các tham số cấu hình
    const studentWindow = window.open(
        "", 
        "StudentInfo", 
        `width=${width},height=${height},top=${top},left=${left}`
    );

    // 4. Viết nội dung HTML vào cửa sổ mới
    studentWindow.document.write(`
        <html>
            <head>
                <title>Thông tin sinh viên</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
                    h2 { color: #2c3e50; text-align: center; }
                    .info-container { border: 1px solid #ddd; padding: 15px; border-radius: 8px; }
                    p { margin: 10px 0; }
                    strong { color: #2980b9; }
                </style>
            </head>
            <body>
                <h2>THÔNG TIN SINH VIÊN</h2>
                <div class="info-container">
                    <p><strong>MSSV:</strong> PS12345</p>
                    <p><strong>Họ tên:</strong> Nguyễn Văn A</p>
                    <p><strong>Ngành học:</strong> Lập trình Web</p>
                    <p><strong>Lớp học:</strong> WD18301</p>
                </div>
                <button onclick="window.close()" style="margin-top:20px; cursor:pointer;">Đóng cửa sổ</button>
            </body>
        </html>
    `);

    // 5. Đóng luồng ghi để trình duyệt hoàn tất hiển thị
    studentWindow.document.close();
}
