class ProductManager {
  constructor() {
    this.productos = [];
  }

  getProducts() {
    return this.productos;
  }
  getElementbyId(id) {
    let producto = this.productos.find((producto) => producto.id === id);
    if (producto) {
      return producto;
    } else {
      return `El producto con número de ID "${id} no existe `;
    }
  }

  addProducts(titulo, descripcion, precio, code, stock) {
    if (!titulo || !descripcion || !precio || !code || !stock) {
      return console.log(`Todos los campos son obligatorios.`);
    }
  
    let codeExists = this.productos.some((producto) => producto.code === code);
    if (codeExists) {
      return console.log(`El código "${code}" ya está en uso.`);
    } else {
      let id = this.productos.length;
      let producto = {
        id: ++id,
        titulo: titulo,
        descripcion: descripcion,
        precio: precio,
        code: code,
        stock: stock,
      };
      this.productos.push(producto);
    }
    return this.productos;
  }

  
}
const productManager = new ProductManager();

productManager.addProducts(
  "fender stratocaster",
  "guitarra electrica",
  1299,
  "abc001",
  25
);
productManager.addProducts(
  "gibson SG",
  "guitarra electrica",
  2000,
  "abc002",
  25
);
productManager.addProducts(
  "yamaha pacifica",
  "guitarra electrica",
  99,
  "abc003",
  25
);
productManager.addProducts(
  "ibanez",
  "guitarra electrica",
  959,
  "abc003",
  25
);

console.log(productManager.getProducts());
console.log(productManager.getElementbyId(5));
