// src/components/FleetGallery.jsx
import { Users, Fuel, Gauge } from "lucide-react";

const fleets = [
  {
    name: "Toyota Avanza",
    img: "/images/armada/avanza.avif",
    capacity: "7 Orang",
    type: "Manual/Matik",
    price: "Mulai Rp 350rb",
  },
  {
    name: "Toyota Innova Reborn",
    img: "/images/armada/expander.avif",
    capacity: "7 Orang",
    type: "Manual/Matik",
    price: "Mulai Rp 600rb",
  },
  {
    name: "Toyota Hiace",
    img: "/images/armada/xenia.jpg",
    capacity: "14 Orang",
    type: "Manual",
    price: "Mulai Rp 1.1jt",
  },
];

export default function FleetGallery() {
  return (
    <section className="bg-white py-24" id="armada">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-2">
              Pilihan Kendaraan
            </h2>
            <h3 className="text-4xl font-extrabold text-slate-900">
              Armada Terbaik Kami
            </h3>
          </div>
          <p className="text-slate-500 max-w-md">
            Semua unit kami dalam kondisi prima, bersih, dan rutin diservis
            untuk menjamin kenyamanan perjalanan Anda.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {fleets.map((car, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={car.img}
                  alt={car.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-blue-600 shadow-sm">
                    {car.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  {car.name}
                </h4>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Users className="w-4 h-4 text-blue-500" />
                    {car.capacity}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Gauge className="w-4 h-4 text-blue-500" />
                    {car.type}
                  </div>
                </div>

                <button className="w-full py-3 rounded-xl bg-slate-900 text-white font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200">
                  Sewa Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
