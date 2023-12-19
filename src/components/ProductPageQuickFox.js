import React from "react";
import quickFoxResim from "../assets/quickFoxresim.png";
import sagOk from "../assets/sagiconProdut.png";

export default function ProductPageQuickFox() {
  return (
    <div className="w-[70rem] mobile:w-[20rem] flex-wrap mobile:flex-col mobile:flex-wrap mx-auto flex pt-10 pb-20">
      <img alt="quickfox" src={quickFoxResim} />
      <div className="w-[20rem] mx-4 mobile:mx-0 mobile:flex mobile:flex-col">
        <h1 className="text-[#252B42] text-[1.5rem] mobile:text-center font-bold mb-8">
          the quick fox jumps over{" "}
        </h1>
        <p className="text-[#737373] pb-4">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <p className="text-[#737373] pb-4">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <p className="text-[#737373] ">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
      </div>
      <div>
        <h1 className="text-[#252B42] mobile:text-center text-[1.5rem] font-bold">
          the quick fox jumps over{" "}
        </h1>
        <div className="flex pt-4">
          <img src={sagOk} alt="sagok" className="mobile:w-4" />
          <p className="pl-4">the quick fox jumps over the lazy dog</p>
        </div>
        <div className="flex pt-4">
          <img src={sagOk} alt="sagok" className="mobile:w-4" />
          <p className="pl-4">the quick fox jumps over the lazy dog</p>
        </div>
        <div className="flex pt-4">
          <img src={sagOk} alt="sagok" className="mobile:w-4" />
          <p className="pl-4">the quick fox jumps over the lazy dog</p>
        </div>
        <div className="flex pt-4">
          <img src={sagOk} alt="sagok" className="mobile:w-4" />
          <p className="pl-4">the quick fox jumps over the lazy dog</p>
        </div>
        <br />
        <div className="flex pt-4">
          <p className="text-[#252B42] mobile:mx-auto text-[1.5rem] font-bold">
            the quick fox jumps over{" "}
          </p>
        </div>
        <div className="flex pt-4">
          <img src={sagOk} alt="sagok" className="mobile:w-4" />
          <p className="pl-4">the quick fox jumps over the lazy dog</p>
        </div>
        <div className="flex pt-4">
          <img src={sagOk} alt="sagok" className="mobile:w-4" />
          <p className="pl-4">the quick fox jumps over the lazy dog</p>
        </div>
        <div className="flex pt-4">
          <img src={sagOk} alt="sagok" className="mobile:w-4" />
          <p className="pl-4">the quick fox jumps over the lazy dog</p>
        </div>
      </div>
    </div>
  );
}
