import Image from "next/image"

export default function ExternalLink({
  href,
  text,
  image,
}: {
  href: string
  text: string
  image?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={
        "w-full flex items-center justify-between h-[70px] border rounded-md border-green overflow-hidden p-5 hover-shine cursor-pointer font-bold"
      }
    >
      <div className="flex items-center gap-2">
        {image && <Image src={image} alt={text} width={24} height={24} className="w-6 h-auto" />}
        {text}{" "}
      </div>
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
