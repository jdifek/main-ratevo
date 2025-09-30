import { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'CRM системы | Digital Agency Estonia',
  description: 'Внедрение и разработка CRM-систем. Автоматизация продаж, управление клиентами, интеграция с телефонией.',
}

export default function CRMPage() {
  const benefits = [
    {
      title: 'Автоматизация продаж',
      description: 'Все этапы продаж в одной системе от лида до сделки',
      icon: '🎯',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Управление клиентами',
      description: 'Вся история взаимодействия с клиентом в одном месте',
      icon: '👥',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      title: 'Интеграция телефонии',
      description: 'Автоматическая фиксация звонков и создание задач',
      icon: '📞',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      title: 'Аналитика и отчеты',
      description: 'Прозрачные метрики эффективности отдела продаж',
      icon: '📊',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500'
    },
    {
      title: 'Мобильное приложение',
      description: 'Работайте из любой точки мира',
      icon: '📱',
      color: 'bg-gradient-to-br from-red-500 to-red-600'
    },
    {
      title: 'Email маркетинг',
      description: 'Автоматические рассылки и цепочки писем',
      icon: '📧',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600'
    }
  ]

  const solutions = [
    {
      name: 'Готовая CRM',
      description: 'Внедрение популярных систем',
      systems: ['Bitrix24', 'amoCRM', 'Pipedrive', 'HubSpot'],
      price: 'от 1500€',
      icon: '📦',
      features: [
        'Настройка под ваши процессы',
        'Обучение сотрудников',
        'Интеграция с сайтом',
        'Импорт данных',
        'Техподдержка 3 месяца'
      ]
    },
    {
      name: 'Кастомная CRM',
      description: 'Разработка с нуля под ваши задачи',
      systems: ['Уникальный функционал', 'Ваш дизайн', 'Любые интеграции'],
      price: 'от 8000€',
      icon: '⚙️',
      features: [
        'Разработка под задачи',
        'Полная кастомизация',
        'Интеграция с ERP',
        'Сложная бизнес-логика',
        'Масштабируемость'
      ]
    }
  ]

  const integrations = [
    { name: 'Сайт/Лендинг', icon: '🌐' },
    { name: 'Телефония', icon: '☎️' },
    { name: 'Email', icon: '✉️' },
    { name: 'Мессенджеры', icon: '💬' },
    { name: '1C', icon: '💼' },
    { name: 'Соц. сети', icon: '📱' },
    { name: 'Платежи', icon: '💳' },
    { name: 'Складской учет', icon: '📦' }
  ]

  const steps = [
    {
      number: '01',
      title: 'Анализ',
      description: 'Изучаем ваши процессы продаж и выявляем узкие места',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Выбор решения',
      description: 'Подбираем оптимальную систему под ваш бюджет',
      icon: '✅'
    },
    {
      number: '03',
      title: 'Настройка',
      description: 'Конфигурируем CRM под бизнес-процессы',
      icon: '⚙️'
    },
    {
      number: '04',
      title: 'Обучение',
      description: 'Обучаем команду работе в системе',
      icon: '🎓'
    },
    {
      number: '05',
      title: 'Запуск',
      description: 'Переносим данные и запускаем систему',
      icon: '🚀'
    },
    {
      number: '06',
      title: 'Поддержка',
      description: 'Сопровождаем и оптимизируем после запуска',
      icon: '🛠️'
    }
  ]

  const cases = [
    {
      company: 'IT компания',
      result: '+40% продаж',
      description: 'Внедрили Bitrix24 с интеграцией email и телефонии',
      icon: '💻',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      company: 'Туристическое агентство',
      result: '-60% времени на обработку заявок',
      description: 'Разработали кастомную CRM с бронированием',
      icon: '✈️',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      company: 'Оптовая торговля',
      result: '50+ менеджеров работают',
      description: 'Интеграция с 1C и складской системой',
      icon: '📦',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400"></div>
        <div className="max-w-7xl mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              CRM системы
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Автоматизируйте продажи<br />и увеличьте выручку
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-10 leading-relaxed">
              Внедряем готовые CRM или создаем индивидуальные решения. 
              В среднем наши клиенты увеличивают продажи на 40% после внедрения CRM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="bg-white text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition text-center text-lg">
                Подобрать CRM бесплатно
              </Link>
              <Link href="#solutions" className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-green-600 transition text-center text-lg">
                Посмотреть решения
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-8 border border-blue-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">+40%</div>
                <div className="text-gray-600 text-sm">Рост продаж</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">2-4</div>
                <div className="text-gray-600 text-sm">Недели внедрения</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-gray-600 text-sm">Внедрений CRM</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Преимущества CRM
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Почему вашему бизнесу нужна CRM-система
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500 overflow-hidden group"
              >
                <div className={`${benefit.color} h-28 flex items-center justify-center text-5xl text-white`}>
                  {benefit.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Наши решения
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              Выберите оптимальный вариант для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-10 border-2 border-transparent hover:border-green-500 transition-all duration-300"
              >
                <div className="text-6xl mb-6">{solution.icon}</div>
                <h3 className="text-3xl font-bold text-gray-800 mb-3">{solution.name}</h3>
                <p className="text-gray-600 text-lg mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  {solution.systems.map((system, i) => (
                    <span key={i} className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mr-2 mb-2">
                      {system}
                    </span>
                  ))}
                </div>
                
                <div className="text-4xl font-bold text-green-600 mb-8">{solution.price}</div>
                
                <ul className="space-y-4 mb-8">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mr-3 mt-0.5">
                        ✓
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-green-600 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-green-700 transition">
                  Узнать подробнее
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Интеграции
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              Подключаем CRM ко всем вашим инструментам
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all text-center border-2 border-transparent hover:border-green-500 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{integration.icon}</div>
                <div className="font-semibold text-gray-800 text-lg">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Процесс внедрения
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              От анализа до запуска за 2-4 недели
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 border-2 border-transparent hover:border-green-500 transition-all duration-300 relative"
              >
                <div className="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                  {step.number}
                </div>
                <div className="text-5xl mb-6 mt-6">{step.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
              Кейсы клиентов
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border-2 border-transparent hover:border-green-500"
              >
                <div className={`${case_.color} h-48 flex items-center justify-center text-7xl text-white`}>
                  {case_.icon}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition">
                    {case_.company}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{case_.description}</p>
                  <p className="text-lg font-bold text-green-600">{case_.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Подобрать CRM для вашего бизнеса
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg">
              Оставьте заявку и получите бесплатную консультацию
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Готовы автоматизировать продажи?</h3>
          <p className="text-gray-300 mb-10 text-xl leading-relaxed">
            Закажите демонстрацию и узнайте, как CRM поможет вашему бизнесу расти быстрее
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition">
              Заказать демо
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-gray-800 transition">
              Сравнить CRM
            </button>
          </div>
        </div>
        <div className="absolute -right-8 -bottom-8 text-9xl opacity-10">💼</div>
      </section>
    </div>
  )
}