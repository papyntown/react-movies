import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./components/Video";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Liked from "./pages/Liked";

function App() {
    return (
        <div className="App">
            <Video />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/liked" element={<Liked />} />
                    {/* Si il ne trouve pas le chemin il va prendre celui de l'etoile * */}
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
