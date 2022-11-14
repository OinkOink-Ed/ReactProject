import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;