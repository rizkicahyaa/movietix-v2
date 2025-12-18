import { Film, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
                <div>
                    <div className="flex items-center gap-2 text-white mb-4">
                        <Film className="w-6 h-6" />
                        <span className="text-xl font-semibold">MovieTix</span>
                    </div>
                    <p className="text-sm leading-relaxed">Platform pemesanan tiket bioskop online yang memudahkan Anda menemukan film favorit dan memesan tiket tanpa antre.</p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Menu</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-emerald-400 cursor-pointer">Beranda</li>
                        <li className="hover:text-emerald-400 cursor-pointer">Daftar Film</li>
                        <li className="hover:text-emerald-400 cursor-pointer">Pemesanan</li>
                        <li className="hover:text-emerald-400 cursor-pointer">Tiket Saya</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Bantuan</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-emerald-400 cursor-pointer">FAQ</li>
                        <li className="hover:text-emerald-400 cursor-pointer">Syarat & Ketentuan</li>
                        <li className="hover:text-emerald-400 cursor-pointer">Kebijakan Privasi</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Ikuti Kami</h4>
                    <div className="flex items-center gap-4">
                        <Instagram className="w-5 h-5 hover:text-emerald-400 cursor-pointer" />
                        <Twitter className="w-5 h-5 hover:text-emerald-400 cursor-pointer" />
                        <Facebook className="w-5 h-5 hover:text-emerald-400 cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-center text-slate-400">© {new Date().getFullYear()} MovieTix. All rights reserved.</div>
            </div>
        </footer>
    );
}
