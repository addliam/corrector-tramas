import AlgoritmoDser from "./algoritmos/AlgoritmoDser";
import AlgoritmoDfac from "./algoritmos/AlgoritmoDfac";
import AlgoritmoDden from "./algoritmos/AlgoritmoDden";
import AlgoritmoDfar from "./algoritmos/AlgoritmoDfar";
import { Corrector } from "./algoritmos/interface/Corrector";
class ServicioCorreccion {
  // patron Facade
  //   contenido seria  array/vector de str
  // sustento d este patron seria q no quiero mezclar logica de obtener tipo, con la de corregir
  private contenido: string[][];
  constructor(contenido: string[][]) {
    this.contenido = contenido;
  }

  public usarAlgoritmoDser(): string[][] {
    return new AlgoritmoDser().corregir(this.contenido);
  }
  public usarAlgoritmoDfar(): string[][] {
    return new AlgoritmoDfar().corregir(this.contenido);
  }
  public usarAlgoritmoDfac(): string[][] {
    return new AlgoritmoDfac().corregir(this.contenido);
  }
  public usarAlgoritmoDden(): string[][] {
    return new AlgoritmoDden().corregir(this.contenido);
  }
}
export default ServicioCorreccion;
