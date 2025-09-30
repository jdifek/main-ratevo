"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={"/logoNew.svg"} alt="Логотип" width={35} height={35} />

            <span className="text-2xl font-bold tracking-tight text-[#1A4D8F] hover:text-[#00AEEF] transition-colors">
              <span className="text-blue-600">Ratevo</span>
              <span className="text-gray-800">.ee</span>{" "}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Услуги
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Портфолио
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              О компании
            </Link>
            <Link
              href="/inhouse"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Продукты
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Блог
            </Link>
            <Link
              href="/contacts"
              className="bg-blue-600 text-white px-6 py-2 rounded-2xl font-semibold hover:bg-blue-700 transition"
            >
              Контакты
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t space-y-2">
            <Link
              href="/services"
              className="block py-2 text-gray-700 font-medium"
            >
              Услуги
            </Link>
            <Link
              href="/portfolio"
              className="block py-2 text-gray-700 font-medium"
            >
              Портфолио
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 font-medium"
            >
              О компании
            </Link>
            <Link
              href="/inhouse"
              className="block py-2 text-gray-700 font-medium"
            >
              Продукты
            </Link>
            <Link href="/blog" className="block py-2 text-gray-700 font-medium">
              Блог
            </Link>
            <Link
              href="/contacts"
              className="block py-2 text-blue-600 font-semibold"
            >
              Контакты
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
