export const useNumberFilter = (number: number) => {
  if (typeof number !== 'number') return number;
  return number.toLocaleString();
};