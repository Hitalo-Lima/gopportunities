import { Route, Routes } from "react-router-dom";
import { Openings } from "./pages/Openings";
import { Opening } from "./pages/Opening";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Openings/>}/>
      <Route path="/opening/*" element={<Opening/>}/>
    </Routes>
  )
}