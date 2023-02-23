class Televisor {
  public estaPrendido: boolean = false;
  public canalActual: number = 0;
  public volumenActual: number = 0;
  public marca: string = "";
  public esSmartTv: boolean = false;
  public color: string;

  public prenderApagar(): void {
    if (this.estaPrendido === false) {
      this.estaPrendido = true;
    } else {
      this.estaPrendido = false;
    }
  }

  public conocerVolumenActual(): number {
    return this.volumenActual;
  }

  public subirVolumen(): void {
    this.volumenActual = this.volumenActual + 1;
  }

  bajarVolumen(): void {
    this.volumenActual = this.volumenActual - 1;
  }

  subirCanal(): void {
    this.canalActual = this.canalActual + 1;
  }

  bajarCanal(): void {
    this.canalActual = this.canalActual - 1;
  }
}
