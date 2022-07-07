import Image from 'next/image'
import Accordion from "../components/accordion";
import { TailSpin } from "react-loader-spinner"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Menu() {
  const router = useRouter()
  const { locale } = router
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-[50%]">
          <a className="text-yellow-400 text-2xl mb-2 truncate">{ locale==="en" ? "Le Wak's" : "عربية"}</a>
          <a className="text-md text-gray-500 dark:text-white">{ locale==="en" ? "Menu" : "عربية"}</a>
      </div>

      <div className="mx-12 flex flex-col items-center justify-center border-b-2 w-36 border-yellow-400">
          <Image src="/le-waks-logo.png" height={400} width={400} alt="logo" />
          <a className="text-yellow-400 text-xl mb-5 mt-5">{ locale==="en" ? "Le Wak's" : "عربية"}</a>
      </div>

      {/* <div className="inline-flex flex-col justify-center items-center mx-[50%]">
          <a className="text-gray-500 text-2xl mb-2">Le wak's</a>
          <a className="text-md text-gray-500">Menu</a>
      </div>*/}
      {loading? 
      <div className="flex justify-center items-center my-[10%]">
      <TailSpin 
        color="yellow"
        height={50}
        width={50}
      /></div> :      
      <Accordion />}

    </div>
  )
}
