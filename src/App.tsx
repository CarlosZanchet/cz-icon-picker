import { useState } from "react";
import Icon from "./components/Icon";
import IconPicker from "./components/IconPicker";

function App() {
  const [iconLabel, setIconLabel] = useState('')
  return (
    <>
      <span>icone: <Icon size={1.8} color="red" icon={iconLabel} /> </span>
      <span>
        <IconPicker onChange={setIconLabel} />
      </span>
    </>
  );
}

export default App;
