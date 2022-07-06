import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiOutlineSelector } from 'react-icons/hi'
// import { AiOutlineMessage } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'

const lang = [
  { id: 1, name: 'English' },
  { id: 2, name: '      العربية' },
]

export default function Home() {
  const [selectedLang, setSelectedLang] = useState(lang[0])

  return (
    <div>
      <div className="w-72 mx-auto my-[10%]">
      <div className="mx-auto flex flex-col items-center justify-center w-56">
          <Image src="/le-waks-logo.png" height={1000} width={1000} alt="logo" />
      </div>
      <div className='my-5 text-center text-gray-500'>Welcome to Le Wak&apos;s</div>
      <Listbox value={selectedLang} onChange={setSelectedLang}>
        <div className="my-6 relative">
          <Listbox.Button className="relative w-full cursor-default rounded-3xl bg-white py-3 pl-8 pr-10 text-left shadow-lg focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedLang.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiOutlineSelector
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {lang.map((language, languageIdx) => (
                <Listbox.Option
                  key={languageIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? ' text-yellow-500' : 'text-gray-900'
                    }`
                  }
                  value={language}
                >
                  {({ selectedLang }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selectedLang ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {language.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <div className='flex justify-center mb-10'>
      <Link href="/menu">
      <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-light py-3 px-14 rounded-full">
      Tap to start
      </button>
      </Link>
      </div>
      {/* 
      <Link href="/feedback">
      <div className='flex justify-center'>
      <a className='flex flex-row text-red-600 underline cursor-pointer'><AiOutlineMessage className='mt-1 mr-2' />Give Feedback</a>
      </div>
      </Link>
      */}
    </div>

    </div>
  )
}
