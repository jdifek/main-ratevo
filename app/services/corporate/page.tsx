import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Корпоративные сайты | Digital Agency Estonia',
  description: 'Разработка имиджевых корпоративных сайтов. Современный дизайн, удобная CMS, интеграция с сервисами.',
}

export default function CorporatePage() {
  const features = [
    {
      title: 'Современный дизайн',
      description: 'Уникальный дизайн, отражающий ценности вашего бренда',
      icon: '🎨',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      title: 'Удобная CMS',
      description: 'Легко обновляйте контент без технических знаний',
      icon: '⚙️',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Многоязычность',
      description: 'Поддержка любого количества языков из коробки',
      icon: '🌍',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      title: 'Интеграции',
      description: 'CRM, email, соц. сети, аналитика и другие сервисы',
      icon: '🔗',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500'
    },
    {
      title: 'SEO готовность',
      description: 'Оптимизация под поисковые системы с первого дня',
      icon: '🚀',
      color: 'bg-gradient-to-br from-red-500 to-red-600'
    },
    {
      title: 'Безопасность',
      description: 'SSL сертификат, защита от взлома, регулярные бэкапы',
      icon: '🛡️',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600'
    }
  ]

  const sections = [
    { name: 'Главная страница', icon: '🏠' },
    { name: 'О компании', icon: '🏢' },
    { name: 'Услуги/Продукты', icon: '💼' },
    { name: 'Команда', icon: '👥' },
    { name: 'Портфолио/Кейсы', icon: '📊' },
    { name: 'Новости/Блог', icon: '📰' },
    { name: 'Вакансии', icon: '💡' },
    { name: 'Контакты', icon: '📞' }
  ]

  const packages = [
    {
      name: 'Визитка',
      price: '1500€',
      pages: 'До 5 страниц',
      features: [
        'Адаптивный дизайн',
        'Форма обратной связи',
        'Базовое SEO',
        'Google Maps',
        '1 месяц поддержки'
      ],
      color: 'border-gray-300'
    },
    {
      name: 'Корпоративный',
      price: '3500€',
      pages: 'До 15 страниц',
      features: [
        'Индивидуальный дизайн',
        'Удобная CMS',
        'Блог',
        'Мультиязычность',
        'Интеграции',
        'Полное SEO',
        '3 месяца поддержки'
      ],
      popular: true,
      color: 'border-purple-500'
    },
    {
      name: 'Премиум портал',
      price: 'от 7000€',
      pages: 'Без ограничений',
      features: [
        'Уникальный дизайн',
        'Личные кабинеты',
        'Сложные интеграции',
        'Корпоративный портал',
        'Документооборот',
        'Аналитика',
        '6 месяцев поддержки'
      ],
      color: 'border-yellow-500'
    }
  ]

  const examples = [
    {
      title: 'IT компания',
      description: 'Современный сайт с портфолио проектов и блогом',
      icon: '💻',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Юридическая фирма',
      description: 'Строгий дизайн с базой знаний и онлайн-консультациями',
      icon: '⚖️',
      color: 'bg-gradient-to-br from-gray-600 to-gray-700'
    },
    {
      title: 'Производство',
      description: 'Каталог продукции с B2B функционалом',
      icon: '🏭',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      title: 'Медицинский центр',
      description: 'Запись к врачам, услуги, врачи, отзывы',
      icon: '🏥',
      color: 'bg-gradient-to-br from-red-500 to-red-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400"></div>
        <div className="max-w-7xl mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              Корпоративные сайты
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ваш бизнес заслуживает<br />лучшего представления
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Создаем имиджевые корпоративные сайты, которые формируют доверие, 
              привлекают клиентов и отражают ценности вашей компании.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="bg-white text-purple-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition text-center">
                Обсудить проект
              </Link>
              <Link href="#packages" className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-purple-600 transition text-center">
                Посмотреть цены
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
              Что мы предлагаем
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Полный набор инструментов для эффективного онлайн-присутствия
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-500 overflow-hidden group"
              >
                <div className={`${feature.color} h-24 flex items-center justify-center text-4xl text-white`}>
                  {feature.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition">
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

      {/* Typical Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Типичная структура сайта
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              Мы адаптируем структуру под ваши задачи
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 text-center"
              >
                <div className="text-4xl mb-3">{section.icon}</div>
                <div className="font-semibold text-gray-800">{section.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Пакеты и цены
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-white rounded-3xl shadow-lg p-8 border-2 ${pkg.color} ${pkg.popular ? 'transform md:scale-105' : ''} hover:shadow-xl transition-all duration-300 relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.pages}</p>
                <div className="text-4xl font-bold text-purple-600 mb-6">{pkg.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mr-3">
                        ✓
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-2xl font-semibold transition ${
                  pkg.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
                }`}>
                  Выбрать пакет
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Примеры проектов
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examples.map((example, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border-2 border-transparent hover:border-purple-500"
              >
                <div className={`${example.color} h-40 flex items-center justify-center text-6xl text-white`}>
                  {example.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition">
                    {example.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{example.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Обсудить проект
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              Расскажите о вашей компании и получите предложение
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}