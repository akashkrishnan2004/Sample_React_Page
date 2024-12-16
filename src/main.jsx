import { createRoot } from "react-dom/client";

import Main from "./App";

import "./main.css"

let root = document.getElementById("root");

createRoot(root).render(
  <>
    {/* <h1>hello</h1> */}
    <Main></Main>
  </>
)