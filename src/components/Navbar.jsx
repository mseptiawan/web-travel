// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-sky-600">TravelKita</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-sky-600">
            Home
          </a>
          <a href="#" className="hover:text-sky-600">
            Destinasi
          </a>
          <a href="#" className="hover:text-sky-600">
            Armada
          </a>
          <a href="#" className="hover:text-sky-600">
            Gallery
          </a>
          <a href="#" className="hover:text-sky-600">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/6289635463544"
          className="hidden md:inline-block rounded-lg bg-sky-600 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-700 transition"
        >
          Booking
        </a>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col gap-4 px-6 py-6 text-sm font-medium">
            <a href="#">Home</a>
            <a href="#">Destinasi</a>
            <a href="#">Armada</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
            <a
              href="https://wa.me/6289635463544"
              className="mt-2 rounded-lg bg-sky-600 px-4 py-2 text-center text-white"
            >
              Booking
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
