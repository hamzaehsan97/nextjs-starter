import propTypes from "prop-types";
import React, { createContext, useState } from "react";

export const ModalContext = createContext();

/**
 * you should only ever have one modal at a time
 */
const ModalProvider = ({ children }) => {
  const [modalList, setModalList] = useState(null);

  return (
    <ModalContext.Provider
      value={{
        openModal: (node) => setModalList(node),
        closeModal: () => setModalList(null),
      }}
    >
      {children}
      {modalList}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

export default ModalProvider;
