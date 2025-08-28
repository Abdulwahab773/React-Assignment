import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/aboutPage";
import HomePage from "./pages/homePage";
import ContactPage from "./pages/contactPage";
import NotfoundPage from "./pages/notFoundPage";
import SingleProductCard from "./pages/singleProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<SingleProductCard />} />
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </>
  );
}

export default App;
