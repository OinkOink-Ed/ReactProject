import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Recording from "./pages/Recording";
import Authorization from "./pages/Authorization";
import { Routes, Route } from "react-router-dom";

//

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recording" element={<Recording />} />
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;