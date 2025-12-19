import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Film, Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const goToMovies = () => {
        setOpen(false);
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById("movies")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById("movies")?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="w-full bg-slate-900 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <Film className="w-6 h-6" />
                    <span className="text-xl font-semibold">MovieTix</span>
                </Link>

                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <li>
                        <Link to="/" className="hover:text-emerald-400 transition">
                            Beranda
                        </Link>
                    </li>
                    <li onClick={goToMovies} className="hover:text-emerald-400 cursor-pointer transition">
                        Daftar Film
                    </li>
                    <li>
                        <Link to="/booking" className="hover:text-emerald-400 transition">
                            Pemesanan
                        </Link>
                    </li>
                </ul>

                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-slate-900 border-t border-slate-700">
                    <ul className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
                        <li>
                            <Link to="/" onClick={() => setOpen(false)} className="block hover:text-emerald-400">
                                Beranda
                            </Link>
                        </li>
                        <li onClick={goToMovies} className="hover:text-emerald-400 cursor-pointer">
                            Daftar Film
                        </li>
                        <li>
                            <Link to="/booking" onClick={() => setOpen(false)} className="block hover:text-emerald-400">
                                Pemesanan
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
