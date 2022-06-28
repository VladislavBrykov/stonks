export function generatePairToReport(cryptoPair, turn, startPrice): string {
  return (
    '\n' +
    cryptoPair.toString() +
    ' ' +
    turn.toString() +
    ' заходим ' +
    startPrice
  );
}
