import Head from 'next/head'
import Image from 'next/image'
import Accordion from "../components/accordion";

export default function Menu() {
  return (
    <div>
      <Head>
        <title>Le Walk's Menu</title>
        <meta name="description" content="Le Walks Menu | Burgers and More" />
        <link rel="icon" href="/le-walks-logo.png" />
      </Head>

      <div className="inline-flex flex-col justify-center items-center mx-[50%]">
          <a className="text-yellow-400 text-2xl mb-2 truncate">Le Walk's</a>
          <a className="text-md text-gray-500">Menu</a>
      </div>

      <div className="mx-12 flex flex-col items-center justify-center border-b-2 w-36 border-yellow-400">
          <Image src="/le-walks-logo.png" height={400} width={400} />
          <a className="text-yellow-400 text-xl mb-5 mt-5">Le Walk's</a>
      </div>

      {/* <div className="inline-flex flex-col justify-center items-center mx-[50%]">
          <a className="text-gray-500 text-2xl mb-2">Le Walk's</a>
          <a className="text-md text-gray-500">Menu</a>
      </div>*/}
      <Accordion />
      
    </div>
  )
}
