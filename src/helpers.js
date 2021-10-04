

export const equalWithoutChildren = (prev, next) => {
  for (let k in prev) {
    if (k === 'children') continue
    if (prev[k] !== next[k]) return false
  }
  return true
}
