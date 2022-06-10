import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Header } from "./components/header/navbar/nav";
import { Footer } from "./components/footer/footer";
import { Home } from "./views/homeView";
import { Services } from "./views/services";
import { AboutUS } from "./views/aboutUs";
import { Contact } from "./views/contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUS />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
      {/* </Footer> */}
      {/* TODO create footer and render it to the page*/}
    </div>
  );
}

export default App;
