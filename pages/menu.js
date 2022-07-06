import Image from 'next/image'
import Accordion from "../components/accordion";

export default function Menu() {
  return (
    <div>
      <div className="inline-flex flex-col justify-center items-center mx-[50%]">
          <a className="text-yellow-400 text-2xl mb-2 truncate">Le Wak&apos;s</a>
          <a className="text-md text-gray-500">Menu</a>
      </div>

      <div className="mx-12 flex flex-col items-center justify-center border-b-2 w-36 border-yellow-400">
          <Image src="/le-waks-logo.png" height={400} width={400} alt="logo" />
          <a className="text-yellow-400 text-xl mb-5 mt-5">Le Wak&apos;s</a>
      </div>

      {/* <div className="inline-flex flex-col justify-center items-center mx-[50%]">
          <a className="text-gray-500 text-2xl mb-2">Le wak's</a>
          <a className="text-md text-gray-500">Menu</a>
      </div>*/}
      <Accordion />
      
    </div>
  )
}
