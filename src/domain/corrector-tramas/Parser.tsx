abstract class Parser {
  abstract offsetsEntrada: number[];
  abstract offsetsSalida: number[];
  public parsearEntrada = (texto: string): string[][] => {
    // some logic
    console.log(`Usando en parsearEntrada: ${this.offsetsEntrada.join(" - ")}`);
    return [[], []];
  };
  public parsearSalida = (matrix: string[][]): string => {
    // some logic
    console.log(`Usando en parsearSalida: ${this.offsetsSalida.join(" - ")}`);
    return "";
  };
}
