import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Разработка лендингов | Digital Agency Estonia',
  description: 'Создаем продающие лендинги с высокой конверсией. Быстрый запуск, A/B тесты, интеграция с рекламой.',
}

export default function LandingPage() {
  const benefits = [
    {
      title: 'Быстрый запуск',
      description: 'От брифа до запуска рекламы — 7-14 дней',
      icon: '⚡',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500'
    },
    {
      title: 'Высокая конверсия',
      description: 'Средняя конверсия наших лендингов — 8-12%',
      icon: '📈',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      title: 'A/B тестирование',
      description: 'Тестируем гипотезы и улучшаем результаты',
      icon: '🧪',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      title: 'Аналитика',
      description: 'Полный контроль эффективности рекламы',
      icon: '📊',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    }
  ]

  const types = [
    {
      name: 'Lead generation',
      description: 'Для сбора заявок и контактов потенциальных клиентов',
      price: '800€',
      icon: '📝',
      features: ['Форма заявки', 'Интеграция с CRM', 'Email уведомления', 'Аналитика']
    },
    {
      name: 'Продающий лендинг',
      description: 'Для прямых продаж товаров или услуг онлайн',
      price: '1200€',
      icon: '💰',
      features: ['Корзина', 'Оплата онлайн', 'Личный кабинет', 'Email маркетинг']
    },
    {
      name: 'Event landing',
      description: 'Для регистрации на мероприятия и вебинары',
      price: '900€',
      icon: '🎯',
      features: ['Регистрация', 'Календарь', 'Рассылки', 'Напоминания']
    },
    {
      name: 'Промо сайт',
      description: 'Для запуска продуктов и акций',
      price: '1000€',
      icon: '🚀',
      features: ['Анимации', 'Видео', 'Countdown', 'Соц. сети']
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-yellow-500 to-yellow-600 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400"></div>
        <div className="max-w-7xl mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              Landing Page разработка
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Лендинги, которые продают
            </h1>
            <p className="text-xl text-yellow-100 mb-8">
              Создаем продающие страницы с конверсией от 8%. Запуск за 7-14 дней. 
              Полная настройка аналитики и интеграции с рекламой.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="bg-white text-yellow-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition text-center">
                Заказать лендинг
              </Link>
              <Link href="#types" className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-yellow-600 transition text-center">
                Посмотреть типы
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Почему лендинги эффективны
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 overflow-hidden text-center group"
              >
                <div className={`${benefit.color} h-32 flex items-center justify-center text-5xl text-white`}>
                  {benefit.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section id="types" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Типы лендингов
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {types.map((type, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-8 border-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{type.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{type.name}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
                
                <div className="text-3xl font-bold text-blue-600 mb-6">{type.price}</div>
                
                <ul className="space-y-3">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
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
              Заказать лендинг
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}