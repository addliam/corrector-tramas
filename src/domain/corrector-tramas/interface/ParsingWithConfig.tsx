import { ConfigTrama } from "./ConfigTrama";
/**
 * ParsingWithConfig
 * Parsea el contenido de texto basado en una configuracion pasada en constructor.
 */
export class ParsingWithConfig {
  // configuracion de ancho de columnas y alineacion de contenido de tabla
  private config: ConfigTrama;
  constructor(config: ConfigTrama) {
    this.config = config;
  }
  public parsearEntrada(entrada: string): string[][] {
    // Gestionar eliminacion de (\r) carriage return. .replace(/\r/g, "")
    entrada = entrada.replace(/\r/g, "");
    const lineas = entrada.split("\n");
    const lineasEntrada: string[][] = [];
    lineas.map((linea) => {
      const lineaEntrada: string[] = [];
      let cursor = 0;
      this.config.columnas.map((columna) => {
        const longitudColumna = columna.longitud;
        let substr = linea.substring(cursor, longitudColumna + cursor);
        substr = substr.trim();
        // console.log({ substr, cursor, longitudColumna });
        cursor = cursor + longitudColumna;
        lineaEntrada.push(substr);
      });
      lineasEntrada.push(lineaEntrada);
    });
    return lineasEntrada;
  }
  public parsearSalida(matrix: string[][]): string {
    return matrix
      .map((lineaArray: string[]) => {
        const alineacion_defecto = this.config.alineacion_defecto;
        return lineaArray
          .map((palabra: string, i: number) => {
            const actualColumnConfig = this.config.columnas[i];
            const configLongitud = actualColumnConfig.longitud;
            const repeticionRelleno = configLongitud - palabra.length;
            // si se definio la alineacion de cada columna, usar esa, de lo contrario usar la por defecto
            const alineacionElegida = actualColumnConfig.alineacion
              ? actualColumnConfig.alineacion
              : alineacion_defecto;
            let palabraRellenada = "";
            // para el caso de derecha
            if (alineacionElegida === "derecha") {
              palabraRellenada = " ".repeat(repeticionRelleno) + palabra;
            } else {
              // izquierda
              const configColumnEspacio = actualColumnConfig.espacio || 0;
              palabraRellenada =
                " ".repeat(configColumnEspacio) +
                palabra +
                " ".repeat(repeticionRelleno - configColumnEspacio);
            }
            return palabraRellenada;
          })
          .join("");
      })
      .join("\n");
  }
}
