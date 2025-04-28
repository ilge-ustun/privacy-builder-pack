export function splitIntoColumns<T>(array: T[], columnsNumber: number = 3): T[][] {
  const columns: T[][] = Array.from({ length: columnsNumber }, () => [])

  // Calculate base items per column and remaining items
  const baseItemsPerColumn = Math.floor(array.length / columnsNumber)
  const remainingItems = array.length % columnsNumber

  let currentIndex = 0

  // First distribute base items to each column
  for (let col = 0; col < columnsNumber; col++) {
    const itemsInThisColumn = baseItemsPerColumn + (col < remainingItems ? 1 : 0)
    columns[col] = array.slice(currentIndex, currentIndex + itemsInThisColumn)
    currentIndex += itemsInThisColumn
  }

  return columns
}

export function addToTheEnd<T>(columns: T[][], item: T, targetColumns: number = 3): T[][] {
  // If we have less than target columns, add a new column
  if (columns.length < targetColumns) {
    return [...columns, [item]]
  }

  // Find the column with the minimum length
  let minLength = Infinity
  let targetColumnIndex = 0

  for (let i = 0; i < columns.length; i++) {
    if (columns[i].length < minLength) {
      minLength = columns[i].length
      targetColumnIndex = i
    }
  }

  // Create a new array to avoid mutating the original
  const newColumns = columns.map((col, i) => (i === targetColumnIndex ? [...col, item] : [...col]))

  return newColumns
}
