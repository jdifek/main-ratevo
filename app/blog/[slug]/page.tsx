import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // В реальном проекте здесь будет запрос к API/БД
  return {
    title: 'Статья | Digital Agency Estonia Blog',
    description: 'Читайте наши статьи о веб-разработке и digital маркетинге',
  }
}

export default function BlogPostPage({ params }: Props) {
  // В реальном проекте здесь будет запрос к API/БД по slug
  const post = {
    title: '10 ошибок при запуске интернет-магазина',
    date: '15 сентября 2025',
    author: 'Александр Иванов',
    authorRole: 'E-commerce эксперт',
    readTime: '8 мин',
    views: '15.2K',
    category: 'E-commerce',
    icon: '🛒',
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    tags: ['E-commerce', 'Интернет-магазин', 'Конверсия', 'SEO'],
    content: `
      <p class="lead">Запуск интернет-магазина — это сложный процесс, требующий внимания ко множеству деталей. 
      За годы работы мы выявили типичные ошибки, которые допускают начинающие владельцы e-commerce бизнеса.</p>

      <h2>1. Отсутствие мобильной версии</h2>
      <p>Более 60% покупок совершается с мобильных устройств. Если ваш сайт не адаптирован под смартфоны, 
      вы теряете больше половины потенциальных клиентов. Современные пользователи ожидают, что сайт будет 
      одинаково удобен на всех устройствах.</p>

      <div class="highlight-box">
        <strong>💡 Совет:</strong> Всегда тестируйте ваш сайт на реальных мобильных устройствах, 
        а не только в эмуляторе браузера.
      </div>

      <h2>2. Сложная процедура оформления заказа</h2>
      <p>Каждый лишний шаг в процессе оформления заказа снижает конверсию на 5-10%. 
      Оптимальное количество шагов — 3-4. Убедитесь, что процесс покупки максимально простой и понятный.</p>

      <h2>3. Плохие фотографии товаров</h2>
      <p>Качество изображений напрямую влияет на продажи. Инвестируйте в профессиональную фотосъемку 
      или используйте качественные изображения от производителей. Показывайте товар с разных ракурсов.</p>

      <h2>4. Отсутствие отзывов</h2>
      <p>87% покупателей читают отзывы перед покупкой. Стимулируйте клиентов оставлять отзывы, 
      предлагая скидки или бонусы. Отзывы с фотографиями особенно ценны.</p>

      <h2>5. Игнорирование SEO</h2>
      <p>Органический трафик из поисковых систем — самый дешевый и качественный. 
      Настройте SEO с первого дня запуска. Оптимизируйте заголовки, описания, URL и контент.</p>

      <h2>6. Нет интеграции с платежными системами</h2>
      <p>Предлагайте несколько способов оплаты. Чем больше вариантов, тем выше вероятность покупки. 
      Обязательно подключите карты, электронные кошельки и, если возможно, оплату при получении.</p>

      <h2>7. Медленная загрузка сайта</h2>
      <p>Каждая секунда задержки снижает конверсию на 7%. Оптимизируйте скорость загрузки страниц. 
      Используйте CDN, сжимайте изображения, минимизируйте CSS и JavaScript.</p>

      <h2>8. Отсутствие аналитики</h2>
      <p>Без данных невозможно принимать правильные решения. Настройте Google Analytics, 
      Яндекс.Метрику и отслеживайте все ключевые метрики: конверсию, средний чек, воронку продаж.</p>

      <h2>9. Плохой сервис доставки</h2>
      <p>Долгая или дорогая доставка — частая причина отказа от покупки. 
      Предлагайте несколько вариантов доставки на выбор. Информируйте клиентов о статусе заказа.</p>

      <h2>10. Игнорирование брошенных корзин</h2>
      <p>В среднем 70% корзин остаются брошенными. Настройте автоматические напоминания 
      и верните часть этих продаж. Email с напоминанием через 1-2 часа может вернуть до 15% заказов.</p>

      <h2>Заключение</h2>
      <p>Избегая этих ошибок, вы значительно повысите шансы на успех вашего интернет-магазина. 
      Каждая из перечисленных проблем может стоить вам десятков процентов конверсии.</p>

      <p>Если вам нужна помощь с запуском или оптимизацией магазина, наша команда готова помочь. 
      Мы специализируемся на создании высококонверсионных интернет-магазинов с 2018 года.</p>
    `
  }

  const relatedPosts = [
    {
      slug: 'crm-for-small-business',
      title: 'Как выбрать CRM для малого бизнеса',
      category: 'CRM',
      icon: '⚙️',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500'
    },
    {
      slug: 'landing-conversion',
      title: 'Как увеличить конверсию лендинга на 30%',
      category: 'Маркетинг',
      icon: '📈',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      slug: 'nextjs-seo',
      title: 'SEO оптимизация на Next.js',
      category: 'Разработка',
      icon: '💻',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className={`${post.color} py-20 relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400"></div>
        <div className="max-w-4xl mx-auto px-4 text-white">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            {post.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base">
            <span className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
                👤
              </div>
              <div>
                <div className="font-semibold">{post.author}</div>
                <div className="text-sm opacity-80">{post.authorRole}</div>
              </div>
            </span>
            <span className="hidden md:block">•</span>
            <span className="flex items-center gap-2">📅 {post.date}</span>
            <span className="hidden md:block">•</span>
            <span className="flex items-center gap-2">⏱️ {post.readTime}</span>
            <span className="hidden md:block">•</span>
            <span className="flex items-center gap-2">👁️ {post.views}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none blog-content text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Теги:</h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="font-bold text-gray-800 mb-4 text-lg">Поделиться статьей:</h3>
              <div className="flex gap-4">
                <button className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
                  f
                </button>
                <button className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
                  tw
                </button>
                <button className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
                  in
                </button>
                <button className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 transition-transform">
                  wa
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl flex-shrink-0">
                  👤
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-2xl text-gray-800 mb-2">{post.author}</h3>
                  <p className="text-blue-600 font-medium mb-4">{post.authorRole}</p>
                  <p className="text-gray-600 leading-relaxed">
                    Эксперт по e-commerce с 7+ летним опытом. Помог запустить более 50 успешных 
                    интернет-магазинов. Специализируется на оптимизации конверсии и масштабировании продаж.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
              Похожие статьи
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></div>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link 
                key={relatedPost.slug}
                href={`/blog/${relatedPost.slug}`}
                className="group"
              >
                <article className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-blue-500">
                  <div className={`${relatedPost.color} h-52 flex items-center justify-center text-7xl text-white`}>
                    {relatedPost.icon}
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-blue-600 font-semibold">{relatedPost.category}</span>
                    <h3 className="text-xl font-bold text-gray-800 mt-2 group-hover:text-blue-600 transition">
                      {relatedPost.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <div className="text-6xl mb-6">📬</div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Подпишитесь на наш блог</h3>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Получайте новые статьи и полезные материалы прямо на email. 
            Только качественный контент, никакого спама.
          </p>
          <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:outline-none text-gray-800 text-lg"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-yellow-300 transition whitespace-nowrap"
            >
              Подписаться
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
