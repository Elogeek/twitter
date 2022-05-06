import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header/Header";
import { RouteNotFound } from "./components/RouteNotFound";


ReactDOM.render(
    <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<RouteNotFound />} />
            </Routes>

    </BrowserRouter>,
    document.getElementById("root")
);