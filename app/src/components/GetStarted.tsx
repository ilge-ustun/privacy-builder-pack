import Image from "next/image"
import InlineExternalLink from "@/components/InlineExternalLink"
import TerminalCursor from "@/components/TerminalCursor"

export default function GetStarted() {
  return (
    <div
      id="get-started"
      className="w-full border-t border-white/20 pt-20 mt-24 flex flex-col gap-8"
    >
      <div className="w-full flex space-x-2 items-center mb-4">
        <div className="relative w-5 h-5">
          <Image
            src="/icons/on.png"
            alt="Get started"
            fill
            sizes="20px, 20px"
            className="w-auto h-auto"
          />
        </div>
        <h2 className="text-white text-xl">
          Get Started
          <TerminalCursor />
        </h2>
      </div>
      <p>Let´s revive the crypto core values and build meaningful applications!</p>

      <div className="flex flex-col thin-border w-full max-w-3xl self-center p-6 px-3 sm:px-6 text-white space-y-8">
        <h3 className="text-green text-xl font-bold">1. The Reason Behind Privacy Builder Pack</h3>
        <p className="text-white">
          Drawing from our experiences at{" "}
          <InlineExternalLink href="https://ethbrno.cz/" text="ETHBrno" />,{" "}
          <InlineExternalLink href="https://ethrome.com/" text="ETHRome" />,{" "}
          <InlineExternalLink href="https://ethdam.com/" text="ETHDam" />, and{" "}
          <InlineExternalLink href="https://ethberlin.com/" text="ETHBerlin" />, we&#39;ve seen
          firsthand the need for privacy to be understood not just as a technical feature but as a
          broader challenge.
        </p>
        <p className="text-white">
          The <b>Privacy Builder Pack (PBP)</b> is designed to empower devs to move beyond one-off
          projects and build privacy-first applications that can scale and thrive in the long term.
        </p>
      </div>

      <div className="flex flex-col thin-border w-full max-w-3xl self-center p-6 px-3 sm:px-6 text-white space-y-8">
        <h3 className="text-green text-xl font-bold">2. Privacy is Increasingly Under Threat</h3>
        <p className="text-white">
          Building sustainable, privacy-enhancing solutions has never been more critical.
        </p>
        <div className="flex flex-col sm:flex-row space-y-8 space-x-8">
          <div className="flex flex-col space-y-8">
            <h4 className="font-bold">Surveillance Evolution</h4>
            <ul className="list-disc list-inside">
              <li>Digitized images and facial recognition</li>
              <li>Continuous data mining and profiling</li>
              <li>Extended data retention</li>
              <li>Predictive behavior analysis</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-8">
            <h4 className="font-bold">Impact on Freedom</h4>
            <ul className="list-disc list-inside">
              <li>Restricted movement</li>
              <li>Visible past actions</li>
              <li>Predictable future actions</li>
              <li>Compromised autonomy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col thin-border w-full max-w-3xl self-center p-6 px-3 sm:px-6 text-white space-y-8">
        <h3 className="text-green text-xl font-bold">3. Why It Matters and What to Do?</h3>

        <div className="flex flex-col sm:flex-row space-y-8 space-x-8">
          <div className="flex flex-col space-y-8">
            <h4 className="font-bold">Essential Protection</h4>
            <p>
              Privacy enables individuals to participate in political processes without fear of
              retribution or surveillance, ensuring they can freely express their views, associate
              with others, and engage in activism.
            </p>
          </div>

          <div className="flex flex-col space-y-8">
            <h4 className="font-bold">Power Balance</h4>
            <p>
              Robust privacy practices assist in balancing power between individuals and the state
              or corporations. Without them, unchecked surveillance and control leads to a loss of
              personal freedoms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
