import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./AppLayout.css";

function App() {
  const location = useLocation();


  const isHomePage = location.pathname === '/';

  return (
    <div className="app-container">

      {!isHomePage && <Navbar />}

      <main className="main-content">
        <Outlet />
      </main>

      {!isHomePage && <Footer />}
    </div>
  );
}

export default App;