//converts dollar unit to cents when saving
export function convertToCents(amount: number) {
  return Math.round(amount * 100);
}

//convert cents to dollars when retriving
//convertFromCents
export function convertToDollarUnit(amount: number) {
  return amount / 100;
}
