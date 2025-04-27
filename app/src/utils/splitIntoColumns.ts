function splitIntoColumns<T>(array: T[], columnsNumber: number = 3): T[][] {
  const columns: T[][] = Array.from({ length: columnsNumber }, () => [])

  array.forEach((item, index) => {
    columns[index % columnsNumber].push(item)
  })

  return columns
}

export default splitIntoColumns
