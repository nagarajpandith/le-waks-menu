import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import Image from "next/image"
import { HiOutlineFire } from "react-icons/hi"

export default function Details() {
  const router = useRouter()
  const query = router.query.id
  
  const [details, setDetails] = useState([])
  const fetchDetails = async() => {
    const res = await fetch('/api/dishes')
    const data = await res.json()
    setDetails(data)
  }

  useEffect(()=> {
      fetchDetails()
  }, [])

  return (
  <>
  {/* {
    details.map(detail=>{
      return<>
        <div key={detail.id}>
          {detail.dishes[0].image}
        </div>
      </>
    })
  } */}
  <div>
    <div className="flex justify-center items-center mb-5">
    <Image className="rounded-xl" src="https://unsplash.it/400/400" width={400} height={400} alt="food image" />
    </div>
    <div className="flex justify-center items-center flex-col gap-y-3">
    <div className="text-yellow-400 font-bold text-2xl">
      Details Page in Progress...
    </div>
      <a className="text-gray-900 text-lg">Price</a>
    <div className="inline-flex flex-row">
      <HiOutlineFire className="text-gray-500 w-7 h-5" />
      <a className="text-gray-500">Calories</a>
    </div>
    {/* <div>
      <a className="text-gray-400">Description</a>
    </div> */}
    </div>
  </div>
  </>
  )
}