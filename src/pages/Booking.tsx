import { useState } from "react";

export default function BookingPage() {
    interface BookingForm {
        name: string;
        movie: string;
        date: string;
        time: string;
        seats: number;
    }

    const [form, setForm] = useState<BookingForm>({
        name: "",
        movie: "",
        date: "",
        time: "",
        seats: 1,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Tiket berhasil dipesan!");
    };

    return (
        <section className="bg-slate-100 min-h-screen py-20">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Pemesanan Tiket</h2>
                <p className="text-slate-600 mb-8">Lengkapi data berikut untuk memesan tiket bioskop</p>

                <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nama Pemesan</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border border-slate-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Film</label>
                        <select name="movie" value={form.movie} onChange={handleChange} required className="w-full border border-slate-300 rounded-xl px-4 py-2">
                            <option value="">Pilih Film</option>
                            <option value="Avengers: Endgame">Avengers: Endgame</option>
                            <option value="Interstellar">Interstellar</option>
                            <option value="Spider-Man: No Way Home">Spider-Man: No Way Home</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Tanggal</label>
                        <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full border border-slate-300 rounded-xl px-4 py-2" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Jam Tayang</label>
                        <select name="time" value={form.time} onChange={handleChange} required className="w-full border border-slate-300 rounded-xl px-4 py-2">
                            <option value="">Pilih Jam</option>
                            <option value="12:00">12:00</option>
                            <option value="15:00">15:00</option>
                            <option value="18:00">18:00</option>
                            <option value="21:00">21:00</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Jumlah Tiket</label>
                        <input type="number" name="seats" min="1" max="10" value={form.seats} onChange={handleChange} className="w-full border border-slate-300 rounded-xl px-4 py-2" />
                    </div>

                    <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-2xl font-semibold transition">
                        Pesan Tiket
                    </button>
                </form>
            </div>
        </section>
    );
}
