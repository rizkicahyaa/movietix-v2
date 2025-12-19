import { useLocation, Link } from "react-router-dom";

export default function DetailTicket() {
    const location = useLocation();
    const ticket = location.state;

    if (!ticket) {
        return (
            <section className="min-h-screen flex items-center justify-center">
                <p className="text-slate-600">Tidak ada data tiket.</p>
            </section>
        );
    }

    return (
        <section className="bg-slate-100 min-h-screen py-20">
            <div className="max-w-xl mx-auto px-6">
                <div className="bg-white rounded-3xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Detail Tiket Bioskop</h2>

                    <div className="space-y-4 text-sm">
                        <div className="flex justify-between">
                            <span className="text-slate-500">Nama</span>
                            <span className="font-medium">{ticket.name}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-500">Film</span>
                            <span className="font-medium">{ticket.movie}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-500">Tanggal</span>
                            <span className="font-medium">{ticket.date}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-500">Jam</span>
                            <span className="font-medium">{ticket.time}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-500">Jumlah Tiket</span>
                            <span className="font-medium">{ticket.seats}</span>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Link to="/" className="block text-center bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-2xl font-semibold transition">
                            Kembali ke Beranda
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
