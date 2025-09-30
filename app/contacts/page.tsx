import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Контакты | Digital Agency Estonia',
  description: 'Свяжитесь с нами для обсуждения вашего проекта. Email, телефон, офис в Таллине, Эстония.',
}

export default function ContactsPage() {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'info@agency.ee',
      link: 'mailto:info@agency.ee',
      description: 'Ответим в течение 2 часов',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      icon: '📞',
      title: 'Телефон',
      value: '+372 5XXX XXXX',
      link: 'tel:+372XXXXXXX',
      description: 'Пн-Пт: 9:00 - 18:00',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      icon: '💬',
      title: 'Telegram',
      value: '@agency_estonia',
      link: 'https://t.me/agency_estonia',
      description: 'Быстрый ответ 24/7',
      color: 'bg-gradient-to-br from-blue-400 to-blue-500'
    },
    {
      icon: '📍',
      title: 'Офис',
      value: 'Tallinn, Estonia',
      link: '#map',
      description: 'Narva mnt XX, 10XXX',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    }
  ]

  const workingHours = [
    { day: 'Понедельник - Пятница', time: '9:00 - 18:00', icon: '📅' },
    { day: 'Суббота', time: '10:00 - 14:00', icon: '📅' },
    { day: 'Воскресенье', time: 'Выходной', icon: '🚫' }
  ]

  const faqs = [
    {
      question: 'Сколько стоит разработка сайта?',
      answer: 'Стоимость зависит от сложности проекта. Лендинг от 800€, корпоративный сайт от 1500€, интернет-магазин от 3000€. Точную цену рассчитаем после обсуждения требований.',
      icon: '💰'
    },
    {
      question: 'Как долго длится разработка?',
      answer: 'Лендинг — 7-14 дней, корпоративный сайт — 2-4 недели, интернет-магазин — 2-3 месяца. Точные сроки зависят от объема работ и скорости согласований.',
      icon: '⏱️'
    },
    {
      question: 'Предоставляете ли техподдержку?',
      answer: 'Да, после запуска проекта предоставляем техподдержку от 1 до 6 месяцев в зависимости от пакета. Также доступны отдельные договоры на постоянную поддержку.',
      icon: '🛠️'
    },
    {
      question: 'Работаете ли с международными клиентами?',
      answer: 'Да, мы работаем с клиентами из Эстонии, стран Балтии и других европейских стран. Общаемся на русском, английском и эстонском языках.',
      icon: '🌍'
    }
  ]

  const officeFeatures = [
    { name: 'Бесплатная парковка', icon: '🚗' },
    { name: 'Кофе и чай', icon: '☕' },
    { name: 'Переговорная комната', icon: '🏢' },
    { name: 'WiFi', icon: '📶' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400"></div>
        <div className="max-w-7xl mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Свяжитесь с нами
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Расскажите о вашем проекте, и мы предложим лучшее решение. 
              Ответим на все вопросы и подготовим коммерческое предложение в течение 24 часов.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Выберите удобный способ
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="group"
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500 h-full hover:scale-105">
                  <div className={`${method.color} h-36 flex items-center justify-center text-7xl text-white group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                    <p className="text-blue-600 font-semibold mb-2 group-hover:underline text-lg">{method.value}</p>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
                Напишите нам
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
              </h2>
              <p className="text-gray-600 text-lg mb-8 mt-8">
                Заполните форму, и мы свяжемся с вами в течение 2 часов в рабочее время
              </p>
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              {/* Working Hours */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-8 border-2 border-transparent hover:border-blue-500 transition">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-5xl">🕐</div>
                  <h3 className="text-2xl font-bold text-gray-800">Режим работы</h3>
                </div>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        <span className="text-xl">{schedule.icon}</span>
                        {schedule.day}
                      </span>
                      <span className="text-blue-600 font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-8 border-2 border-transparent hover:border-blue-500 transition">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-5xl">📱</div>
                  <h3 className="text-2xl font-bold text-gray-800">Мы в соцсетях</h3>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <a href="#" className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform shadow-lg">
                    f
                  </a>
                  <a href="#" className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform shadow-lg">
                    tw
                  </a>
                  <a href="#" className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform shadow-lg">
                    in
                  </a>
                  <a href="#" className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform shadow-lg">
                    ig
                  </a>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-lg p-8 border-2 border-blue-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Почему выбирают нас</h3>
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-5xl font-bold text-blue-600 mb-2">2ч</div>
                    <div className="text-gray-600 text-sm font-medium">Время ответа</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-green-600 mb-2">98%</div>
                    <div className="text-gray-600 text-sm font-medium">Довольных клиентов</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600 text-sm font-medium">Проектов в год</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-green-600 mb-2">5+</div>
                    <div className="text-gray-600 text-sm font-medium">Лет на рынке</div>
                  </div>
                </div>
              </div>

              {/* Office Features */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-8 border-2 border-transparent hover:border-blue-500 transition">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-5xl">🏢</div>
                  <h3 className="text-2xl font-bold text-gray-800">Офис</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {officeFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <span className="text-2xl">{feature.icon}</span>
                      <span className="text-sm font-medium">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Частые вопросы
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg mt-6">
              Ответы на самые популярные вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 border-2 border-transparent hover:border-blue-500 transition-all hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl flex-shrink-0">{faq.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg">Не нашли ответ на свой вопрос?</p>
            <a 
              href="#form" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition"
            >
              Задать вопрос
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="bg-gray-200 border-t-4 border-blue-500">
        <div className="h-96 w-full flex items-center justify-center text-gray-500">
          <div className="text-center">
            <div className="text-9xl mb-4">🗺️</div>
            <p className="text-2xl font-bold text-gray-700 mb-2">Google Maps Integration</p>
            <p className="text-gray-600 text-lg">Narva mnt XX, 10XXX, Tallinn, Estonia</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
            >
              Открыть в Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-lg p-8 text-center border-2 border-green-100">
              <div className="text-6xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Хотите позвонить?</h3>
              <p className="text-gray-600 mb-6">Обсудим ваш проект по телефону</p>
              <a 
                href="tel:+372XXXXXXX"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-green-700 transition"
              >
                +372 5XXX XXXX
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-lg p-8 text-center border-2 border-blue-100">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Написать в Telegram</h3>
              <p className="text-gray-600 mb-6">Быстрый ответ 24/7</p>
              <a 
                href="https://t.me/agency_estonia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-600 transition"
              >
                @agency_estonia
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-3xl shadow-lg p-8 text-center border-2 border-purple-100">
              <div className="text-6xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Отправить Email</h3>
              <p className="text-gray-600 mb-6">Ответим в течение 2 часов</p>
              <a 
                href="mailto:info@agency.ee"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-purple-700 transition"
              >
                info@agency.ee
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <div className="text-7xl mb-6">🚀</div>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Готовы начать проект?</h3>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Первая консультация бесплатно. Обсудим ваши задачи и предложим оптимальное решение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#form" className="bg-white text-gray-800 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition">
              Заполнить форму
            </a>
            <a href="tel:+372XXXXXXX" className="border-2 border-white text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-gray-800 transition">
              Позвонить сейчас
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-8">
            🔒 Ваши данные защищены. Мы не передаем информацию третьим лицам
          </p>
        </div>
      </section>
    </div>
  )
}