import React from "react";

const Error = ({ message }) => {
  return (
    <div className="py-10 px-5">
      <div
        className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
        role="alert"
      >
        <p className="font-bold">Error</p>

        <p>{message}</p>
      </div>
    </div>
  );
};

export default Error;
