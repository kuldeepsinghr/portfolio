import React from "react";

function ServiceItem({ title, icon, descreption }) {
  return (
    <>
      <div className="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 hover:dark:bg-slate-700 hover:-translate-y-2 transform rounded-md transition p-5">
        <div className="text-gray-800 dark:text-gray-300 w-6 h-6 mb-3">
          {icon}
        </div>
        <h1 className="font-semibold text-lg text-gray-600 dark:text-gray-200">
          {title}
        </h1>
        <p className="text-md text-gray-600 dark:text-gray-300">
          {descreption}
        </p>
      </div>
    </>
  );
}

export default ServiceItem;
