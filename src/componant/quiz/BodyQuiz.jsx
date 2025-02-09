import img1 from "../../assets/1.png";
const BodyQuiz = () => {
  return (
    <>
      <div>
        <div className="bg-neutral-300 h-[8px] w-[534px] mt-10 rounded-b-xl  rounded-t-xl mx-auto my-auto  ">
          <div className="bg-[#CEA768] h-[8px] w-[106px] mt-10 rounded-b-xl  rounded-t-xl  "></div>
        </div>
        <h1 className="flex justify-center items-center text-black mt-3 font-light font[--font-roboto]">
          Step 1/5
        </h1>
        <h1 className="text-black flex justify-center items-center font-normal font-[Raleway]">
          Define Your Property Goal
        </h1>
        <h1 className="text-[#6B665F] text-lg font-[Raleway] flex justify-center items-center">
          Are you planning to buy your dream home or grow your investment
          portfolio?
        </h1>
        <div className="flex gap-6 mt-3">
          <div className="text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] cursor-pointer">
            <img
              className=" w-[326px] h-[208px] bg-cover rounded-xl "
              src={img1}
              alt=""
            />
            <h1 className=" flex justify-center font-[Raleway] mt-1 font-normal">
              Personal Use
            </h1>
          </div>
          <div className="text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] cursor-pointer ">
            <img
              className=" w-[326px] h-[208px] bg-cover rounded-xl"
              src={img1}
              alt=""
            />
            <h1 className=" flex justify-center font-[Raleway] mt-1 font-normal">
              Investment
            </h1>
          </div>
        </div>
        <div
          className="
      mt-3
      font-semibold
      flex justify-center items-center"
        >
          <button
            className="cursor-pointer  bg-linear-to-r from-[#E2C385] to-[#B78647]
      w-[161px] h-[48px] rounded-[8px] px-[18px]
       py-[32px] flex justify-center items-center font-normal font-[Raleway] text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default BodyQuiz;
