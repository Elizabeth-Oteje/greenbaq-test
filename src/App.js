import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GuestNavbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="my-app">
      <BrowserRouter>
        <GuestNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
