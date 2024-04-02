import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
// Import your SongInfo page component below
import SongInfo from "../pages/SongInfo";

export const myRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/song/:songTitle" element={<SongInfo />} /></>
);