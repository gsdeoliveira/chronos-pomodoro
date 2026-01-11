export const getNextCycle = (currentCycle: number) => {
  return currentCycle === 8 ? 1 : currentCycle + 1
}
