import React, { useState } from "react";
import AccordionUI from "./ui";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      category: "Appetizers",
      dishes: [
        {
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "36.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 1,
          spcl: 1
        },
        {
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "45.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 1,
          spcl: 0
        },
        {
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "45.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 0,
          spcl: 1
        }
      ]
    },
    {
      id: 2,
      category: "Sandwiches",
      dishes: [
        {
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "36.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 0,
          spcl: 1
        },
      ]
    },
    {
      id: 3,
      category: "Sauces",
      dishes: [
        {
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "36.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 0,
          spcl: 0
        },
        {
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "45.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 1,
          spcl: 0
        },
      ]
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center sm:mx-5 md:mx-60 p-10 rounded-xl h-auto py-20">
      {data.map((data) => {
        return (
          <AccordionUI
            title={data.category}
            Id={data.id}
            dishes={data.dishes}
            Index={Index}
            setIndex={setIndex}
          ></AccordionUI>
        );
      })}
    </div>
  );
};
export default Accordion;