export function sortArrayByAmount(array, order) {
  if (order === "asc") {
    return array.slice().sort((a, b) => a.amount - b.amount);
  } else if (order === "desc") {
    return array.slice().sort((a, b) => b.amount - a.amount);
  }
}
