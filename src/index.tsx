import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const root = document.querySelector("#root");
(ReactDOM as any).createRoot(root).render(<App />);
// ReactDOM.render(<App />, root);
