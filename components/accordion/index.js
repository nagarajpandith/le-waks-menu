import React, { useState, useEffect } from "react";
import AccordionUI from "./ui";

const Accordion = () => {
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
    <div className="flex flex-col justify-center items-center sm:mx-5 md:mx-60 p-10 rounded-xl h-auto py-10">
      {details.map((data) => {
        return (
          <AccordionUI
            title={data.category}
            Id={data.id}
            dishes={data.dishes}
            key={data.id}
          ></AccordionUI>
        );
      })}
    </div>
  );
};
export default Accordion;