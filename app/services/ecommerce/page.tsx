import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Разработка интернет-магазинов | Digital Agency Estonia',
  description: 'Создаем прибыльные интернет-магазины под ключ. E-commerce решения с интеграцией платежей, складского учета и маркетинговых инструментов.',
}

export default function EcommercePage() {
  const features = [
    {
      title: 'Интеграция платежных систем',
      description: 'Подключаем все популярные способы оплаты: банковские карты, PayPal, Stripe, криптовалюты',
      icon: '💳',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Складской учет',
      description: 'Автоматическая синхронизация с 1C, складским ПО и системами управления запасами',
      icon: '📦',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500'
    },
    {
      title: 'Мобильная адаптация',
      description: 'Идеальный вид на всех устройствах. Более 60% продаж с мобильных',
      icon: '📱',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      title: 'SEO оптимизация',
      description: 'Настраиваем сайт для поисковых систем с первого дня запуска',
      icon: '🔍',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      title: 'Аналитика продаж',
      description: 'Отслеживание конверсий, воронки продаж, поведения покупателей',
      icon: '📊',
      color: 'bg-gradient-to-br from-red-500 to-red-600'
    },
    {
      title: 'Email маркетинг',
      description: 'Автоматические рассылки, брошенные корзины, персональные предложения',
      icon: '📧',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600'
    }
  ]

  const packages = [
    {
      name: 'Базовый',
      price: '3000€',
      description: 'Для небольших магазинов',
      features: [
        'До 100 товаров',
        'Базовый дизайн',
        'Мобильная версия',
        'Корзина и оформление',
        'Одна платежная система',
        '1 месяц поддержки'
      ],
      color: 'border-gray-300'
    },
    {
      name: 'Стандарт',
      price: '5500€',
      description: 'Оптимальный выбор',
      features: [
        'До 500 товаров',
        'Индивидуальный дизайн',
        'Все устройства',
        'Личный кабинет',
        'Несколько способов оплаты',
        'Интеграция с 1C',
        'SEO оптимизация',
        '3 месяца поддержки'
      ],
      color: 'border-blue-500',
      popular: true
    },
    {
      name: 'Премиум',
      price: 'от 10000€',
      description: 'Для крупного бизнеса',
      features: [
        'Неограниченно товаров',
        'Уникальный дизайн',
        'Мультиязычность',
        'B2B функционал',
        'Все интеграции',
        'Маркетинговые инструменты',
        'Продвинутая аналитика',
        '6 месяцев поддержки'
      ],
      color: 'border-yellow-500'
    }
  ]

  const cases = [
    {
      title: 'Магазин электроники',
      result: '+150% продаж за 6 месяцев',
      description: '5000+ товаров, интеграция с несколькими поставщиками',
      icon: '💻',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Fashion магазин',
      result: '12% средняя конверсия',
      description: 'Визуальный каталог, примерка AR, персонализация',
      icon: '👗',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      title: 'Продукты питания',
      result: '50+ продавцов на платформе',
      description: 'Маркетплейс для фермеров с доставкой',
      icon: '🥗',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400"></div>
        <div className="max-w-7xl mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              E-commerce разработка
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Создаем прибыльные<br />интернет-магазины
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Полный цикл разработки от дизайна до запуска и продвижения. 
              Средний рост продаж наших клиентов — 120% в первый год.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition text-center">
                Получить расчет
              </Link>
              <Link href="#packages" className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition text-center">
                Посмотреть тарифы
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Что входит в разработку
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Комплексное решение для успешной торговли онлайн
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 overflow-hidden group"
              >
                <div className={`${feature.color} h-24 flex items-center justify-center text-4xl text-white`}>
                  {feature.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Тарифы и цены
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              Выберите подходящий пакет или закажите индивидуальное решение
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-white rounded-3xl shadow-lg p-8 border-2 ${pkg.color} ${pkg.popular ? 'transform md:scale-105' : ''} hover:shadow-xl transition-all duration-300 relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold text-blue-600 mb-6">{pkg.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mr-3">
                        ✓
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-2xl font-semibold transition ${
                  pkg.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}>
                  Выбрать тариф
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Наши кейсы
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border-2 border-transparent hover:border-blue-500"
              >
                <div className={`${case_.color} h-48 flex items-center justify-center text-6xl text-white`}>
                  {case_.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                    {case_.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{case_.description}</p>
                  <p className="text-sm font-semibold text-green-600">{case_.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Получить расчет проекта
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              Оставьте заявку и получите детальный расчет стоимости в течение 24 часов
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}