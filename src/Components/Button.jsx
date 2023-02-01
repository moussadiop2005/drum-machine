import { useEffect, useContext } from "react";
import { AppContext } from "../App";

const Button = ({
  btnId,
  btnText,
  audioSrc,
  sound,
}) => {
  const { setSoundPlayed } =
    useContext(AppContext);

  useEffect(() => {
    document.addEventListener(
      "keydown",
      playSongOnPress,
      true
    );

    return () => {};
  }, []);

  const playSongOnClick = () => {
    const audioTag =
      document.getElementById(btnText);
    audioTag.currentTime = 0;
    audioTag.play();
    setSoundPlayed(sound);
  };

  const playSongOnPress = (e) => {
    const audioTag = document.querySelector(
      `#${e.key.toUpperCase()}`
    );
    audioTag.currentTime = 0;
    audioTag.play();
  };

  return (
    <button
      className="drum-pad"
      id={btnId}
      onClick={playSongOnClick}
    >
      {btnText}
      <audio
        src={`https://s3.amazonaws.com/freecodecamp/drums/${audioSrc}.mp3`}
        className="clip"
        id={btnText}
      ></audio>
    </button>
  );
};

export default Button;
