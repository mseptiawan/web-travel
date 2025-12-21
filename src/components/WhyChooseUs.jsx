// src/components/WhyChooseUs.jsx
export default function WhyChooseUs() {
  return (
    <section className="bg-sky-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Mengapa Memilih Kami
        </h2>

        <div className="grid gap-8 md:grid-cols-4 text-center">
          {[
            "Harga Terjangkau",
            "Driver Profesional",
            "Armada Nyaman",
            "Pelayanan 24 Jam",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition"
            >
              <div className="mb-4 text-4xl">⭐</div>
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
