function Category(id,name){
    this.id = id; // this.id là thuộc tính nằm bên trong đối tượng sẽ được tạo ra
    // id là giá trị bàn truyền vào khi gọi hàm
    // nếu ko có this thì id = id, JS hiểu lầm là bạn đang gán biến cho chính nó chứ ko phải đang lưu trữ vào đối tượng
    this.name = name;
    this.info = function(){
        console.log(`ID: ${this.id} - Name: ${this.name}`);
    }
}
let category1 = new Category(1,"laptop");
category1.info(); // ID: 1 - Name: laptop
let category2 = new Category(2,"phone");
category2.info(); // ID: 2 - Name: phone


// bài 2:
class Product{
    constructor(name,price,description,quantity){
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }
    // a. Tính giá tiền sau khi giảm X%
    getDiscountPrice(percent){
        return this.price * (1-percent/100);
    }
    // b. Tăng/ giảm số lượng sản phẩm
    updateQuantity(amount){
        this.quantity += amount; //cộng hoặc trừ số lượng tuỳ vào giá trị amount truyền vào
        if(this.quantity < 0){
            this.quantity = 0; // đảm bảo số lượng không âm
        }
    }
    //c. kiểm tra hàng còn hay hết
    kiemTraHangCon(){
        return this.quantity > 0;
    }
    //d. Lấy thông tin chi tiết
    getInfo(){
        return `Name: ${this.name}\nPrice: ${this.price}\nDescription: ${this.description}\nQuantity: ${this.quantity}`;
    }
    // e. Tính tổng giá trị tồn kho
    getTongConLai(){
        return this.price * this.quantity;
    }
}
const p1 = new Product("Ip17",2000000,"Điện thoại mới nhất của Apple",10);
//a 
console.log(p1.getDiscountPrice(10));
//b
p1.updateQuantity(3);
console.log(p1.quantity); // 13
//C
console.log(p1.kiemTraHangCon()); // true
//D
console.log(p1.getInfo());
//E
console.log(p1.getTongConLai()); // 26000000

// chưa dùng constructor
class Student{
    name;
    age;
}
const student1 = new Student();
student1.name = "Nguyễn Văn A";
student1.age = "18";
console.log(student1);
//dùng constructor: hàm khởi tạo chạy sau khi tạo obj
class Student2{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
const s2 = new Student2("Nguyễn Văn B",20);
console.log(s2);

// khi nào thì nên dùng oop thay vì funtion thuần
// dùng khi bạn có đối tượng + trạng thái + hành vi
// ví dụ : User(name, email, login, logout)
// khi nào thì dùng funtion thuần
// dùng khi chỉ cần xử lí logic đơn giản, ko cần trạng thái lâu dài
// ví dụ: tính toán, xử lí chuỗi hoặc dữ liệu


// bài toán thực tế: tạo name và hàm xử lí login bằng 2 cách
// dùng funtion
function createName(name){
    return {name};
}
function login(user){
    console.log(user.name+" đã login thành công");
}
const s1 = createName("An");
login(s1);
// dùng oop
class User{
    constructor(name){
        this.name = name;
    }
    login(){
        console.log(this.name+ " đã login thành công")
    }
}
const s3 = new User("Bình");
s3.login();
// funtion để chỉ xử lí
// oop thì chỉ cần có đối tượng
 

// bài toán về getter và setter
//tạo class Product có name và price
// yêu cầu: ko cho phép price < 0
// khi lấy price thì  format thành dạng "1000VNĐ"
// có phương thức discount để giảm giá
class Product2{
    constructor(name,price){
        this.name = name;
        this._price = price; // biến thật được ẩn đi để ko cho truy cập trực tiếp
    }
    //getter
    get price(){
        return this._price + "VNĐ";
    }
    //setter
    set price(newPrice){
        if(newPrice<0){
            console.log("Giá trị ko hợp lệ");
            return;
        }
        this._price = newPrice;
    }
    discount(percent){
        if(percent <0 || percent > 100){
            console.log("Ko hợp lệ");
            return;
        }
        this._price = this._price *(1-percent/100);
    }
}
const p = new Product2("Laptop",2000);
console.log(p.price);
p.price = -500;
console.log(p.price);
p.discount(10);
console.log(p.price);


// bài 3 lab

class Cart{
    constructor(){
        // mảng lưu danh sách các sp trong giỏ hàng
        // mỗi phần tử sẽ có dạng{name,price,qty}
        this.products = [];
    }
    // a. Thêm sản phẩm vào giỏ hàng
    addProduct(product,qty){
        // kiểm tra sản phẩm đã tồn tại chưa
        const existing = this.products.find(p=>p.name === product.name);
        if(existing){
            existing.qty += qty;
        }else{
            this.products.push({
                name:product.name,
                price: product.price,
                qty : qty
            });
        }
    }
    // b. xoá sản phẩm theo tên
    removeProduct(productName){
        // lọc ra nững sản phẩm ko phải tên cần xoá
        this.products = this.products.filter(p => p.name !== productName);
    }
    // c. cập nhật số lượng sản phẩm
    updateProductQuantity(productName,qty){
        // tìm sản phẩm cần update
        const product = this.products.find(p => p.name === productName);
        if(product){
            product.qty = qty; // nếu tìm thấy thì cập nhật sl
        }
    }
    //d. Tính tổng tiền
    getTongTien(){
        // dùng reduce để cộng dồn
        return this.products.reduce((total,p) =>{
            return total+ p.price *p.qty;
        },0);
    }
    //e. Trả về danh sách thông tin giỏ hàng
    getGioHang(){
        return this.products;
    }
}
// demo
// tạo giỏ hàng
const cart = new Cart();
// thêm sản phẩm
cart.addProduct({name:"Táo",price:10000},2);
cart.addProduct({name:"Cam",price:15000},3);
// xoá sản phẩm
cart.removeProduct("Táo");
//cập nhật số lượng
cart.updateProductQuantity("Cam",5);
// tổng tiền
console.log(cart.getTongTien());
// in ra
console.log(cart.getGioHang());
