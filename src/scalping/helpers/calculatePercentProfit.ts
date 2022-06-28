export function calculatePercentProfitShort(startPrice, finishPrice) {
  const X = 20;
  return (((startPrice - finishPrice) / startPrice) * X * 100).toFixed(2);
}

export function calculatePercentProfitLong(startPrice, finishPrice) {
  const X = 20;
  return (((finishPrice - startPrice) / finishPrice) * X * 100).toFixed(2);
}
