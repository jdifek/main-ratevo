import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'In-house проекты | Digital Agency Estonia',
  description: 'Наши собственные продукты: CRM-системы, SaaS решения и digital инструменты.',
}

export default function InHouse() {
  const products = [
    {
      name: 'SimpleCRM',
      tagline: 'Простая CRM для малого бизнеса',
      description: 'Легкая в использовании CRM-система для управления клиентами, сделками и задачами.',
      features: [
        'Управление контактами',
        'Воронка продаж',
        'Email и телефония',
        'Задачи и напоминания',
        'Отчеты и аналитика'
      ],
      status: 'Beta',
      statusColor: 'bg-green-100 text-green-700',
      icon: '📊',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      name: 'Analytics Hub',
      tagline: 'Единая платформа аналитики',
      description: 'Собирайте данные из различных источников и получайте единый взгляд на метрики.',
      features: [
        'Интеграция с GA, Facebook',
        'Настраиваемые дашборды',
        'Автоматические отчеты',
        'API для кастомных источников',
        'Экспорт данных'
      ],
      status: 'In Development',
      statusColor: 'bg-blue-100 text-blue-700',
      icon: '📈',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500'
    },
    {
      name: 'FormBuilder Pro',
      tagline: 'Конструктор форм для сайтов',
      description: 'Создавайте красивые формы без программирования.',
      features: [
        'Drag & drop конструктор',
        'Готовые шаблоны',
        'Интеграция с CRM',
        'Аналитика заполнений',
        'A/B тестирование'
      ],
      status: 'Coming Soon',
      statusColor: 'bg-gray-100 text-gray-700',
      icon: '📝',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400"></div>
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши продукты</h1>
          <p className="text-xl text-blue-100">
            Мы создаем собственные SaaS решения и digital инструменты
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all duration-300">
                <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${product.statusColor}`}>
                        {product.status}
                      </span>
                    </div>
                    
                    <p className="text-xl text-gray-600 mb-4">{product.tagline}</p>
                    <p className="text-gray-700 mb-8">{product.description}</p>
                    
                    <h3 className="font-bold mb-4 text-gray-800">Возможности:</h3>
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mr-3">
                            ✓
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {product.status === 'Beta' && (
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition">
                        Попробовать бесплатно →
                      </button>
                    )}
                    {product.status === 'Coming Soon' && (
                      <button className="bg-gray-200 text-gray-600 px-6 py-3 rounded-2xl font-semibold cursor-not-allowed">
                        Скоро запуск
                      </button>
                    )}
                    {product.status === 'In Development' && (
                      <Link 
                        href="/contacts"
                        className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-2xl font-semibold hover:bg-blue-50 transition"
                      >
                        Early access →
                      </Link>
                    )}
                  </div>
                  
                  <div className={`md:w-1/2 ${product.color} flex items-center justify-center p-12 min-h-[400px]`}>
                    <div className="text-9xl opacity-30 text-white">{product.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            Есть идея для совместного проекта?
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 mb-8 mt-8">
            Мы всегда открыты к партнерству и готовы обсудить новые возможности
          </p>
          <Link 
            href="/contacts"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  )
}
