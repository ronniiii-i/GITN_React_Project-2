import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Places from "./pages/Places";

import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places-to-stay" element={<Places />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
