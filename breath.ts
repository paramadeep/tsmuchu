import isMoonGrowingToday from './moonPhase';

const left = 'Left';
const right = 'Right';
const exhaleSideDayMap: Map<number, string> = new Map([
  [1, left],
  [2, right],
  [3, left],
  [4, isMoonGrowingToday() ? left : right],
  [5, left],
  [6, right],
  [7, right],
]);

export default () => {
  const today = new Date();
  const dayOfWeek = today.getUTCDay();
  console.log(dayOfWeek);
  const exhaleSide = exhaleSideDayMap.get(dayOfWeek);
  console.log(exhaleSide);
  return exhaleSide;
};
