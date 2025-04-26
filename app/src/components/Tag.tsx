export default function Tag({ tag }: { tag: string }) {
  return (
    <div className="text-green/50 text-xs border border-green/50 rounded-full px-2 py-1">{tag}</div>
  )
}
