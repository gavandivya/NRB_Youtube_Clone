import React from "react";

const Singletag = ({ tagData }) => {
  return (
    <button className="btn btn-sm bg-gray-200 col h-8 text-xs m-1">
      {tagData}
    </button>
  );
};

export default Singletag;
