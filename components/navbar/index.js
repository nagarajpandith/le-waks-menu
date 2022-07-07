import { IoIosArrowBack } from "react-icons/io";
{/*import { GiHamburgerMenu } from "react-icons/gi";*/}
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter()
return (
    <div>
    <div className="flex justify-between px-12 py-4">
    <button onClick={() => router.back()} className="inline-flex items-center px-4 py-4 bg-gray-50 hover:bg-gray-100 text-white text-sm font-medium rounded-md shadow-lg">
    <IoIosArrowBack className="text-gray-900" />
    </button>
    {/*
    <button className="inline-flex items-center px-4 py-4 bg-gray-50 hover:bg-gray-100 text-white text-sm font-medium rounded-md shadow-lg">
    <GiHamburgerMenu className="text-gray-900" />
    </button>*/}
    </div>
    </div>
)
}