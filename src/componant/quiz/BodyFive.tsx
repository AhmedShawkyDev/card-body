// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// const BodyFive = ({ input, setInput, isClose }) => {
//   const nameInput = (e) => {
//     setInput({ ...input, name: e.target.value });
//   };
//   const emailInput = (e) => {
//     setInput({ ...input, email: e.target.value });
//   };
//   const phoneInput = (e) => {
//     setInput({ ...input, phone: e });
//   };
//   const handelSubmit = (e) => {
//     e.preventDefault();
//     console.log(input);
//     setInput({ name: "", email: "", phone: "" });
//     localStorage.setItem("step5", JSON.stringify(input));
//     isClose();
//   };
//   return (
//     <div>
//       <div className="bg-neutral-300 h-[8px] w-[534px] mt-6 rounded-b-xl  rounded-t-xl mx-auto my-auto  ">
//         <div className="bg-[#CEA768] h-[8px] w-[534px] mt-6 rounded-b-xl  rounded-t-xl  "></div>
//       </div>
//       <h1 className="flex justify-center items-center text-black mt-3 font-light font-[Roboto] text-[16px]">
//         Step 5/5
//       </h1>
//       <h1
//         className="text-black
//       sm:text-[20px]
//       md:text-[24px]
//       flex justify-center items-center font-medium text-3xl font-[Raleway] mt-2 text-[24px]"
//       >
//         Share Your Contact Details
//       </h1>
//       <h1
//         className="text-[#6B665F]
//       sm:text-[16px]
//         md:text-[18px]
//       text-center text-lg font-[Raleway] flex justify-center items-center mt-2 text-[18px]"
//       >
//         We need your info to connect you with our experts and provide tailored
//         recommendations.
//       </h1>

//       <form onSubmit={handelSubmit} className="space-y-4 ">
//         <div className="flex flex-col  text-black md:justify-start md:items-start sm:justify-center sm:items-center ">
//           <h1 className="text-[13px] font-[Raleway] mt-2 ">Full Name</h1>
//           <input
//             value={input.name}
//             onChange={nameInput}
//             type="text"
//             className="border-1 border-[#C8C8CA] p-2
//             sm:w-[400px] sm:h-[40px]
//             md:w-[718px] md:h-[51px] rounded-lg font-normal font-[Raleway] text-[16px]"
//             placeholder="Full Name"
//           />
//         </div>
//         <div className="flex flex-col  text-black md:justify-start md:items-start sm:justify-center sm:items-center">
//           <h1 className="text-[13px] font-[Raleway]">Email Address</h1>
//           <input
//             value={input.email}
//             onChange={emailInput}
//             type="Email"
//             className="border-1 border-[#C8C8CA] p-2

//             sm:w-[400px] sm:h-[40px]
//             md:w-[718px] md:h-[51px]
//              rounded-lg font-normal font-[Raleway] text-[16px]"
//             placeholder="Email Address"
//           />
//         </div>
//         <div className="flex flex-col  text-black md:justify-start md:items-start sm:justify-center sm:items-center">
//           <h1 className="text-[13px] font-[Raleway]">Phone Number</h1>

//           <PhoneInput
//             className=" border-2 border-[#C8C8CA] p-2  sm:w-[400px] sm:h-[40px] md:w-[718px] md:h-[51px] rounded-lg font-normal font-[Raleway] text-[16px] "
//             placeholder="Enter phone number"
//             value={input.phone}
//             onChange={phoneInput}
//             county="eg"
//           />
//         </div>
//       </form>

//       <div
//         className="
//         lg:m-5
//         xl:mt-9
//         md:my-5
//         sm:my-5
//         mt-9
//         font-semibold
//         flex justify-center items-center"
//       >
//         <button
//           onClick={handelSubmit}
//           type="submit"
//           className="
//           hover:text-[#B78647] hover:bg-none hover:bg-white hover:border-2 hover:border-[#B78647] hover:duration-100
//           text-white w-[25%] lg:w-auto bg-linear-to-r from-[#E2C385] to-[#B78647] text-[16px]
//             whitespace-nowrap font-semibold rounded-lg  px-4 md:px-[44px] py-[13px] text-center cursor-pointer mt-4"
//         >
//           Get Your Offer
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BodyFive;

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import React from "react";

