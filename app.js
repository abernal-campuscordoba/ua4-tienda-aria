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

const cafeteria = { 
  nombre: "Aria", 
  conNormal() { 
    const flecha = () => console.log("dentro: " + this.nombre); 
    flecha(); 
  }, 
  conFlecha: () => console.log("método flecha: " + this.nombre), 
}; 
  
cafeteria.conNormal(); 
cafeteria.conFlecha();

const contador = { 
  valor: 0, 
  sumar(n) { 
    this.valor += n; 
    return this; 
  }, 
  restar(n) { 
    this.valor -= n; 
    return this; 
  }, 
  mostrar() { 
    console.log("Valor: " + this.valor); 
    return this; 
  }, 
}; 
  
contador.sumar(10).restar(3).mostrar().sumar(5).mostrar();

// ===== PARTE 4 · Constructores y new ===== 
function Articulo(nombre, precio) { 
  this.nombre = nombre; 
  this.precio = precio; 
  this.stock = 0; 
  this.describir = function () { 
    return this.nombre + " · " + this.precio.toFixed(2) + " €"; 
  }; 
} 
  
const a1 = new Articulo("Café", 3.5); 
const a2 = new Articulo("Tostada", 2.2); 
console.log(a1.describir()); 
console.log(a2.describir()); 
console.log(a1 === a2); 
console.log(a1 instanceof Articulo);

const mal = Articulo("Zumo", 2.5); 
console.log(mal); 
console.log(typeof nombre);

function Bebida(nombre, precio) { 
  this.nombre = nombre; 
  this.precio = precio; 
} 
  
Bebida.prototype.describir = function () { 
  return this.nombre + " · " + this.precio.toFixed(2) + " €"; 
}; 
  
const b1 = new Bebida("Cappuccino", 2.8); 
const b2 = new Bebida("Té", 2.2); 
console.log(b1.describir(), "|", b2.describir()); 
console.log(b1.describir === b2.describir); 
console.log(a1.describir === a2.describir); 
console.log(Object.hasOwn(b1, "describir"), "describir" in b1); 
console.log(Object.getPrototypeOf(b1) === Bebida.prototype);


// ===== PARTE 5 · La clase Object y claves ocultas ===== 
const ficha = { nombre: "Café", precio: 3.5, stock: 20 }; 
  
console.log(Object.keys(ficha)); 
console.log(Object.values(ficha)); 
console.log(Object.entries(ficha)); 
console.log(Object.hasOwn(ficha, "precio")); 
console.log(Object.hasOwn(ficha, "pais")); 
  
for (const par of Object.entries(ficha)) { 
  console.log(par[0] + " = " + par[1]); 
}

const config = { iva: 0.21, moneda: "EUR" }; 
Object.freeze(config); 
config.iva = 0.5; 
config.pais = "España"; 
delete config.moneda; 
console.log(config);

const cuenta = { titular: "Ana" }; 
Object.defineProperty(cuenta, "iban", { 
  value: "ES00-1234", 
  writable: false, 
  enumerable: true, 
}); 
  
cuenta.iban = "otro"; 
console.log(cuenta.iban); 
console.log(Object.getOwnPropertyDescriptor(cuenta, "iban")); 
console.log(Object.getOwnPropertyDescriptor(cuenta, "titular")); 
console.log(Object.isFrozen(config), Object.isFrozen(cuenta));

const usuario = { nombre: "Lucía" }; 
Object.defineProperty(usuario, "claveInterna", { 
  value: "123abc", 
  enumerable: false, 
}); 
  
for (const prop in usuario) { 
  console.log(prop); 
} 
console.log(usuario.claveInterna); 
console.log(Object.keys(usuario));

const id = Symbol("id"); 
const persona = { nombre: "Luis", [id]: 12345 }; 
console.log(persona[id]); 
console.log(Object.keys(persona)); 
console.log(Symbol("clave") === Symbol("clave")); 

const precios = { cafe: 3.5, te: 2.8, zumo: 2.5 }; 
  
const conIva = Object.fromEntries( 
  Object.entries(precios).map(par => [par[0], +(par[1] * 1.1).toFixed(2)]) 
); 
  
console.log(precios); 
console.log(conIva);

// ===== PARTE 6 · De objeto a valor primitivo ===== 
const teclado = { 
  nombre: "Teclado", 
  precio: 30, 
  toString() { 
    return this.nombre; 
  }, 
  valueOf() { 
    return this.precio; 
  }, 
}; 
  
console.log(String(teclado)); 
console.log(Number(teclado)); 
console.log(teclado + 10); 
console.log(teclado > 20); 
console.log(teclado == 30); 
console.log("" + teclado); 
console.log(`${teclado}`);

const raton = { 
  nombre: "Ratón", 
  toString() { 
    return this.nombre; 
  }, 
}; 
  
console.log(raton + 10); 
console.log(raton + "!");

const gadgets = [ 
  { nombre: "Cable", precio: 8, valueOf() { return this.precio; } }, 
  { nombre: "Ratón", precio: 15, valueOf() { return this.precio; } }, 
  { nombre: "Alfombrilla", precio: 5, valueOf() { return this.precio; } }, 
]; 
  
gadgets.sort((a, b) => a - b); 
console.log(gadgets.map(g => g.nombre)); 
console.log(Math.max(...gadgets)); 
console.log(gadgets[0] < gadgets[1]);