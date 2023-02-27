class Electrodomestico {
  public estaPrendido: boolean;
  public nombre: string;
  public precio: number;
  public color: string;
  public consumo: number;
  public consumoEnergetico: boolean;
  public peso: number;

  constructor(
    paramestaPrendido: boolean,
    paramNombre: string,
    paramPrecio: number,
    paramColor: string,
    paramConsumo: number,
    paramPeso: number,
    paramconsumoEnergetico: boolean
  ) {
    this.estaPrendido = paramestaPrendido;
    this.nombre = paramNombre;
    this.precio = paramPrecio;
    this.color = paramColor;
    this.consumo = paramConsumo;
    this.consumoEnergetico = paramconsumoEnergetico;
    this.peso = paramPeso;
  }

  public tipoConsumo(): boolean {
    if (this.consumo < 300) {
      this.consumoEnergetico = true; // si el consumo es menor a 300, es de bajo consumo
    } else {
      this.consumoEnergetico = false; // si es mayor a 100 no
    }
    return this.consumoEnergetico;
  }

  public obtenerBalance(): number {
    let balance: number = this.precio / this.peso;
    // obtengo el balance
    return balance;
  }

  public gama(): void {
    let balance: number = this.obtenerBalance();
    // calculo si el producto es de alta gama o no
    if (balance > 3) {
      // si es mayor a 3 es de alta gama
      console.log(`tu ${this.nombre} es de bajo consumo`);
    } else {
      console.log(`tu ${this.nombre} es de consumo elevado`);
    }
  }

  public setEstaPrendido(paramPrendido: boolean): void {
    this.estaPrendido = paramPrendido;
  }
  public getEstaPrendido(): boolean {
    return this.estaPrendido;
  }
}

// Creando Instancia de  mi producto (objeto)

let electrodomestico1: Electrodomestico = new Electrodomestico(
  true,
  "heladera",
  100000,
  "Blanco",
  245,
  500,
  true
);

let electrodomestico2: Electrodomestico = new Electrodomestico(
  true,
  "televisor",
  35000,
  "Negro",
  125,
  30,
  false
);
console.log(electrodomestico1);
console.log(electrodomestico2);

let prendido: boolean = electrodomestico2.getEstaPrendido();
console.log(prendido);

let consumo: void = electrodomestico1.gama();
electrodomestico2.gama();
console.log(consumo);
