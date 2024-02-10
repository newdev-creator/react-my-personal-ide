import React from "react";

export default function ButtonTab({ id, toggleTab, buttonContent, imgUrl }) {
  return (
    <button
      onClick={() => toggleTab(id)}
      className="flex items-center px-5 py-3 hover:bg-slate-600 focus:bg-slate-600 outline-none"
    >
      <img className="w-5" src={imgUrl} alt="" />
      <span className="ml-3 text-slate-100 text-md">{buttonContent}</span>
    </button>
  );
}
