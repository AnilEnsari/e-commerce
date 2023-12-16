import React from "react";
import Brand1 from "../assets/fa-brands-1.png";
import Brand2 from "../assets/fa-brands-2.png";
import Brand3 from "../assets/fa-brands-3.png";
import Brand4 from "../assets/fa-brands-4.png";
import Brand5 from "../assets/fa-brands-5.png";
import Brand6 from "../assets/fa-brands-6.png";

export default function Brands() {
  return (
    <div className="flex flex-wrap flex-row mobile:flex-col mobile:gap-y-12 justify-between mx-48 my-24">
      <img alt="brand" className="object-contain" src={Brand1}></img>
      <img alt="brand" className="object-contain" src={Brand2}></img>
      <img alt="brand" className="object-contain" src={Brand3}></img>
      <img alt="brand" className="object-contain" src={Brand4}></img>
      <img alt="brand" className="object-contain" src={Brand5}></img>
      <img alt="brand" className="object-contain" src={Brand6}></img>
    </div>
  );
}
