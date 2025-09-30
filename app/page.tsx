import Link from 'next/link'
import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Главная | Digital Agency Estonia',
  description: 'Создаем интернет-магазины, лендинги и корпоративные сайты. Внедряем CRM-системы.',
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Создаем digital решения<br />для вашего бизнеса
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Разработка интернет-магазинов, лендингов, корпоративных сайтов и внедрение CRM-систем
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition"
              >
                Оставить заявку
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Наши работы
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Наши услуги
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Полный спектр digital решений для вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Интернет-магазины"
              description="E-commerce решения под ключ"
              icon="🛒"
              color="bg-gradient-to-br from-blue-500 to-blue-600"
              href="/services/ecommerce"
            />
            <ServiceCard
              title="Лендинги"
              description="Продающие посадочные страницы"
              icon="📱"
              color="bg-gradient-to-br from-yellow-400 to-yellow-500"
              href="/services/landing"
            />
            <ServiceCard
              title="Корпоративные сайты"
              description="Имиджевые сайты для бизнеса"
              icon="🏢"
              color="bg-gradient-to-br from-blue-500 to-blue-600"
              href="/services/corporate"
            />
            <ServiceCard
              title="CRM-системы"
              description="Автоматизация продаж"
              icon="⚙️"
              color="bg-gradient-to-br from-yellow-400 to-yellow-500"
              href="/services/crm"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-8 border border-blue-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <StatCard value="50+" label="Реализованных проектов" color="text-blue-500" />
              <StatCard value="5+" label="Лет на рынке" color="text-yellow-400" />
              <StatCard value="98%" label="Довольных клиентов" color="text-blue-500" />
              <StatCard value="24/7" label="Поддержка" color="text-yellow-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Последние проекты
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              Наши лучшие работы за последнее время
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <PortfolioCard
              title="Интернет-магазин электроники"
              category="E-commerce"
              result="+150% продаж"
              icon="🛍️"
              color="bg-gradient-to-br from-purple-500 to-purple-600"
            />
            <PortfolioCard
              title="Лендинг IT-компании"
              category="Landing"
              result="12% конверсия"
              icon="💻"
              color="bg-gradient-to-br from-green-500 to-green-600"
            />
            <PortfolioCard
              title="Корпоративный портал"
              category="Corporate"
              result="5000+ пользователей"
              icon="🏆"
              color="bg-gradient-to-br from-red-500 to-red-600"
            />
          </div>
          
          <div className="text-center">
            <Link 
              href="/portfolio" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
            >
              Смотреть все проекты →
            </Link>
          </div>
        </div>
      </section>

      {/* In-house Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Наши продукты
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Разрабатываем собственные SaaS-решения и digital продукты
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ProductCard
              name="SimpleCRM"
              tagline="Простая CRM для малого бизнеса"
              icon="📊"
              color="bg-gradient-to-br from-blue-500 to-blue-600"
              status="Beta"
            />
            <ProductCard
              name="Analytics Hub"
              tagline="Единая платформа аналитики"
              icon="📈"
              color="bg-gradient-to-br from-yellow-400 to-yellow-500"
              status="In Development"
            />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Обсудим ваш проект?
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h3 className="text-3xl font-bold mb-4">Готовы начать проект?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и узнайте стоимость разработки вашего проекта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="bg-white text-gray-800 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition">
              Бесплатная консультация
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-gray-800 transition">
              Примеры работ
            </Link>
          </div>
        </div>
        <div className="absolute -right-8 -bottom-8 text-8xl opacity-10">💡</div>
      </section>
    </div>
  )
}

function ServiceCard({ title, description, icon, color, href }: any) {
  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 h-full">
        <div className={`${color} h-24 flex items-center justify-center text-4xl text-white`}>
          {icon}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  )
}

function StatCard({ value, label, color }: any) {
  return (
    <div>
      <div className={`text-3xl md:text-4xl font-bold ${color} mb-2`}>{value}</div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  )
}

function PortfolioCard({ title, category, result, icon, color }: any) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border-2 border-transparent hover:border-blue-500">
      <div className={`${color} h-48 flex items-center justify-center text-6xl text-white relative`}>
        {icon}
        <div className="absolute top-4 left-4">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">{title}</h3>
        <p className="text-sm font-semibold text-green-600">{result}</p>
      </div>
    </div>
  )
}

function ProductCard({ name, tagline, icon, color, status }: any) {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500">
      <div className={`${color} h-32 flex items-center justify-center text-5xl text-white relative`}>
        {icon}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            status === 'Beta' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
          }`}>
            {status}
          </span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600">{tagline}</p>
      </div>
    </div>
  )
}