var Televisor = /** @class */ (function () {
  function Televisor() {
    this.estaPrendido = false;
    this.canalActual = 0;
    this.volumenActual = 0;
    this.marca = "";
    this.esSmartTv = false;
  }
  Televisor.prototype.prenderApagar = function () {
    if (this.estaPrendido === false) {
      this.estaPrendido = true;
    } else {
      this.estaPrendido = false;
    }
  };
  Televisor.prototype.conocerVolumenActual = function () {
    return this.volumenActual;
  };
  Televisor.prototype.subirVolumen = function () {
    this.volumenActual = this.volumenActual + 1;
  };
  Televisor.prototype.bajarVolumen = function () {
    this.volumenActual = this.volumenActual - 1;
  };
  Televisor.prototype.subirCanal = function () {
    this.canalActual = this.canalActual + 1;
  };
  Televisor.prototype.bajarCanal = function () {
    this.canalActual = this.canalActual - 1;
  };
  return Televisor;
})();
