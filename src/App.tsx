import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieList from "./components/MovieList";
import Booking from "./pages/Booking";
import DetailTicket from "./pages/DetailTicket";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <MovieList />
                        </>
                    }
                />
                <Route path="/booking" element={<Booking />} />
                <Route path="/ticket" element={<DetailTicket />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
