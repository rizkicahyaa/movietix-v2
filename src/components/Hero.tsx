import { PlayCircle } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative bg-slate-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 opacity-90" />

            <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Pesan Tiket Bioskop <br />
                        <span className="text-emerald-400">Lebih Cepat & Mudah</span>
                    </h1>
                    <p className="text-slate-300 mb-8 max-w-lg">Temukan film favorit Anda, pilih jadwal terbaik, dan dapatkan tiket bioskop secara instan tanpa antre.</p>

                    <div className="flex flex-wrap items-center gap-4">
                        <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-2xl font-semibold transition">Pesan Sekarang</button>
                        <button className="flex items-center gap-2 border border-slate-500 hover:border-emerald-400 px-6 py-3 rounded-2xl font-medium transition">
                            <PlayCircle className="w-5 h-5" />
                            Lihat Trailer
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <img src="/heroes.jpg" alt="Poster Film" className="w-full h-[380px] object-cover rounded-3xl shadow-2xl" />
                </div>
            </div>
        </section>
    );
}
