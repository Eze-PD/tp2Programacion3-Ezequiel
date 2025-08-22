const fs = require('fs');

// Import para usar fetch en CommonJS
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const API_URL = 'https://fakestoreapi.com/products';
const FILE_PATH = './data.json';

//  FUNCIONES API 

async function getAllProducts() {
  const res = await fetch(API_URL);
  const data = await res.json();
  console.log('📦 Todos los productos obtenidos.');
  return data;
}

async function getLimitedProducts(limit) {
  const res = await fetch(`${API_URL}?limit=${limit}`);
  const data = await res.json();
  console.log(`📦 ${limit} productos obtenidos.`);
  return data;
}

async function addProduct(product) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  });
  const data = await res.json();
  console.log('✅ Producto agregado vía API:', data);
  return data;
}

// 
async function getProductById(id) {
  const res = await fetch(`${API_URL}/${id}`);

  if (!res.ok) {
    console.error(`❌ Error al obtener producto ID ${id}:`, res.status);
    return;
  }

  const text = await res.text();

  if (!text) {
    console.warn(`⚠️ Respuesta vacía para producto ID ${id}`);
    return;
  }

  const data = JSON.parse(text);
  console.log(`🔎 Producto ID ${id}:`, data);
  return data;
}

async function updateProduct(id, newData) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newData)
  });
  const data = await res.json();
  console.log(`✏️ Producto ID ${id} actualizado:`, data);
  return data;
}

async function deleteProduct(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  const data = await res.json();
  console.log(`🗑️ Producto ID ${id} eliminado:`, data);
  return data;
}

//  FILESYSTEM 

function saveToFile(data) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
  console.log('💾 Datos guardados en data.json');
}

function readJsonFile() {
  if (!fs.existsSync(FILE_PATH)) return [];

  const content = fs.readFileSync(FILE_PATH, 'utf8');
  if (!content.trim()) return [];

  return JSON.parse(content);
}

function addProductToFile(product) {
  let products = readJsonFile();
  products.push(product);
  fs.writeFileSync(FILE_PATH, JSON.stringify(products, null, 2));
  console.log('➕ Producto agregado al archivo local');
}

function deleteExpensiveProducts(maxPrice) {
  let products = readJsonFile();
  const filtered = products.filter(p => p.price <= maxPrice);
  fs.writeFileSync(FILE_PATH, JSON.stringify(filtered, null, 2));
  console.log(`💸 Productos con precio mayor a ${maxPrice} eliminados del archivo`);
}

//  MAIN 

async function main() {
  // Obtener y guardar productos limitados
  const limited = await getLimitedProducts(5);
  saveToFile(limited);

  // Agregar nuevo producto
  const newProduct = await addProduct({
    title: "Producto de prueba",
    price: 123.45,
    description: "Generado desde Node.js",
    image: "https://i.pravatar.cc",
    category: "electronics"
  });

  // Buscar producto agregado
  await getProductById(newProduct.id);

  // Modificar producto
  await updateProduct(newProduct.id, {
    title: "Producto actualizado",
    price: 199.99,
    description: "Actualizado desde el script",
    image: "https://i.pravatar.cc",
    category: "electronics"
  });

  // Eliminar el producto
  await deleteProduct(newProduct.id);

  // Agregar producto al archivo local
  addProductToFile({
    id: 999,
    title: "Producto local",
    price: 300,
    description: "Producto agregado al archivo local",
    category: "local",
    image: "https://i.pravatar.cc"
  });

  // Eliminar productos con precio mayor a 200
  deleteExpensiveProducts(200);
}

main();
