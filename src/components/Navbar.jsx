// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek ganti background saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Destinasi", href: "#destinasi" },
    { name: "Keunggulan", href: "#why-choose-us" },
    { name: "Paket Wisata", href: "#paket-wisata" },
  ];

  return (
    <header
      className={`fixed top-0 z-[100] w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
            {/* <span className="text-white font-bold text-xl">T</span> */}
            <img src="/logo.jpeg" alt="" className="w-16 h-8" />
          </div>
          <h1
            className={`text-xl font-bold tracking-tight ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            Wondir<span className="text-blue-500">Trip</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-blue-500 ${
                scrolled ? "text-slate-600" : "text-slate-200"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/628117312056"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-600/40 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" />
            Booking Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-slate-900 bg-slate-100" : "text-white bg-white/10"
          }`}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu (Slide Down) */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 transition-all duration-300 md:hidden ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-slate-600 hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/628117312056"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-sm font-bold text-white shadow-lg"
          >
            <Phone className="w-4 h-4" />
            Booking Now (WhatsApp)
          </a>
        </nav>
      </div>
    </header>
  );
}
