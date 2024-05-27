import { ConfigTrama } from "../../interface/ConfigTrama";
import { configDfac } from "./ConfigDfac";
import { configDser } from "./ConfigDser";

export class Parsing {
  constructor() {}
  public parsearEntrada(entrada: string, config: ConfigTrama): string[][] {
    // Gestionar eliminacion de (\r) carriage return. .replace(/\r/g, "")
    entrada = entrada.replace(/\r/g, "");
    const lineas = entrada.split("\n");
    const lineasEntrada: string[][] = [];
    lineas.map((linea) => {
      const lineaEntrada: string[] = [];
      let cursor = 0;
      config.columnas.map((columna) => {
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
  public parsearSalida(matrix: string[][], config: ConfigTrama): string {
    return matrix
      .map((lineaArray: string[]) => {
        return lineaArray
          .map((palabra: string, i: number) => {
            const actualColumnConfig = config.columnas[i];
            const configLongitud = actualColumnConfig.longitud;
            const repeticionRelleno = configLongitud - palabra.length;
            let palabraRellenada = "";
            if (actualColumnConfig.alineacion === "derecha") {
              palabraRellenada = " ".repeat(repeticionRelleno) + palabra;
            } else {
              // izquierda o no especificada
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

  public start(): void {
    const entrada: string =
      "205087909710000827101F0510002498700001000803230101    RIESGO QUIRURGICO,INCLUYE CONSULTA                                    202404240146476 141050077           1       72.45        0.00        0.00       72.45        0.00D39.7A15\n205087909710000827101F0510002498700001000903110110    EXTIRPACION DE TUMOR DE TEJ.CEL.SUBCUTANEO-LIPOMA-CUERPO EXTRAYO PROFU202404250172517 142365459           1      142.60        0.00        0.00      142.60        0.00D39.7A02";
    // console.log("entrada");
    // console.log(entrada);
    const matrix = this.parsearEntrada(entrada, configDser);
    // console.log("matrix");
    // console.log(matrix);
    const salida = this.parsearSalida(matrix, configDser);
    console.log("salida");
    console.log(salida);
  }
}
