import { useState } from "react";

import cS from "../../assets/images/coming-soon.jpeg";
import ModalComp from "./ModalComp";

const Modal = () => {
  const [modalActive, setModalActive] = useState(true); // Modal shows up on page load

  const handleModalClose = () => setModalActive(false);

  return (
    <div>
      {modalActive && (
        <ModalComp isActive={modalActive} onClose={handleModalClose}>
          <img src={cS} className="coming-soon" alt="coming soon new branch" />
        </ModalComp>
      )}
    </div>
  );
};
export default Modal;
