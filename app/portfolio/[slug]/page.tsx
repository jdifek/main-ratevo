import { Metadata } from 'next'
import Link from 'next/link'

type PortfolioProps = {
  params: { slug: string }
}

export async function generateMetadata({ params }: PortfolioProps): Promise<Metadata> {
  return {
    title: 'Проект | Digital Agency Estonia Portfolio',
    description: 'Детали реализованного проекта - технологии, результаты, функционал',
  }
}

export default function PortfolioProjectPage({ params }: PortfolioProps) {
  // В реальном проекте данные из API/БД по params.slug
  const project = {
    title: 'E-commerce магазин электроники TechStore',
    category: 'Интернет-магазин',
    client: 'TechStore Estonia OÜ',
    year: '2024',
    duration: '3 месяца',
    budget: '8000€',
    icon: '🛍️',
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    
    description: `TechStore — один из крупнейших онлайн-магазинов электроники в Эстонии. 
    Компания обратилась к нам с задачей создать современный, высокопроизводительный интернет-магазин, 
    который сможет обрабатывать тысячи заказов в день и обеспечить отличный пользовательский опыт.`,
    
    challenge: `Старый сайт был медленным, имел устаревший дизайн и не был оптимизирован под мобильные устройства. 
    Конверсия составляла всего 1.2%, а показатель отказов превышал 70%. Требовалось не просто обновить дизайн, 
    но и полностью переработать архитектуру сайта для масштабирования бизнеса.`,
    
    solution: `Мы создали современный интернет-магазин на Next.js с серверным рендерингом для быстрой загрузки страниц. 
    Внедрили продвинутый поиск с фильтрами, систему рекомендаций на основе AI, интеграцию с несколькими 
    платежными системами и складским учетом в реальном времени. Особое внимание уделили UX/UI и скорости работы.`,
    
    results: [
      { metric: '+150%', description: 'Рост продаж за первые 6 месяцев', color: 'text-green-600' },
      { metric: '3.8%', description: 'Конверсия (рост с 1.2%)', color: 'text-blue-600' },
      { metric: '0.8 сек', description: 'Время загрузки главной', color: 'text-purple-600' },
      { metric: '-45%', description: 'Снижение показателя отказов', color: 'text-yellow-600' }
    ],
    
    technologies: [
      { name: 'Next.js 14', category: 'Frontend', icon: '⚡' },
      { name: 'React 18', category: 'Frontend', icon: '⚛️' },
      { name: 'TypeScript', category: 'Frontend', icon: '📘' },
      { name: 'Tailwind CSS', category: 'Frontend', icon: '🎨' },
      { name: 'Node.js', category: 'Backend', icon: '🟢' },
      { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
      { name: 'Redis', category: 'Cache', icon: '⚡' },
      { name: 'Stripe', category: 'Payments', icon: '💳' },
      { name: '1C', category: 'Integration', icon: '📊' },
      { name: 'AWS', category: 'Infrastructure', icon: '☁️' }
    ],
    
    features: [
      'Адаптивный дизайн для всех устройств',
      'Продвинутый поиск с фильтрами',
      'AI-рекомендации товаров',
      'Интеграция с 5 платежными системами',
      'Реал-тайм синхронизация с складом',
      'Личный кабинет клиента',
      'Программа лояльности и бонусы',
      'Мультиязычность (эст, рус, англ)',
      'SEO оптимизация под Google',
      'Интеграция с Google Analytics 4',
      'Система отзывов с фото',
      'Wishlist и сравнение товаров'
    ],
    
    images: [
      { id: 1, alt: 'Главная страница', placeholder: '🏠' },
      { id: 2, alt: 'Каталог товаров', placeholder: '📱' },
      { id: 3, alt: 'Карточка товара', placeholder: '💻' },
      { id: 4, alt: 'Корзина покупок', placeholder: '🛒' },
      { id: 5, alt: 'Оформление заказа', placeholder: '💳' },
      { id: 6, alt: 'Личный кабинет', placeholder: '👤' }
    ],

    testimonial: {
      text: 'Результаты превзошли наши ожидания. Продажи выросли на 150% за полгода, а клиенты отмечают удобство сайта. Команда Agency.ee показала высокий профессионализм на всех этапах проекта.',
      author: 'Мария Иванова',
      position: 'CEO TechStore Estonia',
      avatar: '👩‍💼'
    }
  }

  const relatedProjects = [
    {
      slug: 'fashion-store',
      title: 'Fashion магазин ModaStyle',
      category: 'E-commerce',
      result: '+200% продаж',
      icon: '👗',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      slug: 'food-marketplace',
      title: 'Маркетплейс FreshMarket',
      category: 'E-commerce',
      result: '50+ продавцов',
      icon: '🥗',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      slug: 'it-company-landing',
      title: 'Лендинг TechSolutions',
      category: 'Landing',
      result: '12% конверсия',
      icon: '💻',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className={`${project.color} py-20 relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400"></div>
        <div className="max-w-7xl mx-auto px-4 text-white">
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-medium mb-8 hover:bg-white/30 transition"
          >
            ← Назад к портфолио
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{project.title}</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-blue-100 mb-2">Клиент</div>
                  <div className="font-bold text-lg">{project.client}</div>
                </div>
                <div>
                  <div className="text-sm text-blue-100 mb-2">Год</div>
                  <div className="font-bold text-lg">{project.year}</div>
                </div>
                <div>
                  <div className="text-sm text-blue-100 mb-2">Длительность</div>
                  <div className="font-bold text-lg">{project.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-blue-100 mb-2">Бюджет</div>
                  <div className="font-bold text-lg">{project.budget}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image) => (
              <div 
                key={image.id}
                className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden aspect-video flex flex-col items-center justify-center text-gray-400 hover:scale-105 transition-transform cursor-pointer shadow-lg hover:shadow-xl border-2 border-transparent hover:border-blue-500"
              >
                <div className="text-7xl mb-2">{image.placeholder}</div>
                <div className="text-sm font-medium text-gray-500">{image.alt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-xl p-10 border-2 border-red-100 hover:border-red-300 transition">
              <div className="text-6xl mb-6">🎯</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Задача</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.challenge}
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 border-2 border-green-100 hover:border-green-300 transition">
              <div className="text-6xl mb-6">💡</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Решение</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Результаты проекта
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg mt-6">
              Измеримые показатели эффективности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg p-8 text-center border-2 border-transparent hover:border-blue-500 hover:scale-105 transition-all"
              >
                <div className={`text-5xl md:text-6xl font-bold ${result.color} mb-4`}>
                  {result.metric}
                </div>
                <div className="text-gray-600 leading-snug font-medium">
                  {result.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Технологический стек
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
            <p className="text-gray-600 text-lg mt-6">
              Современные и проверенные технологии
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {project.technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg p-6 border-2 border-transparent hover:border-blue-500 transition-all hover:scale-105 text-center"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <div className="font-bold text-gray-800 mb-1">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Реализованный функционал
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {project.features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-transparent hover:border-blue-500 transition"
              >
                <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  ✓
                </div>
                <span className="text-gray-700 leading-snug font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl p-10 md:p-12 border-2 border-blue-100">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-gray-800">Отзыв клиента</h3>
            </div>
            
            <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 text-center italic">
              "{project.testimonial.text}"
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl">
                {project.testimonial.avatar}
              </div>
              <div>
                <div className="font-bold text-gray-800 text-lg">{project.testimonial.author}</div>
                <div className="text-gray-600">{project.testimonial.position}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Другие проекты
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <Link 
                key={relatedProject.slug}
                href={`/portfolio/${relatedProject.slug}`}
                className="group"
              >
                <article className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500">
                  <div className={`${relatedProject.color} h-56 flex items-center justify-center text-8xl text-white`}>
                    {relatedProject.icon}
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-blue-600 font-semibold">{relatedProject.category}</span>
                    <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3 group-hover:text-blue-600 transition">
                      {relatedProject.title}
                    </h3>
                    <p className="text-sm font-semibold text-green-600">{relatedProject.result}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <div className="text-7xl mb-6">🚀</div>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Хотите такой же результат?</h3>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Расскажите о вашем проекте, и мы создадим решение, которое принесет результаты
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition">
              Обсудить проект
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
              Все проекты
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}