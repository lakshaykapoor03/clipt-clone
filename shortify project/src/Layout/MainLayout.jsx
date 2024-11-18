import React, { Children } from "react";
import Header from "../components/functionalityComponents/Header";

const MainLayout = ({ children }) => {
    // background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);
  return (
    <div style={{     backgroundImage: "linear-gradient(to right, #230b01 0%, #241f00 19%, #091c0e 42%, #081224 79%, #1b051e 100%)"
    }} className="px-56">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
