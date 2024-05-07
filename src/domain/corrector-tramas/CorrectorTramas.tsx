import ServicioCorreccion from "./ServicioCorreccion";

class CorrectorTramas {
  protected servicioCorreccion: ServicioCorreccion;

  constructor(contenido: string[][]) {
    this.servicioCorreccion = new ServicioCorreccion(contenido);
  }

  private obtenerTipo = (): string => {
    return "DSER";
  };
  //   delegar decide el alg en funcion del tipo
  public iniciar(): string[][] {
    // revisar tipo de Trama (DSER, DFAC..) y asignar a algoritmo correspondiente
    let tipo: string = this.obtenerTipo();
    let resp: string[][] = [[]];
    switch (tipo) {
      // de acuerdo a resultado de obtenerTipo, cualquier modificacion afecta este bloque tambien
      case "DSER":
        resp = this.servicioCorreccion.usarAlgoritmoDser();
        break;
      case "DFAR":
        resp = this.servicioCorreccion.usarAlgoritmoDfar();
        break;
      case "DFAC":
        resp = this.servicioCorreccion.usarAlgoritmoDfac();
        break;
      case "DDEN":
        resp = this.servicioCorreccion.usarAlgoritmoDden();
        break;

      default:
        break;
    }
    return resp;
  }
}
export default CorrectorTramas;
