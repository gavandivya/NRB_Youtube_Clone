import React from "react";

const Singletag = ({ tagData }) => {
  return (
    <button className="btn btn-sm btn-light col h-10 w-10 text-xs m-1">
      {tagData}
    </button>
  );
};

export default Singletag;
