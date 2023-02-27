class Televisor {
  public estaPrendido: boolean;
  public canalActual: number;
  public volumenActual: number;
  public marca: string;
  public esSmartTv: boolean;
  public color: string;
  public esBajoConsumo: boolean;

  constructor(
    paramEstaPrendido: boolean,
    paramCanal: number,
    paramVolumen: number,
    paramMarca: string,
    paramSmart: boolean,
    paramColor: string
  ) {
    this.estaPrendido = paramEstaPrendido;
    this.canalActual = paramCanal;
    this.volumenActual = paramVolumen;
    this.marca = paramMarca;
    this.esSmartTv = paramSmart;
    this.color = paramColor;
  }

  public prenderApagar(): void {
    if (this.estaPrendido == false) {
      //si se encuentra apagado
      this.estaPrendido = true; //cambiala a true y prende el tele
    } else {
      // si esta prendido
      this.estaPrendido = false; //apagalo
    }
  }

  public conocerVolumenActual(): number {
    return this.volumenActual;
  }

  public subirCanal(): void {
    if (this.canalActual <= 800) {
      this.canalActual++;
    }
  }

  public subirVolumen(): void {
    if (this.volumenActual <= 100) {
      this.volumenActual++;
    }
  }

  public bajarVolumen(): void {
    if (this.volumenActual >= 0) {
      this.volumenActual--;
    }
  }

  public setEstaPrendido(paramPrendido: boolean): void {
    this.estaPrendido = paramPrendido;
  }
  public getEstaPrendido(): boolean {
    return this.estaPrendido;
  }
}

let televisor1: Televisor = new Televisor(false, 15, 50, "Sony", true, "Negro");

let televisor2: Televisor = new Televisor(true, 20, 56, "LG", false, "Gris");

let televisor3: Televisor = new Televisor(
  false,
  56,
  78,
  "Samsung",
  true,
  "Blanco"
);

//console.log(televisor1);
//console.log(televisor2);

televisor1.bajarVolumen();

let volumenDelTelevisorSony: number = televisor2.conocerVolumenActual();
console.log(volumenDelTelevisorSony);

console.log(televisor2.marca);

let prendido: boolean = televisor2.getEstaPrendido();
console.log(prendido);
