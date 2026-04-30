import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-white p-2 shadow-md">
              <img
                src="/assets/images/logo/logo1.png"
                alt="Jadhavar College of Law Logo"
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>

            <span className="text-lg font-semibold leading-tight text-white">Jadhavar College of Law</span>
          </div>

          <p className="flex items-start gap-2 text-sm">
            <FaMapMarkerAlt className="mt-1 text-primary" />
            Narhe, Pune, Maharashtra, India
          </p>

          <p className="mt-2 flex items-center gap-2 text-sm">
            <FaPhoneAlt className="text-primary" />
            +91 84465 38995
          </p>

          <p className="mt-2 flex items-center gap-2 text-sm">
            <FaEnvelope className="text-primary" />
            jadhavarlawadmission@gmail.com
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="transition hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/cells" className="transition hover:text-primary">
                Cells & Centers
              </Link>
            </li>
            <li>
              <Link to="/facilities" className="transition hover:text-primary">
                Facilities
              </Link>
            </li>
            <li>
              <Link to="/announcement" className="transition hover:text-primary">
                Announcements
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="transition hover:text-primary">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Academics</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/application" className="transition hover:text-primary">
                Application
              </Link>
            </li>
            <li>
              <Link to="/academics" className="transition hover:text-primary">
                Academic Programs
              </Link>
            </li>
            <li>
              <Link to="/careers" className="transition hover:text-primary">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Stay Connected</h4>

          <div className="mb-4 flex gap-3">
            <a
              href="https://www.facebook.com/share/1GEPXWnyHT/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-primary"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/jadhavar_law"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-primary"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/jadhavar-college-of-law-pune"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-primary"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.youtube.com/channel/UCzcw8CD0OJbsQaj9IpDAKZQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-primary"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>

          <form onSubmit={(event) => event.preventDefault()} className="flex flex-col gap-2">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="w-full rounded-lg bg-primary py-2 text-white transition hover:opacity-90">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-gray-400 sm:flex-row">
          <p>(c) {new Date().getFullYear()} Trijja Media & Works, Pune. All rights reserved.</p>
          <p>
            Designed & Developed by <span className="font-semibold text-primary">Trijja Media & Works, Pune</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
