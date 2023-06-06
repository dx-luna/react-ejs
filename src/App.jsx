import React from "react";
import { Import, Render } from "./react-ejs";
function App() {
  let people = ["bob", "alice", "alex", "luna"];
  return <Render path="src/react-ejs/test.ejs" data={{ data: people }} />;
}

export default App;
