import React from "react";

import "../styles/index.css";

const PageLayout: React.FC = ({ children }) => (
  <div className="container h-screen content-center">
    <div className="content-center flex-col">
      <h1 className="text-center text-6xl">Overcommitters Club</h1>
      <h2 className="text-center text-4xl">reclaim some time</h2>
    </div>
    <div className="container content-center justify-center flex py-8">
      {children}
    </div>
  </div>
);

export default PageLayout;
