import "./App.css";
import { CallToAction } from "./components/header/callToAction/callToAction";
import { Navegation } from "./components/header/navbar/nav";
import { Home } from "./components/views/homeView/homeView";
import { Features } from "./components/views/featuresView/featuresView";
import { Pricing } from "./components/views/pricingView/pricing";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <CallToAction />
      <Navegation />
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
