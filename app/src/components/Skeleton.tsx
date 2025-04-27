export default function Skeleton() {
  const columns = [
    [1, 2],
    [3, 4],
    [5, 6],
  ]

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-8">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="w-full md:w-1/3 flex flex-col gap-4">
            {column.map((item) => (
              <div
                key={item}
                className={
                  "w-full h-[70px] thin-border overflow-hidden p-5 hover:border-white animate-pulse"
                }
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
