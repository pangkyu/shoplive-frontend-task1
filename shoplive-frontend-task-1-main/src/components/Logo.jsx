import "../scss/logo.scss";
import { getRandomText } from "../utils/data/random-text";
import useInterval from "../useInterval";
import { useState } from "react";

const Logo = () => {
  const [text, setText] = useState("ABCDEFGH");

  useInterval(() => {
    getRandomText()
      .then((result) => {
        setText(result);
      })
      .catch((err) => console.error(err));
  }, 3000);

  return <span className="logo">{text}</span>;
};
export default Logo;
