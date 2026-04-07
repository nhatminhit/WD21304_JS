//truy xuất phần tử trong DOM
//1. getElementByID
const title = document.getElementById("title");
console.log(title);
// muốn lấy thông tin hiển thị trong thẻ thì .innerText
console.log(title.innerText);
//2. getElementByClassName
const description = document.getElementsByClassName("description");
console.log(description[0].innerText);
//3. getElementByTagName
const tieuDe = document.getElementsByTagName("h2");
console.log(tieuDe[0].innerText);
// vậy innerText/innerHTML để in ra nội dung mà web hiển thị
function changeContent(){
    title.innerText = "Trang Chủ đã bị hack";
    description[0].innerText = "ahihi";
}
function changeStyle(){
    // thêm hoặc xoá class highlight trong css
    title.classList.toggle('highlight');
    // thay đổi style trực tiếp qua thuộc tính style của Object
    document.body.style.backgroundColor = "red";
}
const listContainer = document.getElementById("list");
const inputUser = document.getElementById("userInput");
//tạo và chèn phần tử mới
function addItem(){
    const text = inputUser.value;
    if(text === ""){
        alert("Mời bạn nhập thông tin");
        return;
    }
    // tạo 1 thẻ div mới
    const newNode = document.createElement("div");
    newNode.className = "item";
    newNode.textContent = text;
    // chèn vào cuối container "list"
    listContainer.appendChild(newNode);
    // xoá ô trống sau khi thêm
    inputUser.value = "";
}
function removeItem(){
    const items = document.getElementsByClassName("item");
    if(items.length>0){
        // xoá phần tử cuối cùng trong danh sách được lấy
        items[items.length-1].remove();
    }else{
        alert("Ko còn gì để xoá");
    }

}