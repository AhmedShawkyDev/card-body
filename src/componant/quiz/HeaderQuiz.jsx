import { FaArrowLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import BodyQuiz from "./BodyQuiz";
import "../../index.css";
import BodyTwo from "./BodyTwo";
import BodyThree from "./BodyThree";
import BodyFour from "./BodyFour";
import BodyFive from "./BodyFive";
import { useState } from "react";

const Header = ({ isClose }) => {
  const [pops, setPops] = useState("com1");
  const [input, setInput] = useState({
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    name: "",
    email: "",
    phone: "",
  });
  // let step5 = JSON.parse(localStorage.getItem("step5"));

  return (
    <>
      <div className="flex flex-col justify-center items-center modal position-relative opacity-100">
        <div
          className="w-[1062px] h-[626px]  
      text-[24px] text-white 
       flex-col justify-between rounded-3xl bg-white"
        >
          <div
            className="w-full h-[83px] bg-[#CEA768]
       flex justify-center items-center rounded-tr-3xl rounded-tl-3xl"
          >
            <div className="flex w-[982px] h-[35px]  justify-between">
              <button className=" flex justify-center items-center cursor-pointer hover:text-[#CEA768] hover:bg-white hover:rounded-full hover:duration-100 ">
                <FaArrowLeft className="mr-3 mt-1 ml-2   " />
                <div className="mt-0 font-normal"> Back</div>
              </button>
              <h1 className="font-semibold mr-11">Speak to Our Experts</h1>
              <button onClick={isClose}>
                <IoClose className="mt-1 text-[30px] cursor-pointer hover:text-[#CEA768] hover:bg-white  hover:rounded-full hover:duration-100 " />
              </button>
            </div>
          </div>
          <div className=" flex justify-center items-center ">
            {pops === "com1" && (
              <BodyQuiz setPops={setPops} input={input} setInput={setInput} />
            )}
            {pops === "com2" && (
              <BodyTwo setPops={setPops} input={input} setInput={setInput} />
            )}
            {pops === "com3" && (
              <BodyThree setPops={setPops} input={input} setInput={setInput} />
            )}
            {pops === "com4" && (
              <BodyFour setPops={setPops} input={input} setInput={setInput} />
            )}
            {pops === "com5" && (
              <BodyFive input={input} setInput={setInput} isClose={isClose} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
