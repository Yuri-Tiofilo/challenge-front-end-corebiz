export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

export function currencyFormat(num: number): string {
  return `${num
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, 'R$ 1.')}`;
}

export function parseStringAndTransform(num: string): number {
  const newValue = num.split('0');

  return Number(newValue[0].substring(0, 3));
}

export function transformPrice(num: string): string {
  const newPrice = num.substring(0, 2);
  const newPriceTwo = num.substring(2, 4);

  const newValueTransform = `${newPrice},${newPriceTwo}`;

  return newValueTransform;
}
