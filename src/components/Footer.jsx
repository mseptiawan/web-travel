// src/components/Footer.jsx
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  Facebook,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const destinationGallery = [
    "/images/destinations/bali.jpg",
    "/images/destinations/images.jfif",
    "/images/destinations/jakarta-monas.jpg",
    "/images/destinations/jambi.jpg",
    "/images/destinations/lampung00.jpg",
    "/images/destinations/Pekanbaru_2019.jpg",
  ];

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & About */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Wondir<span className="text-blue-500">Trip</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Solusi transportasi terpercaya untuk perjalanan wisata, bisnis,
              dan keluarga. Kami menghadirkan armada premium dengan layanan
              supir profesional untuk kenyamanan Anda.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-900 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links / Contact */}
          <div>
            <h4 className="mb-6 font-bold text-white uppercase tracking-wider text-sm">
              Kontak Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm group-hover:text-white transition-colors">
                  0811-7312-056
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm group-hover:text-white transition-colors">
                  travel@email.com
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-sm group-hover:text-white transition-colors">
                  Jl. Wondirtrip No. 123, Palembang Sumatera Selatan{" "}
                </span>
              </li>
            </ul>
          </div>

          {/* Destination Gallery Mini */}
          <div>
            <h4 className="mb-6 font-bold text-white uppercase tracking-wider text-sm">
              Destinasi Favorit
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {destinationGallery.map((img, i) => (
                <div
                  key={i}
                  className="group relative h-16 w-full overflow-hidden rounded-lg"
                >
                  <img
                    src={img}
                    alt="Gallery"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter / Action */}
          <div>
            <h4 className="mb-6 font-bold text-white uppercase tracking-wider text-sm">
              Dapatkan Promo
            </h4>
            <p className="text-sm mb-4">
              Berlangganan untuk info promo destinasi terbaru.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors text-white">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Wondirtrip. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
