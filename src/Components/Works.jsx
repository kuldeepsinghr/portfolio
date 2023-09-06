import React from "react";
import SerctionTitle from "./SerctionTitle";
import WorkItem from "./WorkItem";
import WrkData from "../data/WrkData";

function Works() {
  return (
    <>
      <div className="py-12">
        <SerctionTitle id="works">Recent Works</SerctionTitle>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {WrkData.map((WrkData) => (
            <WorkItem 
            key={WrkData.title} 
            imgUrl={WrkData.imgUrl} 
            title={WrkData.title} 
            tech={WrkData.tech}
            workUrl={WrkData.workUrl}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default Works;
