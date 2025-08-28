import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Notfound from "../../components/Notfound";
import Footer from "../../components/Footer";

function NotfoundPage() {
  return (
    <>
      <Navbar />
      <Notfound />
      <Footer />
    </>
  );
}

export default NotfoundPage;
