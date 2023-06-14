import { Input } from "@chakra-ui/react";
import { useState } from "react";
interface Prop {
  optionChoice: (chosen: string) => void;
}

function Ability(props: Prop) {
  const [text, setText] = useState("");

  function handleChange(e: {
    target: { value: React.SetStateAction<string> };
  }) {
    setText(e.target.value);
    props.optionChoice(text);
    console.log(text);
  }
  return <Input value={text} onChange={handleChange} />;
}

export default Ability;
