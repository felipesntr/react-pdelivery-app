import { Navbar } from '../presentation/components/navbar';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { Home } from "../presentation/pages/home";
import { Orders } from "../presentation/pages/orders";

export const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/orders" element={<Orders />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}