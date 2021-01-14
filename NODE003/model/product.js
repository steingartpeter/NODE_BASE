const db = require("../dbse");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    console.log("SAVING ...");
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products;");
    //   .then((result) => {
    //     console.log("RESULT-0:");
    //     console.log(result[0]);
    //     console.log("RESULT-1:");
    //     console.log(result[1]);
    //   })
    //   .catch((err) => {
    //     console.log("ERR:");
    //     console.log(err);
    //   });
  }

  static findById(id, cb) {}
};
