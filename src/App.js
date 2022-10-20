import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Navigation from "./pages/navigation";

function App() {
  return (
    <BrowserRouter>
      <header className="bg-slate-200 h-auto justify-center">
        <Navigation />
      </header>
      <section>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signup />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
