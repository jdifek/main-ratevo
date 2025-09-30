import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Услуги | Digital Agency Estonia',
  description: 'Разработка интернет-магазинов, лендингов, корпоративных сайтов и внедрение CRM-систем.',
}

export default function Services() {
  const services = [
    {
      slug: 'ecommerce',
      title: 'Интернет-магазины',
      description: 'Разработка e-commerce решений под ключ',
      icon: '🛒',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      features: [
        'Интеграция платежных систем',
        'Складской учет и автоматизация',
        'Мобильная адаптация',
        'SEO оптимизация',
        'Аналитика и отчетность'
      ],
      price: 'от 3000€'
    },
    {
      slug: 'landing',
      title: 'Лендинги',
      description: 'Продающие посадочные страницы',
      icon: '📱',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500',
      features: [
        'Высокая конверсия',
        'A/B тестирование',
        'Интеграция с CRM',
        'Аналитика поведения',
        'Быстрая загрузка'
      ],
      price: 'от 800€'
    },
    {
      slug: 'corporate',
      title: 'Корпоративные сайты',
      description: 'Имиджевые сайты для бизнеса',
      icon: '🏢',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      features: [
        'Современный дизайн',
        'Удобная CMS',
        'Многоязычность',
        'Интеграция с сервисами',
        'Техподдержка'
      ],
      price: 'от 1500€'
    },
    {
      slug: 'crm',
      title: 'CRM-системы',
      description: 'Внедрение и разработка CRM',
      icon: '⚙️',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      features: [
        'Автоматизация продаж',
        'Управление клиентами',
        'Интеграция с телефонией',
        'Отчеты и аналитика',
        'Кастомизация под задачи'
      ],
      price: 'от 2500€'
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400"></div>
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Полный спектр digital решений для вашего бизнеса
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, idx) => (
              <div 
                key={service.slug}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl text-white`}>
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mr-3">
                            ✓
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                      <Link 
                        href={`/services/${service.slug}`}
                        className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
                      >
                        Подробнее →
                      </Link>
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 ${service.color} flex items-center justify-center p-12 min-h-[300px]`}>
                    <div className="text-9xl opacity-20 text-white">{service.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Получить консультацию
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              Оставьте заявку и получите расчет стоимости
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}