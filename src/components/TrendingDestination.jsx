// src/components/TrendingDestination.jsx
const destinations = [
  {
    name: "Bali",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    name: "Raja Ampat",
    img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5",
  },
  {
    name: "Labuan Bajo",
    img: "https://images.unsplash.com/photo-1611302457430-3f70f2cbb8c2",
  },
];

export default function TrendingDestination() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-center text-3xl font-bold">
        Destinasi Populer
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {destinations.map((item) => (
          <div
            key={item.name}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
