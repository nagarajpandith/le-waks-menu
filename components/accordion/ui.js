import Image from 'next/image'
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineFire } from "react-icons/hi"
import { useState } from 'react';
// import { GiFrenchFries, GiChickenOven, GiCheeseWedge } from "react-icons/gi"
// import { FaHamburger } from "react-icons/fa"
// import { BiDrink } from "react-icons/bi"

const AccordionUI = ({ title, dishes, Id, Index, setIndex }) => {
  const [ show, setShow ] = useState(false)
  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="mb-5 flex group cursor-pointer w-3/4 mx-auto h-16 justify-between  items-center p-2 mt-2 rounded-md bg-white hover:shadow-xl shadow-lg dark:bg-gray-600"
      >
        <div className="flex group cursor-pointer">
          <div className="text-black font-semibold pl-10 dark:text-white">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {!show?(
            <BsChevronDown className="w-6 h-6 text-black" />
          ) : (
            <BsChevronUp className="w-6 h-6 text-black" />
          )}
        </div>
      </div>

      { show &&
      dishes.map((dish) => {
        return (
        <AnimatePresence key={dish.dishId}>
        <motion.div key={dish.dishId} className="flex flex-row justify-between bg-white pl-10 font-semibold text-black w-3/4 h-auto rounded-md p-4 shadow-md mb-3 dark:bg-gray-500"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        whileHover={{
          position: 'relative',
          zIndex: 1,
          scale: 1.02,
          transition: {
            duration: .2
          }
        }}>
        <div className='inline-flex flex-col gap-y-3 '>
          <Link href={`/dish/` + dish.dishId} >
          <a className='text-gray-700 dark:text-white'>{dish.dish}</a>
          </Link>
          {/* <a className='text-gray-500 font-light'>{dish.desc}</a> */}
          <a className='text-yellow-400 dark:text-yellow-300'>{dish.price} SAR</a>
          <div className='inline-flex flex-row'>
          <a className='text-gray-400 font-light text-sm dark:text-white'>{dish.cal} Calories</a>
          <HiOutlineFire className="text-gray-500 w-7 h-5 dark:text-white" />
          </div>
          {/* <div className='inline-flex flex-row'>
          {dish.new? <div className='mr-2'><Image src="/new-badge.png" width={25} height={25} alt="new" /></div> : null}
          {dish.spcl? <div><Image src="/star-badge.png" width={25} height={25} alt="star" /></div> : null}
          </div> */}
        </div>
        <Link href={'/dish/' + dish.dishId} >
          <Image className="rounded-lg" src={dish.image} width={150} height={150} alt="dish-image" />
        </Link>
        </motion.div>
        </AnimatePresence>
        );
        })
        }
    </>
  );
};

export default AccordionUI;