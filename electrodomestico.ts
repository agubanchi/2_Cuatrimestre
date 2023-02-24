class Electrodomestico {
  public nombre: string = "Heladera";
  public precio: number = 5000;
  public color: string = "Gris";
  public consumo: number = 230;
  public consumoEnergetico: number;
  public peso: number = 150;

  public tipoConsumo(): boolean {
    let calculo: boolean = false;
    if (this.consumoEnergetico > 100) {
      calculo = false;
    } else {
      calculo = true;
    }
    return calculo;
  }

  public balance(): void {
    let calcularBalance: number = this.precio / this.peso;
    console.log(`el balance es ${calcularBalance}`);

    if (calcularBalance > 3) {
      console.log(`tu ${this.nombre} es de alta gama`);
    } else console.log(`tu ${this.nombre} es de  gama baja`);
  }
}
