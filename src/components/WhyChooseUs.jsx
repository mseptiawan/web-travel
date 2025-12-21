// src/components/WhyChooseUs.jsx
import { DollarSign, ShieldCheck, Car, Headphones } from "lucide-react";

const features = [
  {
    title: "Harga Terjangkau",
    desc: "Tarif kompetitif dengan kualitas layanan bintang lima tanpa biaya tersembunyi.",
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-100",
  },
  {
    title: "Driver Profesional",
    desc: "Tim driver berpengalaman, ramah, dan mengutamakan keamanan perjalanan Anda.",
    icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
    color: "bg-emerald-100",
  },
  {
    title: "Armada Nyaman",
    desc: "Kendaraan terbaru yang selalu dalam kondisi prima, bersih, dan wangi.",
    icon: <Car className="w-8 h-8 text-orange-600" />,
    color: "bg-orange-100",
  },
  {
    title: "Pelayanan 24 Jam",
    desc: "Siap melayani kebutuhan transportasi Anda kapanpun, siang maupun malam.",
    icon: <Headphones className="w-8 h-8 text-purple-600" />,
    color: "bg-purple-100",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-slate-50 py-24 relative overflow-hidden"
    >
      {/* Ornamen Latar Belakang Modern */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Keunggulan Kami
          </h2>
          <h3 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Mengapa Memilih Kami?
          </h3>
          <p className="mt-4 text-slate-600 text-lg">
            Kami memberikan solusi perjalanan terbaik dengan standar kenyamanan
            dan keamanan kelas atas.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`mb-6 inline-flex p-4 rounded-xl ${feature.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h4>

              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>

              {/* Garis Aksen Bawah saat Hover */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
