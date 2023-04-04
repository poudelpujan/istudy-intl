import React, { createContext, useState, useEffect } from "react";

export const MenuContext = createContext({
  open: false,
  setOpen: () => {},
});
export default function MenuManager(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(".menu-holder")) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      {props.children}
    </MenuContext.Provider>
  );
}
