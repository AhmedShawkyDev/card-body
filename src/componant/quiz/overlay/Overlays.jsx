import { createPortal } from "react-dom";

// import One from "../One";
import Header from "../HeaderQuiz";
const overLay = document.getElementById("overlay");
const Overlays = ({ isOpen, close }) => {
  return createPortal(<>{isOpen && <Header close={close} />}</>, overLay);
};

export default Overlays;
