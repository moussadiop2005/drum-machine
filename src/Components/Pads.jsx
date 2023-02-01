import Button from "./Button";

const Pads = () => {
  return (
    <div className="btn-group">
      <Button
        btnId="heater-1"
        btnText="Q"
        audioSrc="Heater-1"
        sound="Heater 1"
      />
      <Button
        btnId="heater-2"
        btnText="W"
        audioSrc="Heater-2"
        sound="Heater 2"
      />
      <Button
        btnId="heater-3"
        btnText="E"
        audioSrc="Heater-3"
        sound="Heater 3"
      />
      <Button
        btnId="heater-4"
        btnText="A"
        audioSrc="Heater-4_1"
        sound="Heater 4"
      />
      <Button
        btnId="clap"
        btnText="S"
        audioSrc="Heater-6"
        sound="Clap"
      />
      <Button
        btnId="open-hh"
        btnText="D"
        audioSrc="Dsc_Oh"
        sound="Open-HH"
      />
      <Button
        btnId="Kick_n_Hat"
        btnText="Z"
        audioSrc="Kick_n_Hat"
        sound="Kick-n'-Hat"
      />
      <Button
        btnId="kick"
        btnText="X"
        audioSrc="RP4_KICK_1"
        sound="Kick"
      />
      <Button
        btnId="close-hh"
        btnText="C"
        audioSrc="Cev_H2"
        sound="Close-HH"
      />
    </div>
  );
};

export default Pads;
