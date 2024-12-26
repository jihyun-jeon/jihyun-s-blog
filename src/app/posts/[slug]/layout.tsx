import React from "react";
import Header from "@/components/shared/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="px-60">{props.children}</div>
    </>
  );
};

export default Layout;
