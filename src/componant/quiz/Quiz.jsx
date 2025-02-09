import One from "./One";
import Two from "./Two";
import Three from "./Three";

import Four from "./Four";
import Five from "./Five";
import Overlays from "./overlay/Overlays";
import { useState } from "react";

const Quiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
    console.log("isOpen");
  };
  const close = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Overlays isOpen={isOpen} close={close} />
      <div className="">
        <button
          onClick={open}
          className="cursor-pointer text-white bg-amber-400"
        >
          Button
        </button>
        {/* <One /> */}
        {/* <Two /> */}
        {/* <Three /> */}
        {/* <Four /> */}
        {/* <Five /> */}
      </div>
    </>
  );
};

export default Quiz;
