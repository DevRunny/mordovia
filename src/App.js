import './styles/App.scss';
import { NavBar } from "./components/NavBar";
import { Offers } from "./components/Offers";
import { Cards } from "./components/Cards";

function App() {
  return (
    <>
      <NavBar/>
      <Offers />
      <Cards />
    </>

  );
}

export default App;
