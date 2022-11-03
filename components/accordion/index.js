import React, { useState, useEffect } from 'react';
import AccordionUI from './ui';
import { data } from '../../data/dishes';

const Accordion = () => {
  const details = data;
  return (
    <div className="flex flex-col justify-center items-center sm:mx-5 md:mx-60 p-10 rounded-xl h-auto py-10">
      {details.map((data) => {
        return (
          <AccordionUI
            title={data.category}
            Id={data.id}
            dishes={data.dishes}
            key={data.id}
            ar={data.ar}
            icon={data.icon}
          ></AccordionUI>
        );
      })}
    </div>
  );
};
export default Accordion;