interface InputProps {
  name: string;
  email: string;
  phone: string;
}

interface BodyFiveProps {
  input: InputProps;
  setInput: (input: InputProps) => void;
  isClose: () => void;
}

const BodyFive: React.FC<BodyFiveProps> = ({ input, setInput, isClose }) => {
  const nameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, name: e.target.value });
  };

  const emailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, email: e.target.value });
  };

  const phoneInput = (value: string | undefined) => {
    setInput({ ...input, phone: value || "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(input);
    setInput({ name: "", email: "", phone: "" });
    localStorage.setItem("step5", JSON.stringify(input));
    isClose();
  };

  return (
    <div>
      <div className="bg-neutral-300 h-[8px] w-[534px] mt-6 rounded-b-xl rounded-t-xl mx-auto my-auto">
        <div className="bg-[#CEA768] h-[8px] w-[534px] mt-6 rounded-b-xl rounded-t-xl"></div>
      </div>
      <h1 className="flex justify-center items-center text-black mt-3 font-light font-[Roboto] text-[16px]">
        Step 5/5
      </h1>
      <h1 className="text-black sm:text-[20px] md:text-[24px] flex justify-center items-center font-medium text-3xl font-[Raleway] mt-2 text-[24px]">
        Share Your Contact Details
      </h1>
      <h1 className="text-[#6B665F] sm:text-[16px] md:text-[18px] text-center text-lg font-[Raleway] flex justify-center items-center mt-2 text-[18px]">
        We need your info to connect you with our experts and provide tailored
        recommendations.
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col text-black md:justify-start md:items-start sm:justify-center sm:items-center">
          <h1 className="text-[13px] font-[Raleway] mt-2">Full Name</h1>
          <input
            value={input.name}
            onChange={nameInput}
            type="text"
            className="border-1 border-[#C8C8CA] p-2 sm:w-[400px] sm:h-[40px] md:w-[718px] md:h-[51px] rounded-lg font-normal font-[Raleway] text-[16px]"
            placeholder="Full Name"
          />
        </div>
        <div className="flex flex-col text-black md:justify-start md:items-start sm:justify-center sm:items-center">
          <h1 className="text-[13px] font-[Raleway]">Email Address</h1>
          <input
            value={input.email}
            onChange={emailInput}
            type="email"
            className="border-1 border-[#C8C8CA] p-2 sm:w-[400px] sm:h-[40px] md:w-[718px] md:h-[51px] rounded-lg font-normal font-[Raleway] text-[16px]"
            placeholder="Email Address"
          />
        </div>
        <div className="flex flex-col text-black md:justify-start md:items-start sm:justify-center sm:items-center">
          <h1 className="text-[13px] font-[Raleway]">Phone Number</h1>
          <PhoneInput
            className="border-2 border-[#C8C8CA] p-2 sm:w-[400px] sm:h-[40px] md:w-[718px] md:h-[51px] rounded-lg font-normal font-[Raleway] text-[16px]"
            placeholder="Enter phone number"
            value={input.phone}
            onChange={phoneInput}
            defaultCountry="EG"
          />
        </div>
      </form>

      <div className="lg:m-5 xl:mt-9 md:my-5 sm:my-5 mt-9 font-semibold flex justify-center items-center">
        <button
          onClick={handleSubmit}
          type="submit"
          className="hover:text-[#B78647] hover:bg-none hover:bg-white hover:border-2 hover:border-[#B78647] hover:duration-100 text-white w-[25%] lg:w-auto bg-linear-to-r from-[#E2C385] to-[#B78647] text-[16px] whitespace-nowrap font-semibold rounded-lg px-4 md:px-[44px] py-[13px] text-center cursor-pointer mt-4"
        >
          Get Your Offer
        </button>
      </div>
    </div>
  );
};

export default BodyFive;
