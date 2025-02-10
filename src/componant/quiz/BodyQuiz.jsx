import img1 from "../../assets/1.png";
import img2 from "../../assets/2.jpg";
const BodyQuiz = ({ setPops, input, setInput }) => {
  const two = () => {
    setPops("com2");
    localStorage.setItem("step1", JSON.stringify(input));
    console.log(input);
  };
  const change1 = () => {
    setInput({ ...input, step1: "option1" });
  };
  const change2 = () => {
    setInput({ ...input, step1: "option2" });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <>
      <div className="cursor-pointer">
        <div className="bg-neutral-300 h-[8px] w-[534px] mt-10 rounded-b-xl  rounded-t-xl mx-auto my-auto  ">
          <div className="bg-[#CEA768] h-[8px] w-[106px] mt-10 rounded-b-xl  rounded-t-xl  "></div>
        </div>
        <h1 className="flex justify-center items-center text-black mt-3 font-light font[Roboto]">
          Step 1/5
        </h1>
        <h1 className="text-black flex justify-center items-center font-normal font-[Raleway]">
          Define Your Property Goal
        </h1>
        <h1 className="text-[#6B665F] text-lg font-[Raleway] flex justify-center items-center">
          Are you planning to buy your dream home or grow your investment
          portfolio?
        </h1>
        <form onSubmit={handelSubmit} value={input} className="flex gap-6 mt-3">
          <label
            htmlFor="option1"
            className={`h-[263px] cursor-pointer text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] 
              ${input.step1 === "option1" ? "border-[#CEA768]" : ""}`}
          >
            <input
              id="option1"
              onChange={change1}
              checked={input === "option1"}
              value="option1"
              name="radio-group1"
              type="radio"
              className="appearance-none visibility-hidden "
            />
            <img
              className=" w-[326px] h-[208px] bg-cover rounded-xl mt-[-35px]"
              src={img1}
              alt=""
            />
            <h1
              className={` flex justify-center font-[Raleway] mt-1 font-normal text-[16px] ${
                input.step1 === "option1" ? "text-[#CEA768]" : ""
              }`}
            >
              Personal Use
            </h1>
          </label>
          <label
            htmlFor="option2"
            className={`h-[263px] cursor-pointer text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] 
                ${input.step1 === "option2" ? "border-[#CEA768] " : ""} `}
          >
            <input
              id="option2"
              onChange={change2}
              checked={input === "option2"}
              value="option2"
              name="radio-group1"
              type="radio"
              className="appearance-none "
            />
            <img
              className=" w-[326px] h-[208px] bg-cover rounded-xl mt-[-35px]"
              src={img2}
              alt=""
            />
            <h1
              className={` flex justify-center font-[Raleway] mt-1 font-normal text-[16px] ${
                input.step1 === "option2" ? "text-[#CEA768]" : ""
              }`}
            >
              Investment
            </h1>
          </label>
        </form>

        <div
          className="
      mt-3
      font-semibold
      flex justify-center items-center"
        >
          <button
            onClick={two}
            // className="cursor-pointer  bg-linear-to-r from-[#E2C385] to-[#B78647] text-[16px]
            // w-[161px] h-[48px] rounded-[8px] px-[18px]
            // py-[32px] flex justify-center items-center font-normal font-[Raleway] text-white"
            className="text-white w-full lg:w-auto bg-linear-to-r from-[#E2C385] to-[#B78647] text-[16px] 
            whitespace-nowrap font-semibold rounded-lg  px-4 md:px-[44px] py-[13px] text-center cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default BodyQuiz;
