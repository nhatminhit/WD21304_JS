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