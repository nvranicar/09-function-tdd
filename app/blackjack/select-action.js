import shouldSplit from './should-split';
import shouldHit from './should-hit';

export default function selectAction(card1, card2) {
  if (shouldSplit(card1, card2) === true) {
    return 'split';
  }
  if (shouldHit(card1, card2) === true) {
    return 'hit';
  }

  return 'stay';
}
