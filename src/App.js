import React from "react";
import BackwardCounter from "./CustomHooks/components/BackwardCounter";
import ForwardCounter from "./CustomHooks/components/ForwardCounter";

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
