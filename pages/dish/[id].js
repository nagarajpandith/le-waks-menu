import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import Image from "next/image"
import { HiOutlineFire } from "react-icons/hi"
import { motion } from "framer-motion"

export default function Details() {
  const router = useRouter()
  const { locale } = router
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
  {
    details.map(detail=>{
      return(
      detail.dishes.map(data=>{
        if (query === data.dishId)
        return<>
          <div key={data.dishId}>
            <motion.div 
            whileHover={{
              position: 'relative',
              zIndex: 1,
              scale: 1.03,
              transition: {
                duration: .2
              }
            }}
            className="flex justify-center items-center m-10">
            <Image className="rounded-xl" src={data.image} width={400} height={400} alt="food image" />
            </motion.div>
            <div className="flex justify-center items-center flex-col gap-y-3">
            <div className="text-yellow-400 font-bold text-lg md:text-2xl mx-5 text-center">
              {locale === "en"? data.dish : data.ar}
            </div>
              <a className="text-gray-900 text-md lg:text-lg dark:text-white">{data.price} SAR</a>
            <div className="inline-flex flex-row">
              <HiOutlineFire className="text-gray-500 w-7 h-5 dark:text-white" />
              <a className="text-gray-500 font-light dark:text-white">{data.cal} Calories</a>
            </div>
            {/* <div>
              <a className="text-gray-400">Description</a>
            </div> */}
            </div>
          </div>
        </>
      })
    )})
  } 
  </>
  )
}