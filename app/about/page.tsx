import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'О компании | Digital Agency Estonia',
  description: 'Команда профессионалов в области веб-разработки и digital маркетинга.',
}

export default function About() {
  const values = [
    {
      title: 'Качество',
      description: 'Мы не идем на компромиссы в качестве кода и дизайна',
      icon: '⭐',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Прозрачность',
      description: 'Открытое общение с клиентами на всех этапах',
      icon: '🔍',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500'
    },
    {
      title: 'Результат',
      description: 'Фокусируемся на бизнес-результатах клиента',
      icon: '🎯',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      title: 'Инновации',
      description: 'Используем современные технологии и подходы',
      icon: '💡',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400"></div>
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">О компании</h1>
          <p className="text-xl text-blue-100">
            Digital агентство полного цикла в Эстонии
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Мы создаем digital решения, которые помогают бизнесу расти. Наша команда специализируется 
            на разработке интернет-магазинов, корпоративных сайтов, лендингов и внедрении CRM-систем.
          </p>

          <div className="bg-white rounded-3xl shadow-lg p-8 border border-blue-100 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">5+</div>
                <div className="text-gray-600 text-sm">Лет опыта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600 text-sm">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Поддержка</div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center relative inline-block w-full">
              <span className="relative inline-block">
                Наши ценности
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-3xl shadow-lg p-8 border-2 border-transparent hover:border-blue-500 transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center text-3xl text-white mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Технологии</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-lg mb-4 text-blue-600">Frontend</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="mr-2">✓</span> Next.js / React</li>
                  <li className="flex items-center"><span className="mr-2">✓</span> TypeScript</li>
                  <li className="flex items-center"><span className="mr-2">✓</span> Tailwind CSS</li>
                  <li className="flex items-center"><span className="mr-2">✓</span> Redux / Zustand</li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-lg mb-4 text-yellow-500">Backend</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><span className="mr-2">✓</span> Node.js / Express</li>
                  <li className="flex items-center"><span className="mr-2">✓</span> Python / Django</li>
                  <li className="flex items-center"><span className="mr-2">✓</span> PostgreSQL / MongoDB</li>
                  <li className="flex items-center"><span className="mr-2">✓</span> REST / GraphQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Станьте нашим клиентом</h2>
          <p className="text-xl text-blue-100 mb-8">
            Получите бесплатную консультацию и начните свой проект
          </p>
          <Link 
            href="/contacts" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition"
          >
            Связаться с нами
          </Link>
        </div>
      </section>
    </div>
  )
}