import propTypes from "prop-types";
import React, { createContext, useState } from "react";

export const DashContext = createContext();

/**
 * you should only ever have one dash view at a time
 */
const DashProvider = ({ children }) => {
  const [dashList, setDashList] = useState(null);

  return (
    <DashContext.Provider
      value={{
        openDash: (node) => setDashList(node),
        closeDash: () => setDashList(null),
      }}
    >
      {children}
      {dashList}
    </DashContext.Provider>
  );
};

DashProvider.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]),
};

export default DashProvider;
