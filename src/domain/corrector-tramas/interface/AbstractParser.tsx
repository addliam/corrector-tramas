export abstract class Parser {
  // TODO:  offsetsEntrada quiza sea solo numero entero, longitud primera columna
  abstract offsetsEntrada: number[];
  abstract offsetsSalida: number[];
  public parsearEntrada = (texto: string): string[][] => {
    let resultado: string[][] = [[]];
    // Gestionar eliminacion de (\r) carriage return. .replace(/\r/g, "")
    texto = texto.replace(/\r/g, "");
    // some logic
    // console.log(`Usando en parsearEntrada: ${this.offsetsEntrada.join(" , ")}`);
    // primer espacio, ancho de columna
    const OFFSET_PRIMER_ESPACIO = this.offsetsEntrada[0];
    // Uso exclusivo para DSER
    const OFFSET_SEGUNDO_ESPACIO = this.offsetsEntrada[1];
    // Separar en lineas
    let lineas = texto.split("\n");
    // Uso exclusivo para DSER
    if (OFFSET_SEGUNDO_ESPACIO) {
      lineas.forEach((linea) => {
        let primerCampo = linea.substring(0, OFFSET_PRIMER_ESPACIO);
        const OFFSET_PRIMER_SEGUNDO =
          OFFSET_PRIMER_ESPACIO + OFFSET_SEGUNDO_ESPACIO;
        let segundoCampo = linea
          .substring(OFFSET_PRIMER_ESPACIO, OFFSET_PRIMER_SEGUNDO)
          .trim();
        linea = linea.substring(OFFSET_PRIMER_SEGUNDO);
        // no permitir vacio, por def tendra un [''] del primer Campo
        let fl = [
          primerCampo,
          segundoCampo,
          ...linea.split(" ").filter(Boolean),
        ];
        if (fl.length > 1) {
          // Introducir la linea formateada fl
          resultado.push(fl);
        }
      });
    } else {
      lineas.forEach((linea) => {
        let primerCampo = linea.substring(0, OFFSET_PRIMER_ESPACIO);
        linea = linea.substring(OFFSET_PRIMER_ESPACIO);
        // no permitir vacio, por def tendra un [''] del primer Campo
        let fl = [primerCampo, ...linea.split(" ").filter(Boolean)];
        if (fl.length > 1) {
          // Introducir la linea formateada fl
          resultado.push(fl);
        }
      });
    }

    return resultado;
  };

  public parsearSalida = (matrix: string[][]): string => {
    // console.log(`Usando en parsearSalida: ${this.offsetsSalida.join(" , ")}`);
    // Ejemplo:
    // 425   2.001
    //    xxxxxxxx
    // Respuesta: aca hay 8 espacios
    const ESPACIO_ULTIMAS_PALABRA = this.offsetsSalida;

    var arraySalida: string[] = [];
    matrix.forEach((arrayLinea) => {
      let linea = "";
      for (let i = 0; i < arrayLinea.length; i++) {
        const espacioEntrePalabras = ESPACIO_ULTIMAS_PALABRA[i];
        let cantidadEspacios = 0;
        const absEspacioEntrePalabras = Math.abs(espacioEntrePalabras);
        // Uso exclusivo para DSER
        if (espacioEntrePalabras < 0) {
          // Indica que el texto debe estar alineado a la izquierda
          //  HARD_CODED es el espacio entre columna index 0 y 1
          const HARD_CODED = 4;
          // llenado manual
          linea += arrayLinea[i] + " ".repeat(HARD_CODED);
          linea +=
            arrayLinea[i + 1] +
            " ".repeat(
              absEspacioEntrePalabras - HARD_CODED - arrayLinea[i + 1].length
            );
          // saltearse ese index
          i++;
        } else {
          if (arrayLinea[i + 1]) {
            let elementSgte = arrayLinea[i + 1];
            const lenElementSgte = elementSgte.length;
            // Valor absoluto de espacioEntrePalabras para permitir pase de negativo q signifique alinea izq.
            cantidadEspacios = absEspacioEntrePalabras - lenElementSgte;
          }
          linea += arrayLinea[i] + " ".repeat(cantidadEspacios);
        }
      }
      if (linea.trim() !== "") {
        arraySalida.push(linea);
      }
    });
    return arraySalida.join("\n");
  };
}
