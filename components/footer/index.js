import { AiFillInstagram, AiFillFacebook } from "react-icons/ai"
import Router from 'next/router' 

export default function Footer() {
return (
    <div className='flex flex-col gap-3 md:gap-5 text-gray-600 dark:text-yellow-300 m-3 justify-center items-center'>
    <hr className="w-[20%]" />
    <a className="text-gray-500 dark:text-white text-sm md:text-lg">Follow us out there!</a>
    <div className='flex flex-row mb-5 gap-5 text-2xl'>
    <AiFillInstagram onClick={() => Router.push("https://www.instagram.com/lewaksksa/")} className='hover:text-gray-900 cursor-pointer dark:hover:text-yellow-400' />
    <AiFillFacebook onClick={() => Router.push("https://www.facebook.com/profile.php?id=100082191512410")} className='hover:text-gray-900 cursor-pointer dark:hover:text-yellow-400' />
    </div>
    </div>
)
}