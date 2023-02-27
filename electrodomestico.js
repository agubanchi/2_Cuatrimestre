var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(paramestaPrendido, paramNombre, paramPrecio, paramColor, paramConsumo, paramPeso, paramconsumoEnergetico) {
        this.estaPrendido = paramestaPrendido;
        this.nombre = paramNombre;
        this.precio = paramPrecio;
        this.color = paramColor;
        this.consumo = paramConsumo;
        this.consumoEnergetico = paramconsumoEnergetico;
        this.peso = paramPeso;
    }
    Electrodomestico.prototype.tipoConsumo = function () {
        if (this.consumo < 300) {
            this.consumoEnergetico = true; // si el consumo es menor a 300, es de bajo consumo
        }
        else {
            this.consumoEnergetico = false; // si es mayor a 100 no
        }
        return this.consumoEnergetico;
    };
    Electrodomestico.prototype.obtenerBalance = function () {
        var balance = this.precio / this.peso;
        // obtengo el balance
        return balance;
    };
    Electrodomestico.prototype.gama = function () {
        var balance = this.obtenerBalance();
        // calculo si el producto es de alta gama o no
        if (balance > 3) {
            // si es mayor a 3 es de alta gama
            console.log("tu ".concat(this.nombre, " es de bajo consumo"));
        }
        else {
            console.log("tu ".concat(this.nombre, " es de consumo elevado"));
        }
    };
    Electrodomestico.prototype.setEstaPrendido = function (paramPrendido) {
        this.estaPrendido = paramPrendido;
    };
    Electrodomestico.prototype.getEstaPrendido = function () {
        return this.estaPrendido;
    };
    return Electrodomestico;
}());
// Creando Instancia de  mi producto (objeto)
var electrodomestico1 = new Electrodomestico(true, "heladera", 100000, "Blanco", 245, 500, true);
var electrodomestico2 = new Electrodomestico(true, "televisor", 35000, "Negro", 125, 30, false);
console.log(electrodomestico1);
console.log(electrodomestico2);
var prendido = electrodomestico2.getEstaPrendido();
console.log(prendido);
var consumo = electrodomestico1.gama();
electrodomestico2.gama();
console.log(consumo);
