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
          dishId: "app01",
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "36.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 1,
          spcl: 1
        },
        {
          dishId: "app02",
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "45.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 1,
          spcl: 0
        },
        {
          dishId: "app03",
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
          dishId: "sand01",
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
          dishId: "sauce01",
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "36.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 0,
          spcl: 0
        },
        {
          dishId: "sauce02",
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "45.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 1,
          spcl: 0
        },
      ]
    },
    {
      id: 4,
      category: "Ramadan Items",
      dishes: [
        {
          dishId: "ram01",
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "36.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 0,
          spcl: 0
        },
        {
          dishId: "ram02",
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "45.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 1,
          spcl: 0
        },
      ]
    },
    {
      id: 5,
      category: "Drinks",
      dishes: [
        {
          dishId: "drink01",
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "36.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 0,
          spcl: 0
        },
        {
          dishId: "drink02",
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "45.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 1,
          spcl: 0
        },
      ]
    },
    {
      id: 6,
      category: "Boxes",
      dishes: [
        {
          dishId: "box01",
          dish: "Caesar Salad",
          image: "https://unsplash.it/100/100",
          price: "36.00",
          desc: "Caesar Salad Served with Chicken Shawarma",
          new: 0,
          spcl: 0
        },
        {
          dishId: "box02",
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
            key={data.id}
          ></AccordionUI>
        );
      })}
    </div>
  );
};
export default Accordion;