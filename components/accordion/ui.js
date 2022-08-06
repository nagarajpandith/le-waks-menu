import Image from 'next/image'
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineFire } from "react-icons/hi"
import { useState } from 'react';
import { useRouter } from "next/router"
import { GiFrenchFries, GiChickenOven, GiSaucepan } from "react-icons/gi"
import { FaHamburger } from "react-icons/fa"
import { BiDrink } from "react-icons/bi"
import ReadMoreReact from 'read-more-react';

const AccordionUI = ({ title, dishes, ar, Id }) => {
  const [ show, setShow ] = useState(false)
  const router = useRouter()
  const { locale } = router;
  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="mb-5 flex group cursor-pointer w-full md:w-3/4 mx-auto h-12 md:h-16 justify-between  items-center p-2 mt-2 rounded-md bg-white shadow-lg dark:bg-gray-600 hover:shadow-yellow-300 transition-shadow ease-in-out delay-100 dark:shadow-none"
      >
        <div className="flex group cursor-pointer">
          <div className='h-7 w-7 ml-2 md:ml-5 text-2xl md:text-3xl text-black dark:text-yellow-300'>
          {Id == "1"? <GiFrenchFries /> : Id == "2"? <FaHamburger /> : Id == "3"? <GiChickenOven /> : Id == "4" ? <GiSaucepan /> : <BiDrink />}
          </div>
          <div className="text-black font-semibold pl-5 md:pl-10 dark:text-white text-sm md:text-xl">
          {locale === "en"? title :ar}
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
        <motion.div key={dish.dishId} className="flex flex-row justify-between items-center bg-white md:pl-10 font-semibold text-black w-full md:w-3/4 h-auto rounded-md p-4 shadow-md mb-3 dark:bg-gray-500"
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
        <div className='inline-flex flex-col gap-y-3 w-[75%] md:w-[50%]'>
          <Link href={`/dish/` + dish.dishId} >
          <a className='text-gray-700 dark:text-white text-sm md:text-lg'>
            {locale === "en"?
            dish.dish
            :
            dish.ar}
          </a>
          </Link>
          {/* <a className='text-gray-500 font-light'>{dish.desc}</a> */}
          <a className='text-yellow-400 dark:text-yellow-300 text-sm md:text-lg'>{locale === "en"? `${dish.price} SAR`  : dish.ar_pr}</a>
          {title==="Burgers"?
          <a className='text-gray-700 dark:text-white text-xs md:text-md font-normal'>
          <ReadMoreReact 
          min={30}
          ideal={35}
          max={40}
          readMoreText={<a className='cursor-pointer text-bold text-yellow-400 dark:text-yellow-300'>Read More</a>}
          text={
            locale === "en"?
            dish.ingredients.toString()
            :
            dish.ar_ing.toString()
          } />
          </a>
          :
          null
          }
          <div className='inline-flex flex-row'>
          <a className='text-gray-400 font-light text-xs dark:text-white md:text-lg'>{dish.cal} Calories</a>
          <HiOutlineFire className="text-gray-500 w-7 h-4 md:h-5 dark:text-white text-sm md:text-lg md:mt-1" />
          </div>
          {/* <div className='inline-flex flex-row'>
          {dish.new? <div className='mr-2'><Image src="/new-badge.png" width={25} height={25} alt="new" /></div> : null}
          {dish.spcl? <div><Image src="/star-badge.png" width={25} height={25} alt="star" /></div> : null}
          </div> */}
        </div>
        <Link href={'/dish/' + dish.dishId} >
          <Image className="rounded-lg w-[25%] md:w-[50%]" src={dish.image} width={150} height={150} alt="dish-image" />
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