import Image from 'next/image'
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

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
        <div className="flex flex-row justify-between bg-white shadow-md pl-10  font-semibold text-black w-3/4 h-auto  rounded-md p-4 border-l-2 mb-2 ">
        <div className='inline-flex flex-col gap-y-3'>
          <a className='text-gray-700'>{dish.dish}</a>
          <a className='text-gray-500 font-light'>{dish.desc}</a>
          <a className='text-red-500'>₹{dish.price}</a>
          <div className='inline-flex flex-row'>
          {dish.new? <div className='mr-2'><Image src="/new-badge.png" width={25} height={25} /></div> : null}
          {dish.spcl? <div><Image src="/star-badge.png" width={25} height={25} /></div> : null}
          </div>
        </div>
          <Image className="rounded-lg" src={dish.image} width={150} height={150} />
        </div>
        );
        })
        )}
    </>
  );
};

export default AccordionUI;