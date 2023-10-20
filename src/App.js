import { useState } from "react";
import "./App.css";
import Navbar from "./Componets/Navbar";
import TextArea from "./Componets/TextArea";
import Alert from "./Componets/Alert";

function App() {
  const [color, setColor] = useState("light");
  const [alert, setAlert] = useState({
    msg: null,
    type: null,
  });

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const handelmode = () => {
    if (color === "light") {
      setColor("dark");
      document.body.style.backgroundColor = "#555b69";
      ShowAlert("Dark Mode Has Been Enabled!", "success");
      setTimeout(function () {
        ShowAlert(null);
      }, 2000);
    } else {
      setColor("light");
      document.body.style.backgroundColor = "white";
      ShowAlert("Light Mode Has Been Enabled!", "success");
      setTimeout(function () {
        ShowAlert(null);
      }, 2000);
    }
  };

  // const [mode, setMode] = useState(false);
  return (
    <div className="App">
      <Navbar mode={handelmode} color={color} />
      <div style={{ height: "60px" }}>
        <Alert alert={alert} style={{ height: "60px" }} />
      </div>
      <TextArea color={color} ShowAlert={ShowAlert} />
    </div>
  );
}

export default App;
