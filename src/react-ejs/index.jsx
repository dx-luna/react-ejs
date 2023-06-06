import ejs from "ejs";
import parse from "html-react-parser";
import { useState, useEffect } from "react";

export function Import(path, callback) {
  return fetch(path)
    .then((e) => e.text())
    .then((e) => {
      callback(e);
    });
}
export function Render({ path, data }) {
  let [_data, setData] = useState(parse(""));
  useEffect(() => {
    Import(path, (e) => {
      let htm = ejs.render(e, { ...data });
      setData(parse(htm));
    });
  }, []);
  return _data;
}
