import Navbar from "../components/Navbar";
import "./MainLayout.css";

function MainLayout({ children }) {
  return (
    <div className="layout">

      <Navbar />

      <main className="page-content">
        {children}
      </main>

    </div>
  );
}

export default MainLayout;