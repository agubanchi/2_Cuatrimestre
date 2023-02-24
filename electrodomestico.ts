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

  public balance(): number {
    let calcularBalance: number = this.precio / this.peso;
    return calcularBalance;
  }
}
