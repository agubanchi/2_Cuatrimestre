class Electrodomestico {
  public nombre: string = "Heladera";
  public precio: number = 5000;
  public color: string = "Gris";
  public consumo: number = 230;
  public consumoEnergetico: boolean;
  public peso: number = 150;

  public tipoConsumo(): boolean {
    if (this.consumo < 300) {
      this.consumoEnergetico = true; // si el consumo es menor a 300, es de bajo consumo
    } else {
      this.consumoEnergetico = false; // si es mayor a 100 no
    }
    return this.consumoEnergetico;
  }

  public balance(): number {
    // obtengo el balance
    return this.precio / this.peso;
  }

  public gama(): void {
    // calculo si el producto es de bajo consumo o no
    if (this.balance > 3) {
      // si es mayor a 3 es de alta gama
      console.log(`tu ${this.nombre} es de bajo consumo`);
    } else {
      console.log(`tu ${this.nombre} es de consumo elevado`);
    }
  }
}
