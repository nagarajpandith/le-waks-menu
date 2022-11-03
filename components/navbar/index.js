import { IoIosArrowBack, IoIosSunny, IoMdMoon } from 'react-icons/io';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderTheme = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return <IoIosSunny onClick={() => setTheme('light')} />;
    } else {
      return <IoMdMoon onClick={() => setTheme('dark')} />;
    }
  };
  return (
    <div>
      <div className="flex justify-between p-5 items-center">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center px-4 py-4 bg-gray-50 hover:bg-gray-100 text-white text-sm font-medium rounded-md shadow-lg dark:bg-yellow-300"
        >
          <IoIosArrowBack className="text-gray-900" />
        </button>
        <div className="text-gray-700 dark:text-yellow-300 text-2xl cursor-pointer">
          {renderTheme()}
        </div>
        {/*
    <button className="inline-flex items-center px-4 py-4 bg-gray-50 hover:bg-gray-100 text-white text-sm font-medium rounded-md shadow-lg">
    <GiHamburgerMenu className="text-gray-900" />
    </button>*/}
      </div>
    </div>
  );
}
