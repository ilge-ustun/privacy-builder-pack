import Image from "next/image"

export default function GetStarted() {
  return (
    <div id="get-started" className="w-full border-t border-white/20 pt-20 mt-24">
      <div className="w-full flex gap-2 space-x-2 items-center mb-4">
        <div className="relative w-5 h-5">
          <Image src="/icons/on.png" alt="Get started" fill />
        </div>
        <h2 className="text-white text-xl">Get Started_</h2>
      </div>
      <p>Let´s revive the crypto core values and build meaningful applications!</p>
    </div>
  )
}
