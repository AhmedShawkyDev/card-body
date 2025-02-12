import Overlays from "./overlay/Overlays";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
const Quiz: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notify = (): void =>
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
  const open = (): void => {
    setIsOpen(true);
    console.log("isOpen");
  };
  const isClose = (): void => {
    setIsOpen(false);
    notify();
  };
  return (
    <>
      <Overlays isOpen={isOpen} isClose={isClose} />
      <div>
        <button
          onClick={open}
          className="cursor-pointer text-white bg-amber-400"
        >
          Button
        </button>
      </div>
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
    </>
  );
};

export default Quiz;
