import React from "react";

import Button from "./Button";

const App = () => {
  return (
    <>
      <h1>Hello React!</h1>
      <Button
        href="https://github.com/h662/zap-styled-components"
        target="_blank"
        rel="noopener"
      >
        myGitHub
      </Button>
    </>
  );
};

export default App;
