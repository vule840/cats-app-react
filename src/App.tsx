import "./App.css";
import Body from "./components/body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AppContext } from "./context";



function App() {
  return (
    <div className="App">
      {/* <AppContext.Provider > */}
      <Header link="/home" name="Home"></Header>
      <Body></Body>
      <Footer></Footer>
      {/* </AppContext> */}
    </div>
  );
}

export default App;
