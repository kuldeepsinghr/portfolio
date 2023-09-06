import React from "react";
import SerctionTitle from "./SerctionTitle";
import ServData from "../data/ServData";
import ServiceItem from "./ServiceItem";

function Services() {
  return (
    <div className="py-12">
      <SerctionTitle>Our Services</SerctionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ServData.map((ServData) => {
          return (
            <>
              <ServiceItem
               key={ServData.title}
               title={ServData.title} 
               descreption={ServData.descreption} 
               icon={ServData.icon}/>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
