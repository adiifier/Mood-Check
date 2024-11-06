import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { Input } from "./components/Inputbox";
import { Box } from "./components/box";
import img1 from "./pictures/download.jpg";
import { Signin } from "./pages/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Entry } from "./pages/EntryPoint";
import { Questions } from "./pages/Questions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/entry" element={<Entry></Entry>}></Route>
          <Route path="/Questions" element={<Questions></Questions>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
