export class Product {
  //   static id = 20;
  constructor(title, image, price, category, raiting) {
    this.title = title;
    this.image = image;
    this.category = category;
    this.price = price;
    this.raiting = raiting;
    this.id = Date.now();
    // this.id = ++Product.id;
  }
}
