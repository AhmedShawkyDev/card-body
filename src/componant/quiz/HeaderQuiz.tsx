import { FaArrowLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import BodyQuiz from "./BodyQuiz";
import "../../index.css";
import BodyTwo from "./BodyTwo";
import BodyThree from "./BodyThree";
import BodyFour from "./BodyFour";
import BodyFive from "./BodyFive";
import { useState } from "react";
interface HeaderProps {
  isClose: () => void;
}
interface InputState {
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  name: string;
  email: string;
  phone: string;
}
const Header: React.FC<HeaderProps> = ({ isClose }) => {
  const [pops, setPops] = useState<string>("com1");
  const [input, setInput] = useState<InputState>({
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    name: "",
    email: "",
    phone: "",
  });
  const back = () => {
    const steps = ["com1", "com2", "com3", "com4", "com5"];
    const currentIndex = steps.indexOf(pops);
    if (currentIndex > 0) {
      setPops(steps[currentIndex - 1]);
    } else {
      isClose();
    }
  };
  return (
    <div className="flex flex-col justify-center items-center modal position-relative opacity-100">
      <div className=" h-300 xl:w-[1062px] xl:h-[626px] xl:text-[24px] flex-col justify-between rounded-3xl bg-white text-white w-3/4">
        <div className="xl:w-full xl:h-[83px] lg:w-full lg:h-[83px] md:w-[full] md:h-[70px] sm:w-full sm:h-[60px] h-[60px] w-full bg-[#CEA768] flex justify-center items-center rounded-tr-3xl rounded-tl-3xl">
          <div
            className=" 
            
          flex justify-between items-center space-x-1 w-full h-[40px]
          xl:flex xl:justify-between xl:w-[982px] xl:h-[35px] 
          lg:flex lg:justify-between lg:w-[800px] lg:h-[35px] 
          md:flex md:justify-between md:w-[750px] md:h-[40px] 
          sm:flex sm:justify-between sm:w-[600px] sm:h-[40px]"
          >
            <button
              onClick={back}
              className=" flex justify-center items-center cursor-pointer hover:text-[#CEA768] hover:bg-white hover:rounded-full hover:duration-100 md:w-[120px]"
            >
              <FaArrowLeft className=" ml-3 xl:mr-3 xl:mt-1 xl:ml-2 lg:mr-3 lg:mt-1 lg:ml-7 md:mr-3 md:mt-1 md:ml-7 sm:mr-3 sm:mt-1 sm:ml-5 " />
              <div className="mt-0 font-normal md:text-[24px] sm:text-[20px] ">
                Back
              </div>
            </button>
            <h1 className="font-semibold  mr-2 md:mr-11 md:text-[24px]   ">
              Speak to Our Experts
            </h1>
            <button onClick={isClose}>
              <IoClose className=" mr-2 mt-1 text-[20px] md:text-[30px] cursor-pointer hover:text-[#CEA768] hover:bg-white  hover:rounded-full hover:duration-100 " />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
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
  );
};

export default Header;
