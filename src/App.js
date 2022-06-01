import "./App.css";
import { Header } from "./components/header/header";
import { Menu } from "./components/nav/nav";
import { Home } from "./components/header/homeView";
import { Features } from "./components/header/featuresView";
import { Pricing } from "./components/header/pricing";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <></>

      {/* </Footer> */}
      {/* TODO create footer and render it to the page*/}
    </div>
  );
}

export default App;
