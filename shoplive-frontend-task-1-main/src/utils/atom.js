import { atom } from "recoil";

let randomText = atom({
  key: "randomText",
  default: "abcdefgh",
});

export default randomText;
