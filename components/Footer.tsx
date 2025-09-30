import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              <span className="text-blue-500">Ratevo</span>.ee
            </h3>
            <p className="text-sm text-gray-400">
              Digital агентство полного цикла в Эстонии
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/ecommerce"
                  className="hover:text-white transition"
                >
                  Интернет-магазины
                </Link>
              </li>
              <li>
                <Link
                  href="/services/landing"
                  className="hover:text-white transition"
                >
                  Лендинги
                </Link>
              </li>
              <li>
                <Link
                  href="/services/corporate"
                  className="hover:text-white transition"
                >
                  Корпоративные сайты
                </Link>
              </li>
              <li>
                <Link
                  href="/services/crm"
                  className="hover:text-white transition"
                >
                  CRM-системы
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link href="/inhouse" className="hover:text-white transition">
                  Наши продукты
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 info@ratevo.ee</li>
              <li>📞 +372 552 5855</li>
              <li>📍 Tallinn, Estonia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; 2025 Ratevo.ee. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-3 h-4  rounded-full flex items-center justify-center   transition"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-white hover:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/ratevo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5  rounded-full flex items-center justify-center  transition"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-white hover:text-gray-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5  rounded-full flex items-center justify-center  transition"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-gray-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-5 h-5  rounded-full flex items-center justify-center  transition"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
