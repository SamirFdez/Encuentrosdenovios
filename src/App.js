import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { CallToAction } from "./components/header/callToAction/callToAction";
import { Navegation } from "./components/header/navbar/nav";
import { Home } from "./components/views/homeView";
import { Navegation1 } from "./components/views/navegation1";
import { Navegation2 } from "./components/views/navegation2";
import { Navegation3 } from "./components/views/navegation3";
import { Navegation4 } from "./components/views/navegation4";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <CallToAction/>
      <Navegation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navegation1" element={<Navegation1 />} />
        <Route path="/Navegation2" element={<Navegation2 />} />
        <Route path="/navegation3" element={<Navegation3 />} />
        <Route path="/Navegation4" element={<Navegation4 />} />
      </Routes>
      {/* </Footer> */}
      {/* TODO create footer and render it to the page*/}
    </div>
  );
}

export default App;
