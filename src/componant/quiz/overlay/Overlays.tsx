import { createPortal } from "react-dom";

import Header from "../HeaderQuiz";
const overLay = document.getElementById("overlay");
const Overlays = ({ isOpen, isClose }) => {
  return createPortal(<>{isOpen && <Header isClose={isClose} />}</>, overLay);
};

export default Overlays;
