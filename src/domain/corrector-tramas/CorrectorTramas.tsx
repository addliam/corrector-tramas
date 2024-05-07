import ServicioCorreccion from "./ServicioCorreccion";

class CorrectorTramas {
  constructor() {}
  public iniciar(contenido: string[][]) {
    let nombreArchivo: string = "nombrearchivo";
    const estrategia = ServicioCorreccion.determinarTipo(nombreArchivo);
    return estrategia.corregir(contenido);
  }
}
export default CorrectorTramas;
