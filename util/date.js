export function getFormattedDate(date) {
  // return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  return date.toLocaleDateString().replaceAll('/', '-');
  // return date.toISOString().slice(0, 10);
}

export function getDateMinusDays(date) {
  if (date.getMonth() + 1 === new Date().getMonth() + 1) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate())
      .toLocaleDateString()
      .replaceAll('/', '-');
  }

  return null;
}
