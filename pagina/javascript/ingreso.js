class Ingreso extends Registro {
  static idIngresos = 1456;
  constructor(descripcion, valor) {
    super(descripcion, valor);
    this._id = ++Ingreso.idIngresos;
  }

  get id() {
    return this._id;
  }
}
