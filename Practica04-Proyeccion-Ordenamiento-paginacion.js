db.productos.find({}, { _id: 0, sku: 1, nombre: 1, precio: 1 });

db.productos.find({}, { _id: 0, sku: 1, nombre: 1, categoria: 1, stock: 1 });

db.productos.find({ categoria: "Audio" }, { _id: 0, nombre: 1, precio: 1 });

db.productos.find({}, { etiquetas: 0 });

db.productos.find().sort({ precio: 1 });

db.productos.find().sort({ precio: -1 });

db.productos.find().sort({ stock: 1 });

db.productos.find().sort({ nombre: 1 });

db.productos.find().sort({ categoria: 1, precio: -1 });

db.productos.find().sort({ precio: -1 }).limit(5);

db.productos.find().sort({ precio: 1 }).limit(5);

db.productos.find().sort({ stock: 1 }).limit(10);

db.productos.find().sort({ stock: -1 }).limit(5);

db.productos.find({ categoria: "Audio" }).sort({ precio: -1 }).limit(3);

db.productos.find({ categoria: "Accesorios" }).sort({ precio: 1 }).limit(5);

db.productos.find().sort({ sku: 1 }).skip(0).limit(10);

db.productos.find().sort({ sku: 1 }).skip(10).limit(10);

db.productos.find().sort({ sku: 1 }).skip(30).limit(10);

db.productos.find({ categoria: "Computo" }, { _id: 0, sku: 1, nombre: 1, precio: 1 })
  .sort({ precio: -1 })
  .skip(0)
  .limit(5);

db.productos.find(
  { stock: { $gt: 0, $lte: 5 } },
  { _id: 0, sku: 1, nombre: 1, categoria: 1, stock: 1, precio: 1 }
)
.sort({ stock: 1, precio: -1 })
.limit(5);