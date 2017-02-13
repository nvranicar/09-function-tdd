import cardSum from './card-sum';

export default function shouldHit(card1, card2) {
  if (card1 === card2) {
    return false;
  }

  if (cardSum(card1, card2) <= 17) {
    return true;
  }

  if (cardSum(card1, card2) >= 17) {
    return false;
  }
}
