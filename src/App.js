import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Navegation } from "./components/header/navbar/nav";
import { Home } from "./components/views/homeView";
import { Services } from "./components/views/services";
import { AboutUS } from "./components/views/aboutUs";
import { Contact } from "./components/views/contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navegation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUS />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      {/* </Footer> */}
      {/* TODO create footer and render it to the page*/}
    </div>
  );
}

export default App;
