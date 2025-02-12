// import img1 from "../../assets/1.png";
// import img2 from "../../assets/2.jpg";
// const BodyQuiz = ({ setPops, input, setInput }) => {
//   const two = () => {
//     setPops("com2");
//     localStorage.setItem("step1", JSON.stringify(input));
//     console.log(input);
//   };
//   const change1 = () => {
//     setInput({ ...input, step1: "option1" });
//   };
//   const change2 = () => {
//     setInput({ ...input, step1: "option2" });
//   };
//   const handelSubmit = (e) => {
//     e.preventDefault();
//     console.log(input);
//   };
//   return (
//     <>
//       <div>
//         <div className="bg-neutral-300 h-[8px] w-[534px] mt-6 rounded-b-xl  rounded-t-xl mx-auto my-auto">
//           <div className="bg-[#CEA768] h-[8px] w-[106px] mt-6 rounded-b-xl  rounded-t-xl"></div>
//         </div>
//         <h1 className="flex justify-center items-center text-black mt-3 font-light font-[Roboto] text-[16px]">
//           Step 1/5
//         </h1>
//         <h1
//           className="text-black flex justify-center items-center font-normal font-[Raleway]

//         sm:text-[20px]
//         md:text-[24px]"
//         >
//           Define Your Property Goal
//         </h1>
//         <h1
//           className="text-[#6B665F]
//         sm:text-[16px]
//         md:text-[18px]
//         text-lg font-[Raleway] flex justify-center items-center text-center "
//         >
//           Are you planning to buy your dream home or grow your investment
//           portfolio?
//         </h1>
//         <form
//           onSubmit={handelSubmit}
//           value={input}
//           className="flex gap-6 mt-3
//            lg:flex-row
//            md:flex-col
//            sm:flex-col
//            justify-center items-center"
//         >
//           <label
//             htmlFor="option1"
//             className={`
//               xl:ml-[-5]
//               lg:ml-5

//               h-[263px] cursor-pointer text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768]
//               ${input.step1 === "option1" ? "border-[#CEA768]" : ""}`}
//           >
//             <input
//               id="option1"
//               onChange={change1}
//               checked={input === "option1"}
//               value="option1"
//               name="radio-group1"
//               type="radio"
//               className="appearance-none visibility-hidden "
//             />
//             <img
//               className=" w-[326px] h-[208px] bg-cover rounded-xl
//               xl:mt-[-35px]
//               lg:mt-[-18px]
//               md:mt-[-17px]
//               sm:mt-[-16px]
//               "
//               src={img1}
//               alt=""
//             />
//             <h1
//               className={` flex justify-center font-[Raleway] mt-1 font-normal text-[16px] ${
//                 input.step1 === "option1" ? "text-[#CEA768]" : ""
//               }`}
//             >
//               Personal Use
//             </h1>
//           </label>
//           <label
//             htmlFor="option2"
//             className={`xl:-mr-5 lg:mr-5 h-[263px] cursor-pointer text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768]
//                 ${input.step1 === "option2" ? "border-[#CEA768] " : ""} `}
//           >
//             <input
//               id="option2"
//               onChange={change2}
//               checked={input === "option2"}
//               value="option2"
//               name="radio-group1"
//               type="radio"
//               className="appearance-none "
//             />
//             <img
//               className=" w-[326px] h-[208px] bg-cover rounded-xl
//               xl:mt-[-35px] lg:mt-[-18px] md:mt-[-17px]
//               sm:mt-[-16px]"
//               src={img2}
//               alt=""
//             />
//             <h1
//               className={` flex justify-center font-[Raleway] mt-1 font-normal text-[16px] ${
//                 input.step1 === "option2" ? "text-[#CEA768]" : ""
//               }`}
//             >
//               Investment
//             </h1>
//           </label>
//         </form>

//         <div
//           className="
//       lg:m-5
//       xl:mt-9
//       md:my-5
//       sm:my-5
//       font-semibold
//       flex justify-center items-center
//       mt-13
//       "
//         >
//           <button
//             onClick={two}
//             className="
//           hover:text-[#B78647] hover:bg-none
//            hover:bg-white hover:border-2 hover:border-[#B78647] hover:duration-100
//           text-white w-[25%] lg:w-auto bg-linear-to-r from-[#E2C385] to-[#B78647] text-[16px]
//             whitespace-nowrap font-semibold rounded-lg  px-4 md:px-[44px]
//              py-[13px] text-center cursor-pointer "
//           >
//             Continue
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BodyQuiz;

import React from "react";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.jpg";

interface InputProps {
  step1: string;
}

interface BodyQuizProps {
  setPops: (value: string) => void;
  input: InputProps;
  setInput: (input: InputProps) => void;
}

const BodyQuiz: React.FC<BodyQuizProps> = ({ setPops, input, setInput }) => {
  const two = () => {
    setPops("com2");
    localStorage.setItem("step1", JSON.stringify(input));
    console.log(input);
  };

  const handleChange = (option: string) => {
    setInput({ ...input, step1: option });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <div className="bg-neutral-300 h-[8px] w-[534px] mt-6 rounded-b-xl rounded-t-xl mx-auto my-auto">
        <div className="bg-[#CEA768] h-[8px] w-[106px] mt-6 rounded-b-xl rounded-t-xl"></div>
      </div>
      <h1 className="flex justify-center items-center text-black mt-3 font-light font-[Roboto] text-[16px]">
        Step 1/5
      </h1>
      <h1 className="text-black flex justify-center items-center font-normal font-[Raleway] sm:text-[20px] md:text-[24px]">
        Define Your Property Goal
      </h1>
      <h1 className="text-[#6B665F] sm:text-[16px] md:text-[18px] text-lg font-[Raleway] flex justify-center items-center text-center">
        Are you planning to buy your dream home or grow your investment
        portfolio?
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex gap-6 mt-3 lg:flex-row md:flex-col sm:flex-col justify-center items-center"
      >
        {["option1", "option2"].map((option, index) => (
          <label
            key={option}
            htmlFor={option}
            className={`h-[263px] cursor-pointer text-black hover:text-[#CEA768] border-2 border-[#C8C8CA] p-3 rounded-xl hover:border-[#CEA768] ${
              input.step1 === option ? "border-[#CEA768]" : ""
            }`}
          >
            <input
              id={option}
              onChange={() => handleChange(option)}
              checked={input.step1 === option}
              value={option}
              name="radio-group1"
              type="radio"
              className="appearance-none hidden"
            />
            <img
              className="w-[326px] h-[208px] bg-cover rounded-xl"
              src={index === 0 ? img1 : img2}
              alt=""
            />
            <h1
              className={`flex justify-center font-[Raleway] mt-1 font-normal text-[16px] ${
                input.step1 === option ? "text-[#CEA768]" : ""
              }`}
            >
              {index === 0 ? "Personal Use" : "Investment"}
            </h1>
          </label>
        ))}
      </form>
      <div className="lg:m-5 xl:mt-9 md:my-5 sm:my-5 font-semibold flex justify-center items-center mt-13">
        <button
          onClick={two}
          className="hover:text-[#B78647] hover:bg-none hover:bg-white hover:border-2 hover:border-[#B78647] hover:duration-100 text-white w-[25%] lg:w-auto bg-linear-to-r from-[#E2C385] to-[#B78647] text-[16px] whitespace-nowrap font-semibold rounded-lg px-4 md:px-[44px] py-[13px] text-center cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BodyQuiz;
