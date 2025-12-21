// src/components/FleetGallery.jsx
const fleets = Array.from({ length: 6 }).map((_, i) => ({
  name: `Mobil ${i + 1}`,
  img: "https://images.unsplash.com/photo-1549924231-f129b911e442",
}));

export default function FleetGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-center text-3xl font-bold">Armada Kami</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {fleets.map((car, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={car.img}
              alt={car.name}
              className="h-48 w-full object-cover hover:scale-105 transition duration-300"
            />
            <div className="p-4 text-center font-semibold">{car.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
