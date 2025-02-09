import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
const BodyFive = () => {
  const notify = () =>
    toast.success("Thank you !", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const nameInput = (e) => {
    setInput({ ...input, name: e.target.value });
  };
  const emailInput = (e) => {
    setInput({ ...input, email: e.target.value });
  };
  const phoneInput = (e) => {
    setInput({ ...input, phone: e });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    notify();
    setInput({ name: "", email: "", phone: "" });
  };
  return (
    <div>
      <div className="bg-neutral-300 h-[8px] w-[534px] mt-10 rounded-b-xl  rounded-t-xl mx-auto my-auto  ">
        <div className="bg-[#CEA768] h-[8px] w-[534px] mt-10 rounded-b-xl  rounded-t-xl  "></div>
      </div>
      <h1 className="flex justify-center items-center text-black mt-3 font-light font[Roboto]">
        Step 5/5
      </h1>
      <h1 className="text-black flex justify-center items-center font-medium text-3xl font-[Raleway] mt-2">
        Share Your Contact Details
      </h1>
      <h1 className="text-[#6B665F] text-lg font-[Raleway] flex justify-center items-center mt-2">
        We need your info to connect you with our experts and provide tailored
        recommendations.
      </h1>

      <form onSubmit={handelSubmit} className="space-y-4">
        <div className="flex flex-col  text-black">
          <h1 className="text-[15px] font-[Raleway] mt-2">Full Name</h1>
          <input
            value={input.name}
            onChange={nameInput}
            type="text"
            className="border-1 border-[#C8C8CA] p-2 w-[718px] h-[51px] rounded-lg font-normal font-[Raleway] text-[16px]"
            placeholder="Full Name"
          />
        </div>
        <div className="flex flex-col  text-black">
          <h1 className="text-[15px] font-[Raleway]">Email Address</h1>
          <input
            value={input.email}
            onChange={emailInput}
            type="Email"
            className="border-1 border-[#C8C8CA] p-2 w-[718px] h-[51px] rounded-lg font-normal font-[Raleway] text-[16px]"
            placeholder="Email Address"
          />
        </div>
        <div className="flex flex-col  text-black">
          <h1 className="text-[15px] font-[Raleway]">Phone Number</h1>

          <PhoneInput
            country={"eg"}
            value={input.phone}
            onChange={phoneInput}
            placeholder="Phone Number"
            inputProps={{
              required: true,
            }}
            containerStyle={{
              width: "100%",
            }}
            inputStyle={{
              border: "1px solid #C8C8CA",
              padding: "8px",
              width: "670px",
              height: "51px",
              borderRadius: "0.5rem",
              fontWeight: "400",
              fontFamily: "Raleway, sans-serif",
              fontSize: "16px",
              color: "black",
              marginLeft: "50px",
            }}
          />
        </div>
      </form>

      <div
        className="
mt-3
font-semibold
flex justify-center items-center"
      >
        <button
          onClick={handelSubmit}
          type="submit"
          className="cursor-pointer  bg-linear-to-r from-[#E2C385] to-[#B78647] mt-2
w-[199px] h-[48px] rounded-[8px] px-[18px]
py-[32px] flex justify-center items-center font-normal font-[Raleway] text-white"
        >
          Get Your Offer
        </button>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </div>
    </div>
  );
};

export default BodyFive;
