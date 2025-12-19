import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const movies = [
    {
        id: 1,
        title: "Avengers: Endgame",
        poster: "/avengers-endgame.jpg",
        rating: 4.8,
        duration: "181 menit",
    },
    {
        id: 2,
        title: "Interstellar",
        poster: "/interstellar.jpg",
        rating: 4.7,
        duration: "169 menit",
    },
    {
        id: 3,
        title: "Spider-Man: No Way Home",
        poster: "/spiderman-nowayhome.jpg",
        rating: 4.6,
        duration: "148 menit",
    },
    {
        id: 4,
        title: "Demon Slayer: Kimetsu No Yaiba The Movie: Infinity Castle",
        poster: "/demon-slayer-movie.jpg",
        rating: 4.8,
        duration: "156 menit",
    },
];

export default function MovieList() {
    return (
        <section id="movies" className="bg-slate-100 py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Daftar Film</h2>
                    <p className="text-slate-600">Pilih film favorit Anda yang sedang tayang di bioskop</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movies.map((movie) => (
                        <div key={movie.id} className="bg-white rounded-3xl shadow hover:shadow-xl transition overflow-hidden h-[560px] flex flex-col">
                            <img src={movie.poster} alt={movie.title} className="w-full h-[380px] object-cover" />

                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">{movie.title}</h3>

                                <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400" />
                                        <span>{movie.rating}</span>
                                    </div>
                                    <span>{movie.duration}</span>
                                </div>

                                <Link to="/booking" state={{ movie: movie.title }} className="mt-auto w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-xl font-semibold transition">
                                    Pesan Tiket
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
