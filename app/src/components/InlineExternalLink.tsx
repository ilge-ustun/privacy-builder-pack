export default function ExternalLink({
  href,
  text,
  color = "white",
}: {
  href: string
  text: string
  color?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-${color} font-bold underline`}
    >
      {text}
    </a>
  )
}
