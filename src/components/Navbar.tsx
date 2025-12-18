import { Film, Ticket, User } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="w-full bg-slate-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Film className="w-6 h-6" />
                    <span className="text-xl font-semibold tracking-wide">MovieTix</span>
                </div>

                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <li className="hover:text-emerald-400 cursor-pointer transition">Beranda</li>
                    <li className="hover:text-emerald-400 cursor-pointer transition">Daftar Film</li>
                    <li className="hover:text-emerald-400 cursor-pointer transition">Pemesanan</li>
                    <li className="hover:text-emerald-400 cursor-pointer transition">Tiket Saya</li>
                </ul>

                <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-xl text-sm font-semibold transition">
                    <User className="w-4 h-4" />
                    Masuk
                </button>
            </div>
        </nav>
    );
}
