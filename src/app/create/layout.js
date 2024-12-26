import React from "react";

const Layout = (props) => {
  return (
    <form>
      <h2>created layout</h2>
      {props.children}
    </form>
  );
};

export default Layout;
