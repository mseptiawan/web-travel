// src/components/FleetGallery.jsx
import { Users, Briefcase, ShieldCheck } from "lucide-react";

const fleets = [
  {
    name: "Kelas  (Avanza)",
    img: "/images/armada/avanza.avif",
    capacity: "6-7 Penumpang",
    luggage: "2 Bagasi Besar",
    features: "AC Double Blower",
    price: "Mulai Rp 350rb",
  },
  {
    name: "Kelas Eksekutif (Expander))",
    img: "/images/armada/expander.avif",
    capacity: "6 Penumpang",
    luggage: "3 Bagasi Besar",
    features: "Interior Mewah & Nyaman",
    price: "Mulai Rp 600rb",
  },
  {
    name: "Pilihan Lain (Xenia)",
    img: "/images/armada/xenia.jpg",
    capacity: "14-19 Penumpang",
    luggage: "5 Bagasi Besar",
    features: "Sangat Luas & Multimedia",
    price: "Mulai Rp 360rb",
  },
];

export default function FleetGallery() {
  return (
    <section className="bg-white py-24" id="armada">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">
              Transportasi Wisata
            </h2>
            <h3 className="text-4xl font-extrabold text-slate-900">
              Armada Kenyamanan Perjalanan
            </h3>
          </div>
          <p className="text-slate-500 max-w-md">
            Pilih kendaraan yang sesuai dengan jumlah rombongan Anda. Kami
            menjamin kebersihan dan standar prokes pada setiap unit.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {fleets.map((car, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.img}
                  alt={car.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 bg-emerald-500/90 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    <ShieldCheck className="w-3 h-3" />
                    Unit Terawat
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-2">
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-tighter">
                    {car.price}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mt-1">
                    {car.name}
                  </h4>
                </div>

                <p className="text-xs text-slate-400 mb-6 italic">
                  {car.features}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Users className="w-4 h-4 text-blue-500" />
                    </div>
                    <span>
                      Kapasitas: <strong>{car.capacity}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Briefcase className="w-4 h-4 text-blue-500" />
                    </div>
                    <span>
                      Bagasi: <strong>{car.luggage}</strong>
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/6289635463544?text=Halo, saya ingin tanya ketersediaan armada ${car.name}`}
                  target="_blank"
                  className="block w-full text-center py-4 rounded-2xl bg-slate-900 text-white font-bold transition-all duration-300 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200 active:scale-95"
                >
                  Pilih Unit Ini
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
