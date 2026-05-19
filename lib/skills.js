/**
 * Derive a display proficiency (55–95) from skill index within its category.
 * @param {number} index
 * @param {number} total
 * @returns {number}
 */
export function skillProficiency(index, total) {
  const base = 58
  const spread = 37
  const ratio = total <= 1 ? 1 : index / (total - 1)
  return Math.round(base + spread * ratio)
}
