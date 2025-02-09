const BodyTwo = () => {
  return (
    <div>
      <div className="bg-neutral-300 h-[8px] w-[534px] mt-10 rounded-b-xl  rounded-t-xl mx-auto my-auto  ">
        <div className="bg-[#CEA768] h-[8px] w-[212px] mt-10 rounded-b-xl  rounded-t-xl  "></div>
      </div>
      <h1 className="flex justify-center items-center text-black mt-3 font-light font[--font-roboto]">
        Step 2/5
      </h1>
      <h1 className="text-black flex justify-center items-center font-normal font-[Raleway] mt-2">
        Pick Your Perfect Property Type
      </h1>
      <h1 className="text-[#6B665F] text-lg font-[Raleway] flex justify-center items-center mt-2">
        What type of property are you looking for? Let us know so we can tailor
        our recommendations!
      </h1>
      <div className="flex gap-6 mt-4 flex-wrap justify-center items-center">
        <div
          className="flex justify-start 
items-center w-[349px] h-[54px] text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] cursor-pointer"
        >
          <input
            id="option1"
            name="radio-group"
            type="radio"
            className=" mr-5 w-[17px] h-[17px] cursor-pointer flex items-center justify-center 
            text-[#CEA768]
            appearance-none  border-2 border-gray-400 hover:border-[#CEA768] 
            rounded-full
           checked:bg-[#CEA768]
             checked:border-transparent 
             focus:outline-3 focus:outline-offset-3
              focus:outline-[#CEA768] active:bg-[#CEA768]
            ml-2
            "
          />
          <h1
            className=" 
          flex justify-center font-[Raleway] mt-1 font-normal items-center"
          >
            Apartment{" "}
          </h1>
        </div>
        <div
          className="flex justify-start
        items-center w-[349px] h-[54px]
         text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] 
         p-3 rounded-xl hover:border-[#CEA768] cursor-pointer "
        >
          <input
            id="option2"
            name="radio-group"
            type="radio"
            className=" mr-5 w-[17px] h-[17px] cursor-pointer flex items-center justify-center 
            text-[#CEA768]
            appearance-none  border-2 border-gray-400 hover:border-[#CEA768] 
            rounded-full
           checked:bg-[#CEA768]
             checked:border-transparent 
             focus:outline-3 focus:outline-offset-3
              focus:outline-[#CEA768] active:bg-[#CEA768]
            ml-2
            "
          />
          <h1 className=" flex justify-center font-[Raleway] mt-1 font-normal items-center">
            Townhouse
          </h1>
        </div>
        <div
          className="flex justify-start
items-center w-[349px] h-[54px] text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] cursor-pointer"
        >
          <input
            id="option3"
            name="radio-group"
            type="radio"
            className=" mr-5 w-[17px] h-[17px] cursor-pointer flex items-center justify-center 
            text-[#CEA768]
            appearance-none  border-2 border-gray-400 hover:border-[#CEA768] 
            rounded-full
           checked:bg-[#CEA768]
             checked:border-transparent 
             focus:outline-3 focus:outline-offset-3
              focus:outline-[#CEA768] active:bg-[#CEA768]
            ml-2
            "
          />
          <h1 className=" flex justify-center font-[Raleway] mt-1 font-normal items-center">
            Villa
          </h1>
        </div>
        <div
          className="flex justify-start
items-center w-[349px] h-[54px] text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] cursor-pointer "
        >
          <input
            id="option4"
            name="radio-group"
            type="radio"
            className=" mr-5 w-[17px] h-[17px] cursor-pointer flex items-center justify-center 
            text-[#CEA768]
            appearance-none  border-2 border-gray-400 hover:border-[#CEA768] 
            rounded-full
           checked:bg-[#CEA768]
             checked:border-transparent 
             focus:outline-3 focus:outline-offset-3
              focus:outline-[#CEA768] active:bg-[#CEA768]
            ml-2
            "
          />
          <h1 className=" flex justify-center font-[Raleway] mt-1 font-normal items-center">
            Penthouse
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
          className="cursor-pointer  bg-linear-to-r from-[#E2C385] to-[#B78647] mt-24
        w-[161px] h-[48px] rounded-[8px] px-[18px]
         py-[32px] flex justify-center items-center font-normal font-[Raleway] text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BodyTwo;
