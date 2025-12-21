// src/components/TravelPackages.jsx
import {
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  XCircle,
  Phone,
} from "lucide-react";

const packages = [
  {
    title: "Paket Wisata Palembang – Bandung",
    price: "2.350.000",
    duration: "4 Hari 3 Malam (PP)",
    image: "/images/destinations/bandung.avif", // Pastikan gambar ada di folder public
    itinerary: [
      {
        day: 1,
        activity: "Perjalanan Palembang ke Bandung via Bus Pariwisata",
      },
      {
        day: 2,
        activity:
          "Explore Lembang: Farm House, Floating Market, Great Asia Africa",
      },
      {
        day: 3,
        activity: "Wisata Alam: Kawah Putih Ciwidey & Belanja di Cihampelas",
      },
      { day: 4, activity: "Perjalanan kembali dan tiba di Palembang" },
    ],
    facilities: [
      "Bus Pariwisata Full AC",
      "Hotel 1 Malam",
      "Makan sesuai program",
      "Tiket Masuk Wisata",
      "Tour Leader",
      "Dokumentasi",
    ],
    notIncluded: ["Pengeluaran pribadi", "Oleh-oleh", "Biaya di luar program"],
  },
  {
    title: "Paket Wisata Palembang – Pagar Alam",
    price: "900.000",
    duration: "Trip Domestik",
    image: "/images/destinations/pagaralam.jpeg",
    destinations: ["Green Paradise", "Kebun Teh", "Curup Embun"],
    facilities: [
      "Transportasi AC",
      "Driver & BBM",
      "Tiket Masuk Wisata",
      "Makan 2x",
      "Air Mineral",
      "Dokumentasi",
    ],
    notIncluded: ["Pengeluaran pribadi", "Akomodasi Hotel (Kecuali request)"],
  },
];

export default function TravelPackages() {
  return (
    <section id="paket-wisata" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">
            Penawaran Spesial
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900">
            Paket Perjalanan Wondirtrip
          </h3>
          <p className="mt-4 text-slate-600 italic">
            "Journey Beyond Destinations"
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col"
            >
              {/* Header Image & Price Tag */}
              <div className="relative h-64">
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 z-20">
                  <span className="bg-yellow-400 text-slate-900 font-bold px-4 py-2 rounded-full shadow-lg text-sm">
                    Mulai Rp {pkg.price}/pax
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <h4 className="text-2xl font-bold mb-1">{pkg.title}</h4>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Clock className="w-4 h-4" /> {pkg.duration}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Side: Itinerary/Destinations */}
                  <div>
                    <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      {pkg.itinerary ? "Itinerary" : "Destinasi Utama"}
                    </h5>
                    <ul className="space-y-3">
                      {pkg.itinerary
                        ? pkg.itinerary.map((item, i) => (
                            <li
                              key={i}
                              className="text-sm text-slate-600 leading-relaxed"
                            >
                              <span className="font-bold text-blue-600">
                                H{item.day}:
                              </span>{" "}
                              {item.activity}
                            </li>
                          ))
                        : pkg.destinations.map((dest, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm text-slate-600 font-medium"
                            >
                              <div className="h-1.5 w-1.5 bg-blue-500 rounded-full" />{" "}
                              {dest}
                            </li>
                          ))}
                    </ul>
                  </div>

                  {/* Right Side: Facilities */}
                  <div>
                    <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />{" "}
                      Fasilitas
                    </h5>
                    <ul className="grid grid-cols-1 gap-2">
                      {pkg.facilities.map((fac, i) => (
                        <li
                          key={i}
                          className="text-xs text-slate-600 flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />{" "}
                          {fac}
                        </li>
                      ))}
                    </ul>

                    <h5 className="font-bold text-slate-900 mt-6 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" /> Tidak
                      Termasuk
                    </h5>
                    <ul className="space-y-1">
                      {pkg.notIncluded.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs text-slate-400 flex items-center gap-2"
                        >
                          <XCircle className="w-3.5 h-3.5 text-red-400" />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Button */}
                <div className="mt-10 pt-6 border-t border-slate-100">
                  <a
                    href="https://wa.me/628117312056"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                  >
                    <Phone className="w-5 h-5" />
                    Info & Reservasi (WhatsApp)
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
