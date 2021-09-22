import React, {useRef} from "react";

const Footer = () => {
  const inputRef = useRef(null)
  const changeRef = () => {
    console.log(inputRef.current)
  }
  return (
    <footer>
      <h2>Footer</h2>
      <input  ref={inputRef} onChange={changeRef} type="text" />
    </footer>
  );
};

export default Footer;
