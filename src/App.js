import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import { MainContext } from "./utils/context";
import { useState } from "react";

function App() {
  const [lastCalledUser, setLastCalledUser] = useState(undefined);

  const storeLastCalledUser = (user) => setLastCalledUser(user);
  return (
    <MainContext.Provider value={{ lastCalledUser, storeLastCalledUser }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
