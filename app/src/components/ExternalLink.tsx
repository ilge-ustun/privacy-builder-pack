import Image from "next/image"

export default function ExternalLink({
  href,
  text,
}: {
  href: string
  text: string
  linkKey?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={
        "w-full flex items-center justify-between h-[70px] border rounded-md border-green overflow-hidden p-5 hover-shine hover:cursor-pointer font-bold"
      }
    >
      {text}{" "}
      <Image
        src="/icons/chevron.svg"
        alt="Toggle"
        width={15}
        height={15}
        className="rotate-270 w-auto h-auto"
      />
    </a>
  )
}
