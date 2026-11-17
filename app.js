// Alumno/a: TU NOMBRE Y APELLIDOS 
// Grupo: 2.º DAW · UA4 Objetos 
console.log("app.js cargado");

const cafe = {
    nombre: "Café de especialidad",
    precio: 3.5,
    stock: 20,
};

console.log(cafe.nombre); 
console.log(cafe["precio"]);

cafe.categoria = "bebidas"; 
cafe.disponible = true; 

delete cafe.stock;

console.log(cafe);
console.log(cafe.stock);

cafe["origen del grano"] = "Colombia";
console.log(cafe["origen del grano"]);
// console.log(cafe[.origen del grano]);

const clave = "precio";
console.log(cafe[clave]);
console.log(cafe.clave);

const campo = "oferta"; 
const promo = { 
  [campo]: true, 
  ["descuento_" + 10]: 0.1, 
}; 
console.log(promo); 

function crearProducto(nombre, precio) { 
  return { nombre, precio, stock: 0 }; 
} 
  
const te = crearProducto("Té verde", 2.8); 
console.log(te);

const palabras = { for: 1, let: 2, return: 3 }; 
console.log(palabras.for + palabras.let + palabras.return); 
  
const numerico = { 0: "cero" }; 
console.log(numerico["0"], numerico[0]);

console.log("precio" in cafe); 
console.log("stock" in cafe); 
console.log(cafe.stock === undefined); 
  
const raro = { nota: undefined }; 
console.log(raro.nota === undefined); 
console.log("nota" in raro); 

for (const prop in cafe) { 
  console.log(prop + " → " + cafe[prop]); 
} 

const prefijos = { 
  "49": "Alemania", "41": "Suiza", "44": "Reino Unido", "1": "EEUU", 
}; 
for (const p in prefijos) { 
  console.log(p); 
}

const prefijos2 = { 
  "+49": "Alemania", "+41": "Suiza", "+44": "Reino Unido", "+1": "EEUU", 
}; 
for (const p in prefijos2) { 
  console.log(p, +p); 
}

cafe.proveedor = { 
  nombre: "Finca La Esperanza", 
  contacto: { email: "info@laesperanza.example", telefono: "600123123" }, 
}; 
  
console.log(cafe.proveedor.contacto.email); 
console.log(cafe.proveedor["nombre"]); 
  
console.log(cafe.envio); 
try { 
  console.log(cafe.envio.coste); 
} catch (e) { 
  console.log(e.name); 
} 
console.log(cafe.envio?.coste); 
console.log(cafe.proveedor?.contacto?.telefono);