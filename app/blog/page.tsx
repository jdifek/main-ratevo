import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Блог | Digital Agency Estonia',
  description: 'Статьи о веб-разработке, digital маркетинге, e-commerce и автоматизации бизнеса. Практические советы и кейсы.',
}

export default function BlogPage() {
  const featuredPost = {
    slug: '10-mistakes-ecommerce',
    title: '10 ошибок при запуске интернет-магазина',
    excerpt: 'Разбираем самые частые проблемы начинающих владельцев e-commerce проектов и даем практические рекомендации по их избежанию',
    category: 'E-commerce',
    date: '15.09.2025',
    views: '15.2K',
    comments: 24,
    readTime: '8 мин',
    icon: '🛒',
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    featured: true
  }

  const posts = [
    {
      slug: 'crm-for-small-business',
      title: 'Как выбрать CRM для малого бизнеса',
      excerpt: 'Сравниваем популярные CRM-системы и помогаем определить, какая подойдет именно вам',
      category: 'CRM',
      date: '10.09.2025',
      views: '8.9K',
      comments: 15,
      readTime: '6 мин',
      icon: '⚙️',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500'
    },
    {
      slug: 'landing-conversion-optimization',
      title: 'Как увеличить конверсию лендинга на 30%',
      excerpt: 'Проверенные техники оптимизации посадочных страниц на реальных примерах',
      category: 'Маркетинг',
      date: '05.09.2025',
      views: '12.1K',
      comments: 28,
      readTime: '10 мин',
      icon: '📈',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      slug: 'nextjs-seo-guide',
      title: 'SEO оптимизация сайта на Next.js',
      excerpt: 'Полное руководство по настройке SEO для современных веб-приложений',
      category: 'Разработка',
      date: '01.09.2025',
      views: '15.3K',
      comments: 32,
      readTime: '12 мин',
      icon: '💻',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      slug: 'business-automation-2025',
      title: 'Тренды автоматизации бизнеса в 2025',
      excerpt: 'Какие процессы стоит автоматизировать в первую очередь и какие инструменты использовать',
      category: 'Автоматизация',
      date: '28.08.2025',
      views: '9.7K',
      comments: 19,
      readTime: '7 мин',
      icon: '🤖',
      color: 'bg-gradient-to-br from-red-500 to-red-600'
    },
    {
      slug: 'payment-systems-estonia',
      title: 'Обзор платежных систем для бизнеса в Эстонии',
      excerpt: 'Сравниваем условия, комиссии и возможности интеграции популярных платежных шлюзов',
      category: 'E-commerce',
      date: '20.08.2025',
      views: '11.2K',
      comments: 16,
      readTime: '9 мин',
      icon: '💳',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600'
    },
    {
      slug: 'mobile-first-design',
      title: 'Mobile-first дизайн: почему это важно',
      excerpt: 'Объясняем преимущества подхода mobile-first и делимся лучшими практиками',
      category: 'Дизайн',
      date: '15.08.2025',
      views: '7.8K',
      comments: 12,
      readTime: '6 мин',
      icon: '📱',
      color: 'bg-gradient-to-br from-pink-500 to-pink-600'
    },
    {
      slug: 'ai-in-ecommerce',
      title: 'Как AI меняет e-commerce',
      excerpt: 'Практическое применение искусственного интеллекта в интернет-торговле',
      category: 'E-commerce',
      date: '10.08.2025',
      views: '13.5K',
      comments: 22,
      readTime: '11 мин',
      icon: '🤖',
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600'
    },
    {
      slug: 'email-marketing-2025',
      title: 'Email маркетинг в 2025: что работает',
      excerpt: 'Актуальные стратегии email рассылок и автоматизации коммуникаций',
      category: 'Маркетинг',
      date: '05.08.2025',
      views: '10.3K',
      comments: 18,
      readTime: '8 мин',
      icon: '📧',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600'
    }
  ]

  const categories = [
    { name: 'Все статьи', count: 45, active: true },
    { name: 'E-commerce', count: 12 },
    { name: 'Разработка', count: 15 },
    { name: 'Маркетинг', count: 10 },
    { name: 'CRM', count: 5 },
    { name: 'Дизайн', count: 3 }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400"></div>
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Блог о digital</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Делимся знаниями о веб-разработке, маркетинге, e-commerce и автоматизации бизнеса
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-2xl font-medium transition ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} {category.count && `(${category.count})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <span className="text-3xl">⭐</span>
              Главная статья
            </h2>
          </div>

          <Link href={`/blog/${featuredPost.slug}`}>
            <article className="bg-white rounded-3xl shadow-xl overflow-hidden group border-2 border-transparent hover:border-blue-500 transition-all duration-300">
              <div className="grid md:grid-cols-2">
                <div className={`${featuredPost.color} flex items-center justify-center text-9xl text-white min-h-[400px]`}>
                  {featuredPost.icon}
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.date}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-2">
                      <span className="text-lg">👁️</span> {featuredPost.views}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-lg">💬</span> {featuredPost.comments}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-lg">⏱️</span> {featuredPost.readTime}
                    </span>
                  </div>
                  
                  <div className="inline-flex items-center text-blue-600 font-semibold text-lg group-hover:gap-3 transition-all">
                    Читать статью
                    <span className="ml-2 group-hover:ml-0 transition-all">→</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 relative inline-block">
              Все статьи
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article 
                  className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${post.color} h-52 flex items-center justify-center text-7xl text-white relative`}>
                    {post.icon}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 text-white/80 text-sm font-medium">
                      {post.date}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          👁️ {post.views}
                        </span>
                        <span className="flex items-center gap-1">
                          💬 {post.comments}
                        </span>
                      </div>
                      <span className="text-xs">⏱️ {post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition">
              Загрузить еще статьи
            </button>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Популярные темы
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white hover:scale-105 transition-transform cursor-pointer">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-2">E-commerce</h3>
              <p className="text-blue-100">Все о запуске и развитии интернет-магазинов</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white hover:scale-105 transition-transform cursor-pointer">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-2">Разработка</h3>
              <p className="text-green-100">Технологии, подходы и best practices</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white hover:scale-105 transition-transform cursor-pointer">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-2">Маркетинг</h3>
              <p className="text-purple-100">Стратегии продвижения и роста</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center border-2 border-blue-100">
            <div className="text-6xl mb-6">📬</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Подпишитесь на рассылку
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Получайте новые статьи, кейсы и полезные материалы прямо на email. 
              Только качественный контент, никакого спама.
            </p>
            <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-lg"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition whitespace-nowrap"
              >
                Подписаться
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Уже 5000+ подписчиков читают наш блог
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Нужна помощь с вашим проектом?</h3>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Мы не только пишем о digital, но и создаем успешные проекты. 
            Расскажите о вашей задаче, и мы предложим решение.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacts" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition">
              Обсудить проект
            </Link>
            <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
              Наши услуги
            </Link>
          </div>
        </div>
        <div className="absolute -right-8 -bottom-8 text-9xl opacity-10">✍️</div>
      </section>
    </div>
  )
}
                