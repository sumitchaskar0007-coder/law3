import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
<<<<<<< HEAD
  FaPinterestP,
  FaGoogle,
=======
>>>>>>> 8ded0d751d24b73f8b6ddd76fb48721f31f296fe
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* ================= TOP FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        
        {/* ---------- COL 1: COLLEGE INFO ---------- */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            
            {/* LOGO WITH WHITE BACKGROUND (ONLY LOGO) */}
            <div className="bg-white p-2 rounded-lg shadow-md">
              <img
                src="/assets/images/logo/logo1.png"
                alt="Jadhavar College of Law Logo"
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>

            <span className="font-semibold text-white text-lg leading-tight">
              Jadhavar College of Law
            </span>
          </div>

          <p className="text-sm flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1 text-primary" />
            Narhe, Pune – Maharashtra, India
          </p>

          <p className="text-sm flex items-center gap-2 mt-2">
            <FaPhoneAlt className="text-primary" />
<<<<<<< HEAD
            +91 84465 38995
=======
            +91 9284 246664
>>>>>>> 8ded0d751d24b73f8b6ddd76fb48721f31f296fe
          </p>

          <p className="text-sm flex items-center gap-2 mt-2">
            <FaEnvelope className="text-primary" />
<<<<<<< HEAD
            jadhavarlawadmission@gmail.com
=======
            adityajadhavarlaw@gmail.com
>>>>>>> 8ded0d751d24b73f8b6ddd76fb48721f31f296fe
          </p>
        </div>

        {/* ---------- COL 2: QUICK LINKS ---------- */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/cells" className="hover:text-primary transition">
                Cells & Centers
              </Link>
            </li>
            <li>
              <Link to="/facilities" className="hover:text-primary transition">
                Facilities
              </Link>
            </li>
            <li>
              <Link to="/announcement" className="hover:text-primary transition">
                Announcements
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-primary transition">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* ---------- COL 3: ACADEMICS ---------- */}
        <div>
          <h4 className="text-white font-semibold mb-4">Academics</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/application" className="hover:text-primary transition">
                Application
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:text-primary transition">
                Academic Programs
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-primary transition">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* ---------- COL 4: SOCIAL & SUBSCRIBE ---------- */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay Connected</h4>

          {/* Social Icons - UPDATED LINKS (Twitter/X removed) */}
          <div className="flex gap-3 mb-4">
            <a
              href="https://www.facebook.com/share/1GEPXWnyHT/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/jadhavar_law"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/jadhavar-college-of-law-pune"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
<<<<<<< HEAD
              href="https://in.pinterest.com/jadhavarinstitute/jadhavar-college-of-law-pune/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition"
              aria-label="Pinterest"
            >
              <FaPinterestP />
            </a>

            <a
              href="https://share.google/pwjJkg14l0b8pNFQl"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition"
              aria-label="Google My Business"
            >
              <FaGoogle />
=======
              href="https://www.youtube.com/channel/UCzcw8CD0OJbsQaj9IpDAKZQ"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition"
              aria-label="YouTube"
            >
              <FaYoutube />
>>>>>>> 8ded0d751d24b73f8b6ddd76fb48721f31f296fe
            </a>
          </div>

          {/* Subscribe */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-2"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="w-full bg-primary text-white py-2 rounded-lg hover:opacity-90 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <p>
            © {new Date().getFullYear()} Trijja Media & Works, Pune. All rights reserved.
          </p>
          <p>
            Designed & Developed by{" "}
            <span className="text-primary font-semibold">
              Trijja Media & Works, Pune
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}