export interface IParser {
  parsearEntrada(texto: string): string[][];
  parsearSalida(matrix: string[][]): string;
}
