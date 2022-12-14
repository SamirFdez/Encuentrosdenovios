import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Header } from "./components/header/navbar/nav";
import { Footer } from "./components/footer/footer";
import { Home } from "./views/homeView";
import { EventsPage } from "./views/EventsPage";
import { AboutUS } from "./views/aboutUs";
import { Contact } from "./views/contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element={<AboutUS />} />
        <Route path="/Eventos" element={<EventsPage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
