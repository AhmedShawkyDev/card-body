import React from "react";
interface InputProps {
  step4: string;
}
interface BodyFourProps {
  setPops: (value: string) => void;
  input: InputProps;
  setInput: (input: InputProps) => void;
}
const BodyFour: React.FC<BodyFourProps> = ({ setPops, input, setInput }) => {
  const five = () => {
    setPops("com5");
    localStorage.setItem("step4", JSON.stringify(input));
    console.log(input);
  };
  const change1 = () => {
    setInput({ ...input, step4: "option1" });
  };
  const change2 = () => {
    setInput({ ...input, step4: "option2" });
  };
  const change3 = () => {
    setInput({ ...input, step4: "option3" });
  };
  const change4 = () => {
    setInput({ ...input, step4: "option4" });
  };
  return (
    <div>
      <div className="bg-neutral-300 h-[8px] w-[534px] mt-6 rounded-b-xl  rounded-t-xl mx-auto my-auto  ">
        <div className="bg-[#CEA768] h-[8px] w-[424px] mt-6 rounded-b-xl  rounded-t-xl  "></div>
      </div>
      <h1 className="flex justify-center items-center text-black mt-3 font-light font-[Roboto] text-[16px]">
        Step 4/5
      </h1>
      <h1 className=" sm:text-[20px] md:text-[24px] text-black flex justify-center items-center font-normal font-[Raleway] mt-2 text-[24px]">
        {" "}
        Set Your Budget Range (in AED)
      </h1>
      <h1 className=" sm:text-[16px] md:text-[18px] text-center text-[#6B665F] text-lg font-[Raleway] flex justify-center items-center mt-2 text-[18px]">
        {" "}
        Set your budget range in AED to help us provide the best solutions for
        your needs.
      </h1>
      <div className="flex gap-6 mt-4 flex-wrap justify-center items-center">
        <label
          htmlFor="option1"
          className={`flex justify-start items-center w-[349px] h-[54px] text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] cursor-pointer ${
            input.step4 === "option1" ? " border-[#CEA768]" : ""
          }`}
        >
          <input
            onChange={change1}
            value="option1"
            id="option1"
            name="radio-group4"
            type="radio"
            className=" mr-5 w-[17px] h-[17px] cursor-pointer flex items-center justify-center text-[#CEA768] appearance-none  border-2 border-gray-400 hover:border-[#CEA768] rounded-full checked:bg-[#CEA768] checked:border-transparent focus:outline-3 focus:outline-offset-3 focus:outline-[#CEA768] active:bg-[#CEA768] ml-2"
          />
          <h1
            className={`flex justify-center font-[Roboto] mt-1 font-light items-center text-[18px]
              ${input.step4 === "option1" ? "text-[#A37130] text-[18px]" : ""}`}
          >
            Less than 500k
          </h1>
        </label>
        <label
          htmlFor="option2"
          className={`flex justify-start items-center w-[349px] h-[54px] text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] cursor-pointer  ${
            input.step4 === "option2" ? " border-[#CEA768]" : ""
          }`}
        >
          <input
            onChange={change2}
            value="option2"
            id="option2"
            name="radio-group4"
            type="radio"
            className=" mr-5 w-[17px] h-[17px] cursor-pointer flex items-center justify-center text-[#CEA768] appearance-none  border-2 border-gray-400 hover:border-[#CEA768] rounded-full checked:bg-[#CEA768] checked:border-transparent focus:outline-3 focus:outline-offset-3 focus:outline-[#CEA768] active:bg-[#CEA768] ml-2"
          />
          <h1
            className={`flex justify-center font-[Roboto] mt-1 font-light items-center text-[18px] ${
              input.step4 === "option2" ? "text-[#A37130] text-[18px]" : ""
            }`}
          >
            500k–1M
          </h1>
        </label>
        <label
          htmlFor="option3"
          className={`flex justify-start items-center w-[349px] h-[54px] text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] cursor-pointer ${
            input.step4 === "option3" ? " border-[#CEA768]" : ""
          }`}
        >
          <input
            onChange={change3}
            value="option3"
            id="option3"
            name="radio-group4"
            type="radio"
            className=" mr-5 w-[17px] h-[17px] cursor-pointer flex items-center justify-center text-[#CEA768] appearance-none  border-2 border-gray-400 hover:border-[#CEA768]  rounded-full checked:bg-[#CEA768] checked:border-transparent focus:outline-3 focus:outline-offset-3 focus:outline-[#CEA768] active:bg-[#CEA768] ml-2"
          />
          <h1
            className={`flex justify-center font-[Roboto] mt-1 font-light items-center text-[18px] ${
              input.step4 === "option3" ? "text-[#A37130] " : ""
            }`}
          >
            1M–2M
          </h1>
        </label>
        <label
          htmlFor="option4"
          className={`flex justify-start items-center w-[349px] h-[54px] text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] cursor-pointer ${
            input.step4 === "option4" ? " border-[#CEA768]" : ""
          }`}
        >
          <input
            onChange={change4}
            value="option4"
            id="option4"
            name="radio-group4"
            type="radio"
            className=" mr-5 w-[17px] h-[17px] cursor-pointer flex items-center justify-center text-[#CEA768] appearance-none  border-2 border-gray-400 hover:border-[#CEA768] rounded-full checked:bg-[#CEA768] checked:border-transparent focus:outline-3 focus:outline-offset-3 focus:outline-[#CEA768] active:bg-[#CEA768] ml-2"
          />
          <h1
            className={`flex justify-center font-[Roboto] mt-1 font-light items-center text-[18px] ${
              input.step4 === "option4" ? "text-[#A37130] " : ""
            }`}
          >
            More Than 2M
          </h1>
        </label>
      </div>
      <div className=" lg:m-5 xl:mt-9 md:my-5 sm:my-5 mt-16 font-semibold flex justify-center items-center">
        <button
          onClick={five}
          className=" hover:text-[#B78647] hover:bg-none hover:bg-white hover:border-2 hover:border-[#B78647] hover:duration-100 mt-6 text-white w-[25%] lg:w-auto bg-linear-to-r from-[#E2C385] to-[#B78647] text-[16px] whitespace-nowrap font-semibold rounded-lg px-4 md:px-[44px] py-[13px] text-center cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BodyFour;
