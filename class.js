//Declaring a Class
class Product {
    constructor(itemName,price,discount,productCode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
}

let Pencil = new Product('Pencil', 20, 2, 'P10');

//class expression
const Product1 = class Product {
    constructor(itemName,price,discount,productCode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
    get getDiscountValue(){
        return this.discount;
    }
    set setDiscountValue(value){
        this.discount = value;
    }
    DiscountValue(){
        return this.discount*this.price/100
    }
}

let Chair = new Product1('Chair', 499, 15, 'C10');

//Extending class
class Product2 {
    constructor(itemName){
        console.log('passed by furniture' + itemName);
        this.itemName = itemName;
    }
    getItemName(){
        return this.itemName + "is a product";
    }
}

class furniture extends Product{
constructor(itemName){
    super(itemName);
}
getItemName(){
    return this.itemName + "is a furniture";
}

}
let Book = new Product('Book');
let Table = new Product('chair');
