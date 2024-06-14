import { Corrector } from "../interface/Corrector";
import { IParser } from "../interface/IParser";

class AlgoritmoDfar implements IParser, Corrector {
  private parser: IParser;

  parsearEntrada(texto: string): string[][] {
    return this.parser.parsearEntrada(texto);
  }

  parsearSalida(matrix: string[][]): string {
    return this.parser.parsearSalida(matrix);
  }

  constructor(parser: IParser) {
    this.parser = parser;
  }

  public corregir(contenido: string[][]): string[][] {
    console.log("[+] corregir desde AlgoritmoDfar");
    const terminacionesProhibidas = ["10", "09", "000"];
    let modeloColumnaI = "";
    let modeloColumnaM = "";
    let indicesColumnasICompletas = [];

    // Primera iteración: Identificar modelos y corregir terminaciones prohibidas
    for (let i = 0; i < contenido.length; i++) {
      const linea = contenido[i];
      const primeraCol = linea[0];
      const primeraColContieneI = primeraCol.includes("I");
      const primerIndiceEspacio = primeraCol.indexOf(" ");

      // Verificar columnas I completas e incompletas
      if (primeraColContieneI && primerIndiceEspacio === -1) {
        indicesColumnasICompletas.push(i);
      }

      if (primeraColContieneI && primerIndiceEspacio > 0) {
        const ultimoIndiceEspacio = primeraCol.lastIndexOf(" ");
        const parte1 = primeraCol.substring(0, primerIndiceEspacio);
        const parte2 = primeraCol.substring(
          primerIndiceEspacio,
          ultimoIndiceEspacio + 1,
        );
        const parte3 = primeraCol.substring(ultimoIndiceEspacio + 1);

        const p1FinalizaEnTerminacionProhibida = terminacionesProhibidas.some(
          (sufijo) => parte1.endsWith(sufijo),
        );

        if (p1FinalizaEnTerminacionProhibida) {
          const parte1Corregida = parte1.slice(0, -2) + "15";
          contenido[i][0] = parte1Corregida + parte2 + parte3;
        } else {
          if (modeloColumnaI === "") {
            modeloColumnaI = primeraCol;
          }
        }
      }

      // Verificar y capturar modelo para columnas M completas (65 caracteres)
      if (primeraCol.includes("M")) {
        const primeraColSinEspacios = primeraCol.replace(/\s/g, "");
        if (primeraColSinEspacios.length === 65) {
          modeloColumnaM = primeraCol;
        }
      }
    }
    console.log("modelo  " + modeloColumnaM);
    // Aplicar modelo a columnas I completas
    if (modeloColumnaI !== "") {
      indicesColumnasICompletas.forEach((indice) => {
        contenido[indice][0] = modeloColumnaI;
      });
    } else {
      console.log("No existe un modelo de columna I.");
    }

    // Segunda iteración: Corregir longitud de columnas M
    for (let i = 0; i < contenido.length; i++) {
      const primeraCol = contenido[i][0];

      if (primeraCol.includes("M")) {
        const primeraColSinEspacios = primeraCol.replace(/\s/g, "");
        if (primeraColSinEspacios.length < 65) {
          contenido[i][0] = modeloColumnaM;
        }
      }
    }

    return contenido;
  }
}

export default AlgoritmoDfar;
