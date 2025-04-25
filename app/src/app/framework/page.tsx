import Image from "next/image"

export default function Framework() {
  return (
    <div className="relative min-h-screen bg-[url('/background.png')] bg-cover bg-center bg-no-repeat">
      <main className="relative z-10 flex flex-col gap-[32px] items-center sm:items-start p-8 pb-20 sm:p-20">
        <div className="w-5 h-5 relative">
          <Image src="/navbar/framework.svg" alt="Pagency Framework" fill />
        </div>
        <h1 className="text-white">Pagency Framework_</h1>
      </main>
    </div>
  )
}
