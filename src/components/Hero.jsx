// src/components/Hero.jsx
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/destinations/ampera.png"
          alt="Jelajahi Indonesia"
          // object-cover memastikan gambar memenuhi layar tanpa distorsi
          // object-center memastikan fokus gambar tetap di tengah
          className="h-full w-full object-cover object-center"
        />
        {/* Overlay: Gelap di bawah (Mobile) dan Gelap di kiri (Desktop) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 w-full">
        <div className="max-w-3xl text-center md:text-left">
          {/* Badge Promo */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-600/20 border border-blue-400/30 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-blue-100">
              Tersedia Paket Liburan 2025
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Nikmati Perjalanan <br className="hidden md:block" />
            <span className="text-blue-500">Tanpa Batas.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-slate-200 md:text-xl mx-auto md:mx-0">
            "Eksplorasi destinasi terbaik Indonesia tanpa ribet. Nikmati
            kemudahan akses transportasi premium dan paket tur terkurasi yang
            dirancang khusus untuk kenyamanan dan keamanan perjalanan Anda serta
            keluarga."
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-600/30">
              Booking Sekarang
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="https://wa.me/6289635463544"
              className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md border border-white/20 transition-all hover:bg-white/20"
            >
              <Phone className="w-5 h-5" />
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
