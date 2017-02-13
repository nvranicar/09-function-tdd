export default function cardvalue(cardValue) {
  if (cardValue === 'jack') {
    return 10;
  }
  if (cardValue === 'queen') {
    return 10;
  }
  if (cardValue === 'king') {
    return 10;
  }
  if (cardValue === 'ace') {
    return 11;
  }

  return parseInt(cardValue);
}
