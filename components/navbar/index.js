import { IoIosArrowBack } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link'

export default function Navbar() {
return (
    <div>
    <div className="flex justify-between px-12 py-4">
    <Link href="/">
    <button class="inline-flex items-center px-4 py-4 bg-gray-50 hover:bg-gray-100 text-white text-sm font-medium rounded-md shadow-lg">
    <IoIosArrowBack className="text-gray-900" />
    </button></Link>
    <button class="inline-flex items-center px-4 py-4 bg-gray-50 hover:bg-gray-100 text-white text-sm font-medium rounded-md shadow-lg">
    <GiHamburgerMenu className="text-gray-900" />
    </button>
    </div>
    </div>
)
}