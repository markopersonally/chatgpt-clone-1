import { Outlet, Link } from "react-router-dom";
import "./rootLayout.css";

function RootLayout() {
  return (
    <div className="rootLayout">
      <header>
        <Link to="/">
          <img src="/logo.png" alt="logo" />
          <span>Lama AI</span>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
