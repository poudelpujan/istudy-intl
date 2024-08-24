import { useEffect, useState } from "react";

const ModalComp = ({ children, isActive, onClose }) => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }
    return () => {
      document.body.style.overflow = ""; // Re-enable scrolling when modal is closed
    };
  }, [isActive]);

  if (!isActive) return null; // Render nothing if not active

  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={onClose}></div>
      <div className="modal__dialogue">
        <button className="modal__close" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalComp;
