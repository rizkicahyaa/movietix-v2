import { useLocation, Link } from "react-router-dom";
import { jsPDF } from "jspdf";

export default function DetailTicket() {
    const location = useLocation();
    const ticket = location.state;

    const downloadPDF = () => {
        const doc = new jsPDF();

        const pageWidth = doc.internal.pageSize.getWidth();

        doc.setLineWidth(0.8);
        doc.rect(10, 10, pageWidth - 20, 120, "S");

        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.text("TIKET BIOSKOP", pageWidth / 2, 30, { align: "center" });

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text("MovieTix", pageWidth / 2, 38, { align: "center" });

        doc.setLineWidth(0.3);
        doc.line(20, 45, pageWidth - 20, 45);

        let y = 60;

        const labelX = 25;
        const valueX = 70;

        doc.setFontSize(11);

        doc.text("Nama", labelX, y);
        doc.text(`: ${ticket.name}`, valueX, y);
        y += 12;

        doc.text("Film", labelX, y);
        doc.text(`: ${ticket.movie}`, valueX, y);
        y += 12;

        doc.text("Tanggal", labelX, y);
        doc.text(`: ${ticket.date}`, valueX, y);
        y += 12;

        doc.text("Jam Tayang", labelX, y);
        doc.text(`: ${ticket.time}`, valueX, y);
        y += 12;

        doc.text("Jumlah Tiket", labelX, y);
        doc.text(`: ${ticket.seats}`, valueX, y);

        doc.setFontSize(9);
        doc.setTextColor(100);
        doc.text("Harap tunjukkan tiket ini saat memasuki studio bioskop", pageWidth / 2, 120, { align: "center" });

        doc.save(`Tiket-${ticket.movie}.pdf`);
    };

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

                    <div className="mt-8 space-y-3">
                        <button onClick={downloadPDF} className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-2xl font-semibold transition">
                            Download Tiket (PDF)
                        </button>

                        <Link to="/" className="block text-center bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-2xl font-semibold transition">
                            Kembali ke Beranda
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
