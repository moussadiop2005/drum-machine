import { useContext } from "react";
import { AppContext } from "../App";

const Display = () => {
  const { soundPlayed } = useContext(AppContext);
  return <div id="display">{soundPlayed}</div>;
};

export default Display;
