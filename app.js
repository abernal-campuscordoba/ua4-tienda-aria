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

const inventario = { 
  C01: { nombre: "Café", precio: 3.5, stock: 20 }, 
  T01: { nombre: "Tostada", precio: 2.2, stock: 15 }, 
  Z01: { nombre: "Zumo de naranja", precio: 2.5, stock: 10 }, 
}; 
inventario.B01 = { nombre: "Bocadillo", precio: 4.5, stock: 8 }; 
  
let valorTotal = 0; 
for (const codigo in inventario) { 
  const prod = inventario[codigo]; 
  console.log(codigo + ": " + prod.nombre + " (" + prod.stock + " uds)"); 
  valorTotal += prod.precio * prod.stock; 
} 
console.log("Valor del inventario: " + valorTotal.toFixed(2) + " €"); 
console.log("T01" in inventario, "X99" in inventario); 

// ===== PARTE 2 · Referencias y copia ===== 
let mensaje = "Hola"; 
let copiaMensaje = mensaje; 
copiaMensaje = "Adiós"; 
console.log(mensaje, copiaMensaje); 
  
const original = { nombre: "Croissant", precio: 1.8 }; 
const alias = original; 
alias.precio = 2.5; 
console.log(original.precio); 
console.log(original === alias); 
  
const gemelo = { nombre: "Croissant", precio: 2.5 }; 
console.log(original === gemelo);

const clon = Object.assign({}, original); 
clon.precio = 1; 
console.log(original.precio, clon.precio); 
  
const clonManual = {}; 
for (const k in original) { 
  clonManual[k] = original[k]; 
} 
clonManual.nombre = "Napolitana"; 
console.log(original.nombre, clonManual.nombre);

const pedido = { 
  cliente: "Ana", 
  direccion: { ciudad: "Valencia", cp: "46001" }, 
}; 
  
const superficial = Object.assign({}, pedido); 
superficial.direccion.ciudad = "Madrid"; 
console.log(pedido.direccion.ciudad); 
  
const profunda = structuredClone(pedido); 
profunda.direccion.ciudad = "Sevilla"; 
console.log(pedido.direccion.ciudad); 
console.log(profunda.direccion.ciudad);

function rebajar(producto, porcentaje) { 
  producto.precio = producto.precio * (1 - porcentaje / 100); 
} 
  
function conRebaja(producto, porcentaje) { 
  const copia = Object.assign({}, producto); 
  copia.precio = copia.precio * (1 - porcentaje / 100); 
  return copia; 
} 
  
function reasignar(producto) { 
  producto = { nombre: "Otro", precio: 0 }; 
} 
  
const bocata = { nombre: "Bocadillo", precio: 4 }; 
const oferta = conRebaja(bocata, 50); 
console.log(bocata.precio, oferta.precio); 
  
rebajar(bocata, 25); 
console.log(bocata.precio); 
  
reasignar(bocata); 
console.log(bocata.nombre);


// ===== PARTE 3 · Métodos y this ===== 
const tienda = { 
  nombre: "Cafetería Aria", 
  abierta: false, 
  abrir() { 
    this.abierta = true; 
    console.log(this.nombre + " abre sus puertas"); 
  }, 
  estado() { 
    return this.nombre + (this.abierta ? " está abierta" : " está cerrada"); 
  }, 
}; 
  
console.log(tienda.estado()); 
tienda.abrir(); 
console.log(tienda.estado());


function presentar() { 
  console.log("Soy " + this.nombre); 
} 
  
const sucursal1 = { nombre: "Aria Centro", presentar }; 
const sucursal2 = { nombre: "Aria Playa", presentar }; 
  
sucursal1.presentar(); 
sucursal2.presentar(); 
sucursal2["presentar"](); 


let local = { 
  nombre: "Aria Norte", 
  saludarMal() { 
    console.log("Hola desde " + local.nombre); 
  }, 
  saludarBien() { 
    console.log("Hola desde " + this.nombre); 
  }, 
}; 
  
let otro = local; 
local = null; 
  
try { 
  otro.saludarMal(); 
} catch (e) { 
  console.log("Error: " + e.name); 
} 
otro.saludarBien(); 

const extraida = sucursal1.presentar; 
extraida(); 
  
const fijada = presentar.bind(sucursal1); 
fijada(); 
  
const prestada = sucursal1.presentar.bind(sucursal2); 
prestada();