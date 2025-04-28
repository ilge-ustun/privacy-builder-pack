import Collapse from "@/components/Collapse"
import InlineExternalLink from "@/components/InlineExternalLink"
import Image from "next/image"
import TailOsUserGuides from "@/components/TailOsUserGuides"
import TerminalCursor from "@/components/TerminalCursor"

export default function TailsOS() {
  return (
    <main className="relative min-h-screen bg-[#030303] pt-20 flex flex-col items-center">
      <div className="relative flex flex-col gap-8 items-center sm:items-start p-6 px-4 sm:px-6 pb-20 sm:p-20 container">
        <div className="w-full flex gap-2 space-x-2">
          <Image src="/icons/tailsos.svg" alt="tailsOS" width={28} height={28} />
          <h1 className="text-white text-2xl">
            Tails OS
            <TerminalCursor />
          </h1>
        </div>
        <p>A portable operating system that protects against surveillance and censorship.</p>

        <div className="flex flex-col p-4 thin-border">
          <h2 className="text-green text-lg font-bold">$ random_flashdrive.log</h2>
          <p className="text-white my-6">
            Did you get a flash drive and now you are curious if you have an authentic copy of the
            TailsOS? <br /> Find a step-by-step guide 1 / step-by-step guide 2 on how to verify it
            to make sure you are NOT just plugging a random USB into your system! Otherwise Reset
            your USB, download TailsOS, verify the authenticity and flash your newly acquired USB
            with the image that you trust.
          </p>
          <div className="flex flex-row flex-wrap justify-between space-y-8 lg:space-y-0">
            <div className="flex flex-row flex-wrap">
              <div className="flex flex-row mr-8">
                <span className="mr-2">→</span>{" "}
                <InlineExternalLink
                  href="https://www.anarsec.guide/posts/tails-best/#:~:text=verification%20instructions.-,Step%3A%20Generate%20a%20Key%2DPair,-Tails%20recommends%20this"
                  text="Guide-to-Verify1"
                />
              </div>
              <div className="flex flex-row mr-8">
                <span className="mr-2">→</span>{" "}
                <InlineExternalLink
                  href="https://www.thinkpenguin.com/gnu-linux/verifying-usb-flash-drive-contains-authentic-copy-tails"
                  text="Guide-to-Verify2"
                />
              </div>
              <div className="flex flex-row mr-8">
                <span className="mr-2">→</span>{" "}
                <InlineExternalLink
                  href="https://tails.net/doc/reset/windows/index.en.html"
                  text="Reset USB"
                />
              </div>
            </div>
            <div className="flex flex-row mr-8">
              <span className="mr-2">→</span>{" "}
              <InlineExternalLink
                href="https://tails.net/install/download/index.en.html"
                text="Flash Your Own"
              />
            </div>
          </div>
        </div>

        <Collapse title="Basic Info">
          <div className="flex flex-col my-8">
            <h3 className="text-green text-lg font-bold mb-4">Tails works on:</h3>
            <ul className="list-disc list-inside">
              <li>Most PC computers that are less than 10 years old</li>
              <li>Some older Mac computers with an Intel processor</li>
            </ul>
          </div>
          <div className="flex flex-col my-8">
            <h3 className="text-green text-lg font-bold mb-4">Tails does not work:</h3>
            <ul className="list-disc list-inside">
              <li>Newer Mac computers with an Apple processor (M1 or M2)</li>
              <li>Smartphones or tablets</li>
              <li>Raspberry Pi</li>
            </ul>
          </div>
          <div className="flex flex-col my-8">
            <h3 className="text-green text-lg font-bold mb-4">Tails might not work on:</h3>
            <ul className="list-disc list-inside">
              <li>Some older computers, for example, if they don&apos;t have 2 GB of RAM.</li>
              <li>
                Some newer computers, for example, if their graphics card is incompatible with
                Linux.
              </li>
              <li>Nvidia or AMD Radeon cards often do not work in Tails.</li>
            </ul>
          </div>
        </Collapse>

        <Collapse title="Expected Software">
          <div className="flex flex-col my-8">
            <ul className="list-disc list-inside">
              <li>
                <InlineExternalLink href="https://www.torproject.org/" text="Tor Browser" />{" "}
                with uBlock, a secure browser and an ad-blocker
              </li>
              <li>
                <InlineExternalLink href="https://www.thunderbird.net/" text="Thunderbird" />, for
                encrypted emails
              </li>
              <li>
                <InlineExternalLink href="https://keepassxc.org/" text="KeePassXC" />, to create and
                store strong passwords
              </li>
              <li>
                <InlineExternalLink href="https://www.libreoffice.org/" text="LibreOffice" />, an
                office suite
              </li>
              <li>
                <InlineExternalLink href="https://onionshare.org/" text="OnionShare" />, to share
                files, websites, and chat rooms over Tor
              </li>
              <li>
                <InlineExternalLink href="https://www.metacleaner.com/" text="Metadata Cleaner" />,
                to remove metadata from files
              </li>
              <li>and many more!</li>
            </ul>
          </div>
          <div className="flex flex-col my-8">
            <h3 className="text-green text-lg font-bold mb-4">To prevent mistakes:</h3>
            <ul className="list-disc list-inside">
              <li>
                Applications are blocked automatically if they try to connect to the Internet
                without Tor.
              </li>
              <li>
                Everything in the{" "}
                <InlineExternalLink
                  href="https://tails.net/doc/persistent_storage/index.en.html"
                  text="Persistent Storage"
                />{" "}
                is encrypted automatically.
              </li>
              <li>Tails does not write anything to the hard disk.</li>
              <li>All the memory is deleted when shutting down.</li>
            </ul>
          </div>
        </Collapse>

        <Collapse title="User Guides">
          <TailOsUserGuides />
        </Collapse>
      </div>
    </main>
  )
}
