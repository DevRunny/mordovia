import "./styles/App.scss";
import "./styles/responsive.scss";
import { BrowserRouter } from "react-router-dom";
import { router } from "./router";

function App() {
  return (
    <>
      <BrowserRouter>
        {router()}
      </BrowserRouter>
    </>

  );
}

export default App;
