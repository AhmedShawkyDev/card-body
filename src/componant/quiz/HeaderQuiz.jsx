import { FaArrowLeft } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import BodyQuiz from "./BodyQuiz";
import "../../index.css";
const Header = ({ close }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center modal ">
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
              <div className=" flex justify-center items-center cursor-pointer ">
                <FaArrowLeft className="mr-3 mt-1 ml-2 " />
                <div className="mt-0 font-normal"> Back</div>
              </div>

              <h1 className="font-semibold mr-11">Speak to Our Experts</h1>
              <button onClick={close}>
                <IoClose className="mt-1 text-[30px] cursor-pointer" />
              </button>
            </div>
          </div>
          <div className=" flex justify-center items-center ">
            <BodyQuiz />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
