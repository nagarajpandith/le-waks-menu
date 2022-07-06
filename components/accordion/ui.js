import Image from 'next/image'
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Link from 'next/link'
import { motion } from 'framer-motion';
// import { GiFrenchFries, GiChickenOven, GiCheeseWedge } from "react-icons/gi"
// import { FaHamburger } from "react-icons/fa"
// import { BiDrink } from "react-icons/bi"

const AccordionUI = ({ title, dishes, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="mb-5 flex group cursor-pointer w-3/4 mx-auto h-16 justify-between  items-center p-2 mt-2 rounded-md bg-white hover:shadow-xl shadow-lg"
      >
        <div className="flex group cursor-pointer">
          <div className="text-black font-semibold pl-10">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {Index !== Id ? (
            <BsChevronDown className="w-6 h-6 text-black" />
          ) : (
            <BsChevronUp className="w-6 h-6 text-black" />
          )}
        </div>
      </div>

      {Index === Id && (
        dishes.map((dish) => {
        return (
        <motion.div key={dish.dishId} className="flex flex-row justify-between bg-white shadow-md pl-10  font-semibold text-black w-3/4 h-auto  rounded-md p-4 border-l-2 mb-2 "
        initial="pageInitial" 
        animate="pageAnimate" 
        variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
        }}
        whileHover={{
          position: 'relative',
          zIndex: 1,
          background: 'white',
          scale: 1.02,
          transition: {
            duration: .2
          }
        }}>
        <div className='inline-flex flex-col gap-y-3'>
          <Link href={`/dish/` + dish.dishId} >
          <a className='text-gray-700'>{dish.dish}</a>
          </Link>
          {/* <a className='text-gray-500 font-light'>{dish.desc}</a> */}
          <a className='text-yellow-400'>{dish.price} SAR</a>
          {/* <div className='inline-flex flex-row'>
          {dish.new? <div className='mr-2'><Image src="/new-badge.png" width={25} height={25} alt="new" /></div> : null}
          {dish.spcl? <div><Image src="/star-badge.png" width={25} height={25} alt="star" /></div> : null}
          </div> */}
        </div>
        <Link href={'/dish/' + dish.dishId} >
          <Image className="rounded-lg" src={dish.image} width={150} height={150} alt="dish-image" />
        </Link>
        </motion.div>
        );
        })
        )}
    </>
  );
};

export default AccordionUI;