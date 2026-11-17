# Respuestas · UA4 Objetos
Nombre y apellidos:
Grupo:

1. Con const, ¿por qué puedo cambiar las propiedades de un objeto?
Por el tipo de dato, ya que es una constante y no una variable.
   ¿Por qué {a:1} === {a:1} da false?
   {a: 1} === {a: 1} da false porque cada literal crea un objeto distinto y === compara las referencias, no el contenido.

2. Explica qué ocurrió en la copia superficial del pedido y cuándo
   usarías structuredClone en lugar de Object.assign.

Object.assign({}, pedido) hizo una copia superficial: copió las propiedades, pero superficial.direccion y pedido.direccion siguen apuntando al mismo objeto anidado. Por eso, al cambiar la ciudad a "Madrid" en la copia, también cambió en pedido.

3. En tienda.abrir(), ¿cuánto vale this? ¿Por qué conFlecha mostró
   undefined y por qué extraida() perdió el contexto?
   En tienda.abrir(), this vale tienda, porque el método se invoca como propiedad de ese objeto, conFlecha es una función flecha y no tiene un this propio.

4. ¿Qué ventaja tiene guardar un método en el prototipo (Bebida).
   frente a crearlo dentro del constructor (Articulo)?
   Articulo crea describir dentro del constructor, así que cada instancia recibe su propia función. En Bebida, describir se guarda en Bebida.prototype y todas las instancias la comparten.

5. ¿Por qué "" + teclado dio 30 y `${teclado}` dio "Teclado"?
Porque ""+30 devuelve una concatenacion con una cadena vacia y `${teclado}` solicita una conversion a cadena y produce "Teclado".

6. ¿Qué aportan #stock con su getter/setter y la herencia con extends?
Un campo privado como #stock oculta el dato para que no se pueda leer o cambiar directamente desde fuera de la clase. Un getter permite consultarlo y un setter puede controlar las modificaciones, esto se vió en Programación de 1ºDAW para restringir el acceso a datos de la clase.

class Articulo {
  #stock = 0;

  constructor(nombre) {
    this.nombre = nombre;
  }

  get stock() {
    return this.#stock;
  }

  set stock(cantidad) {
    if (cantidad < 0) throw new RangeError("El stock no puede ser negativo");
    this.#stock = cantidad;
  }
}

class Bebida extends Articulo {
  constructor(nombre, temperatura) {
    super(nombre);
    this.temperatura = temperatura;
  }
}

const cafe = new Bebida("Café", "caliente");
cafe.stock = 10;
console.log(cafe.nombre, cafe.stock, cafe.temperatura);