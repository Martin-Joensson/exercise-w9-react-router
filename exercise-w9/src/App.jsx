import { BrowserRouter, Link, Routes } from "react-router-dom";
import { myRoutes } from "./routes/myRoutes";
import "./App.css";
// Import your SongInfo page component below

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul className="app-ul">
            <li className="app-li">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            {myRoutes}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};
