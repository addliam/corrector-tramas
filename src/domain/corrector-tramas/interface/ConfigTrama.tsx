// por defecto se considera alineado derecha
// cuando es izq. debe mencionar espacio deseado a la izquierda
interface Columna {
  longitud: number;
  alineacion?: string;
  espacio?: number;
}
export interface ConfigTrama {
  nombre: string;
  alineacion_defecto: string;
  columnas: Columna[];
}
