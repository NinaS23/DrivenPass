import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Login from "./pages/login/index.js";
import Credentials from "./pages/credentials/credentials";
import Cards from "./pages/cards/index.js"
import Wifi from "./pages/wifi/wifi.js"
import RegisterWifi from "./pages/wifi/index.js";
import WifiById from "./pages/wifi/wifiById.js";
import RegisterCredentials from "./pages/credentials/registerCredential.js";
import Signup from "./pages/signup/index.js";
import CardById from "./pages/cards/cardById.js";
import Menu from "./pages/menu/index.js";
import RegisterCard from "./pages/cards/registerCard.js";
import CredentialById from "./pages/credentials/credentialById.js";
import RegisterSafeNotes from "./pages/safeNotes/index.js";
import SafeNotes from "./pages/safeNotes/safeNotes.js";
import SafeNotesById from "./pages/safeNotes/safeNoteById.js";
import Header from "./shared/header/header.js";
import { useState } from "react";



export default function App() {
  const [type , setType] = useState("")
  const [pathBack,setPathBack] = useState("")


  return (
    <>
        <BrowserRouter>
          <Header type={type} pathBack={pathBack}/>
          <Routes>
            <Route path="/" element={<Login/>} />  
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/menu" element={<Menu setType={setType}  />} />
            <Route path="/credentials" element={<Credentials  setType={setType} setPathBack={setPathBack}/>}  />
            <Route path="/cadastro-credentials" element={<RegisterCredentials  setType={setType} setPathBack={setPathBack}/>} />
            <Route path="/credentials/:id" element={<CredentialById  setType={setType} setPathBack={setPathBack}/>} />
            <Route path="/cadastro-safeNotes" element={<RegisterSafeNotes  setType={setType} setPathBack={setPathBack}/>} />
            <Route path="/safeNotes" element={<SafeNotes  setType={setType}  setPathBack={setPathBack}/>} />
            <Route path="/safeNotes/:id" element={<SafeNotesById  setType={setType} setPathBack={setPathBack}/>} />
            <Route path="/cards" element={<Cards setType={setType} setPathBack={setPathBack}/>} />
            <Route path="/cadastro-card" element={<RegisterCard setType={setType} setPathBack={setPathBack}/>} />
            <Route path="/card/:id" element={<CardById setType={setType} setPathBack={setPathBack}/>} />
            <Route path="/wifi" element={<Wifi setType={setType} setPathBack={setPathBack} /> } />
            <Route path="/cadastro-wifi" element={<RegisterWifi setType={setType}  setPathBack={setPathBack}/>} />
            <Route path="/wifi/:id" element={<WifiById setType={setType} setPathBack={setPathBack}/>} />
          </Routes>
        </BrowserRouter>
      
    </>
  );
}
