import React from "react";
import { render } from "react-dom";
import styles from "./styles/global.css";

const App = () => {
  return (
    <div className={`${styles.home}`}>
      <h1>a lot of configuration</h1>
    </div>
  );
};

render(<App />, document.getElementById("app"));
