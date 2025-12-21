// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-sky-600 to-blue-700 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Jelajahi Wisata Terbaik di Indonesia
        </h1>
        <p className="mt-4 text-lg text-sky-100">
          Paket perjalanan nyaman, aman, dan terpercaya
        </p>
        <button className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-sky-700 hover:bg-sky-100 transition">
          Lihat Destinasi
        </button>
      </div>
    </section>
  );
}
