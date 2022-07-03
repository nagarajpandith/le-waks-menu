import Head from 'next/head'
import Image from 'next/image'
import Accordion from "../components/accordion";

export default function Menu() {
  return (
    <div>
      <Head>
        <title>Menu</title>
        <meta name="description" content="Fine Dine Menu" />
        <link rel="icon" href="/icon.avif" />
      </Head>

      <div className="inline-flex flex-col justify-center items-center mx-[50%]">
          <a className="text-red-500 text-2xl mb-2">Menu</a>
          <a className="text-md text-gray-500">Menu</a>
      </div>

      <div className="mx-12 flex flex-col items-center justify-center border-b-2 w-36 border-red-500">
          <Image src="/icon.avif" height={100} width={150} />
          <a className="text-red-500 text-xl mb-5 mt-5">Hatabgy</a>
      </div>

      <div className="inline-flex flex-col justify-center items-center mx-[50%]">
          <a className="text-gray-500 text-2xl mb-2">Hatabgy</a>
          <a className="text-md text-gray-500">Menu</a>
      </div>
      <Accordion />
      
    </div>
  )
}
