const BodyTwo = ({ setPops, input, setInput }) => {
  const three = () => {
    setPops("com3");
    localStorage.setItem("step2", JSON.stringify(input));
    console.log(input);
  };
  const change1 = () => {
    setInput({ ...input, step2: "option1" });
  };
  const change2 = () => {
    setInput({ ...input, step2: "option2" });
  };
  const change3 = () => {
    setInput({ ...input, step2: "option3" });
  };
  const change4 = () => {
    setInput({ ...input, step2: "option4" });
  };
  const handelSubmit = (e) => {
    e.preventdefault();
  };
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
      <form
        value={input}
        onSubmit={handelSubmit}
        className="flex gap-6 mt-4 flex-wrap justify-center items-center"
      >
        <label
          htmlFor="option1"
          className={`flex justify-start 
              items-center w-[349px] h-[54px]
               text-black hover:text-[#CEA768] 
               border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] cursor-pointer
               ${
                 input.step2 === "option1"
                   ? "text-[#CEA768] border-[#CEA768]"
                   : ""
               }
               `}
        >
          <input
            onChange={change1}
            // checked={input === "option1"}
            value="option1"
            id="option1"
            name="radio-group2"
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
            className={` 
          flex justify-center font-[Raleway] mt-1 font-normal items-center
          ${input.step2 === "option1" ? "text-[#CEA768]" : ""}
          `}
          >
            Apartment{" "}
          </h1>
        </label>

        <label
          htmlFor="option2"
          className={`flex justify-start 
            items-center w-[349px] h-[54px]
             text-black hover:text-[#CEA768] 
             border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] cursor-pointer
             ${
               input.step2 === "option2"
                 ? "text-[#CEA768] border-[#CEA768]"
                 : ""
             }
             `}
        >
          <input
            onChange={change2}
            // checked={input === "option2"}
            value="option2"
            id="option2"
            name="radio-group2"
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
            className={` 
          flex justify-center font-[Raleway] mt-1 font-normal items-center
          ${input.step2 === "option2" ? "text-[#CEA768]" : ""}
          `}
          >
            Townhouse
          </h1>
        </label>
        <label
          htmlFor="option3"
          className={`flex justify-start 
            items-center w-[349px] h-[54px]
             text-black hover:text-[#CEA768] 
             border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] cursor-pointer
             ${
               input.step2 === "option3"
                 ? "text-[#CEA768] border-[#CEA768]"
                 : ""
             }
             `}
        >
          <input
            onChange={change3}
            // checked={input === "option3"}
            value="option3"
            id="option3"
            name="radio-group2"
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
            className={` 
          flex justify-center font-[Raleway] mt-1 font-normal items-center
          ${input.step2 === "option3" ? "text-[#CEA768]" : ""}
          `}
          >
            Villa
          </h1>
        </label>

        <label
          htmlFor="option4"
          className={`flex justify-start 
            items-center w-[349px] h-[54px]
             text-black hover:text-[#CEA768] 
             border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] cursor-pointer
             ${
               input.step2 === "option4"
                 ? "text-[#CEA768] border-[#CEA768]"
                 : ""
             }
             `}
        >
          <input
            onChange={change4}
            // checked={input === "option4"}
            value="option4"
            id="option4"
            name="radio-group2"
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
            className={` 
          flex justify-center font-[Raleway] mt-1 font-normal items-center
          ${input.step2 === "option4" ? "text-[#CEA768]" : ""}
          `}
          >
            Penthouse
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
          onClick={three}
          //   className="text-[16px] cursor-pointer  bg-linear-to-r from-[#E2C385] to-[#B78647] mt-24
          // w-[161px] h-[48px] rounded-[8px] px-[18px]
          //  py-[32px] flex justify-center items-center font-normal font-[Raleway] text-white"
          className="text-white w-full lg:w-auto bg-linear-to-r from-[#E2C385] to-[#B78647] text-[16px] 
            whitespace-nowrap font-semibold rounded-lg  px-4 md:px-[44px] py-[13px] text-center cursor-pointer mt-24"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BodyTwo;
