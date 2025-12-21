// src/components/TrendingDestination.jsx

const destinations = [
  {
    name: "Bali",
    img: "/images/destinations/bali.jpg",
  },
  {
    name: "Raja Ampat",
    img: "/images/destinations/images.jfif",
  },
  {
    name: "Labuan Bajo",
    img: "/images/destinations/jakarta-monas.jpg",
  },
  {
    name: "Yogyakarta",
    img: "/images/destinations/jambi.jpg",
  },
  {
    name: "Lombok",
    img: "/images/destinations/lampung00.jpg",
  },
  {
    name: "Bromo",
    img: "/images/destinations/medan.jpg",
  },
];

export default function TrendingDestination() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-center text-3xl font-bold">
        Destinasi Populer
      </h2>

      {/* Mengubah md:grid-cols-3 menjadi grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          agar tampilan lebih responsif untuk 6 item */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((item) => (
          <div
            key={item.name}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
            />
            {/* Overlay Gradient agar teks lebih mudah dibaca */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <h3 className="text-xl font-bold text-white">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
