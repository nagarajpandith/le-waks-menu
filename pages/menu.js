import Image from 'next/image';
import Accordion from '../components/accordion';
import { useRouter } from 'next/router';
import Footer from '../components/footer';

export default function Menu() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div>
      <div className="mx-auto flex flex-col items-center justify-center border-b-2 w-36 border-yellow-400">
        <Image src="/le-waks-logo.png" height={400} width={400} alt="logo" />
      </div>

      <div className="mt-4 flex flex-col justify-center items-center mx-[50%]">
        <a className="text-yellow-400 text-2xl mb-2 truncate">
          {locale === 'en' ? "Le Wak's" : 'لى واكس'}
        </a>
        <a className="text-md text-gray-500 dark:text-white">
          {locale === 'en' ? 'Menu' : 'قائمة'}
        </a>
      </div>

      {/* <div className="inline-flex flex-col justify-center items-center mx-[50%]">
          <a className="text-gray-500 text-2xl mb-2">Le wak's</a>
          <a className="text-md text-gray-500">Menu</a>
      </div>*/}
      <Accordion />
      <Footer />
    </div>
  );
}
