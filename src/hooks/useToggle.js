import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggle = () => {
    setValue((value) => !value);
  };

  return [value, toggle];
};

export default useToggle;
