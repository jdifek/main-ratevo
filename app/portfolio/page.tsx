import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Портфолио | Digital Agency Estonia',
  description: 'Наши работы: интернет-магазины, лендинги, корпоративные сайты и CRM-системы.',
}

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce магазин электроники',
      category: 'Интернет-магазин',
      description: 'Полнофункциональный интернет-магазин с интеграцией 1C',
      tags: ['Next.js', 'PostgreSQL', 'Stripe'],
      result: '+150% продаж',
      icon: '🛍️',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Лендинг IT-компании',
      category: 'Landing Page',
      description: 'Продающая посадочная страница с высокой конверсией',
      tags: ['React', 'Tailwind', 'Analytics'],
      result: '12% конверсия',
      icon: '💻',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-500'
    },
    {
      title: 'Корпоративный портал',
      category: 'Корпоративный сайт',
      description: 'Многостраничный сайт с личным кабинетом',
      tags: ['Next.js', 'Node.js', 'Auth'],
      result: '5000+ пользователей',
      icon: '🏢',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      title: 'CRM для турагентства',
      category: 'CRM',
      description: 'Система управления клиентами и бронированиями',
      tags: ['React', 'Django', 'PostgreSQL'],
      result: '-40% времени',
      icon: '⚙️',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      title: 'Маркетплейс для фермеров',
      category: 'Интернет-магазин',
      description: 'Платформа для продажи товаров от производителей',
      tags: ['Next.js', 'Stripe', 'AWS'],
      result: '50+ продавцов',
      icon: '🌾',
      color: 'bg-gradient-to-br from-red-500 to-red-600'
    },
    {
      title: 'Платформа онлайн-курсов',
      category: 'Landing Page',
      description: 'Продающая страница с интеграцией LMS',
      tags: ['Next.js', 'LMS Integration'],
      result: '200+ регистраций/мес',
      icon: '📚',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600'
    }
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400"></div>
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h1>
          <p className="text-xl text-blue-100">
            Более 50 успешно реализованных проектов
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
             <Link href={`/portfolio/${project.title}`} key={index}>
             <article 
               className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border-2 border-transparent hover:border-blue-500"
             >
               <div className={`${project.color} h-48 flex items-center justify-center text-6xl text-white relative`}>
                 {project.icon}
                 <div className="absolute top-4 left-4">
                   <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
                     {project.category}
                   </span>
                 </div>
               </div>
           
               <div className="p-6">
                 <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                   {project.title}
                 </h3>
                 <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                   {project.description}
                 </p>
                 
                 <div className="flex flex-wrap gap-2 mb-4">
                   {project.tags.map((tag, i) => (
                     <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                       {tag}
                     </span>
                   ))}
                 </div>
                 
                 <div className="border-t pt-4">
                   <p className="text-sm font-semibold text-green-600">{project.result}</p>
                 </div>
               </div>
             </article>
           </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-yellow-400 animate-pulse"></div>
        <div className="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы обсудить ваш проект?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Расскажите нам о своей задаче, и мы предложим оптимальное решение
          </p>
          <Link 
            href="/contacts" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition"
          >
            Связаться с нами
          </Link>
        </div>
        <div className="absolute -right-8 -bottom-8 text-9xl opacity-10">🚀</div>
      </section>
    </div>
  )
}
