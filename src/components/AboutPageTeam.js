import React from "react";
import data from "../data/Data";

export default function AboutTeamComponents() {
  return (
    <div>
      <div
        id="MaincontentRoot"
        className="overflow-hidden flex flex-col gap-4 w-full items-center px-16"
      >
        <div
          id="HFeaturesection"
          className="text-4xl font-bold  text-[#252b42]"
        >
          Meet Our Team
        </div>
        <div id="Paragraph" className="text-center text-[#737373] font-bold">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </div>

        {/* Maplenen yer */}

        <div className="w-[90rem] mobile:w-[20rem] mobile:flex-wrap mobile:gap-y-12 flex justify-around mt-16">
          {data.AboutPageTeamCard.map((eleman, index) => (
            <div key={index} className="w-[20rem] cursor-pointer">
              <img src={eleman.resim} alt="resim" />
              <h6 className="text-[#252B42] font-bold items-center text-center">
                {eleman.username}
              </h6>
              <h5 className="text-[#737373] font-semibold items-center text-center mt-4">
                {eleman.profession}
              </h5>
              <div className="flex justify-center mx-auto mt-4 w-24 gap-2 cursor-pointer">
                <img src={eleman.facebook} alt="Face" />
                <img src={eleman.instagram} alt="Face" />
                <img src={eleman.twitter} alt="Face" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
