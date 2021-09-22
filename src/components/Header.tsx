import React from "react";
import {Link, BrowserRouter as Router,
} from "react-router-dom"


const Header = (props: any) => {
  const setSomeMsg = () => {
    setmsg('jooo')
  }
  const [msg,setmsg] = React.useState('')
  return (
    <header>
      <Router>
      <button onClick={setSomeMsg}>Set msg</button>
      {msg ? msg : 'Click me'}
      <Link to={props.link}>{props.name}</Link>
      </Router>
    </header>
  );
};

export default Header;
