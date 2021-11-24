import React from "react";

const Border = ({ children, border_color, background_color, ...rest }) => {
  return (
    <div
      style={{
        border: `5px solid ${border_color}`,
        backgroundColor: background_color,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Border;
