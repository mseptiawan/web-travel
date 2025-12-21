// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        {/* About */}
        <div>
          <h4 className="mb-4 font-semibold text-white">About Us</h4>
          <p className="text-sm">
            Kami menyediakan layanan travel profesional dengan armada terbaik
            dan pelayanan terpercaya.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Contact</h4>
          <p className="text-sm">📞 0896-3546-3544</p>
          <p className="text-sm">✉️ travel@email.com</p>
        </div>

        {/* Gallery */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Gallery</h4>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-16 bg-slate-700 rounded" />
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-4 font-semibold text-white">Social Media</h4>
          <ul className="space-y-2 text-sm">
            <li>📸 Instagram</li>
            <li>▶️ YouTube</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700 py-6 text-center text-sm">
        © {new Date().getFullYear()} TravelKita. All rights reserved.
      </div>
    </footer>
  );
}
