function splitIntoColumns<T>(array: T[], columnsNumber: number = 3): T[][] {
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

export default splitIntoColumns
