'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-8">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Имя *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full !text-gray-700 px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="Ваше имя"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full !text-gray-700 px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="email@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Телефон</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full !text-gray-700 px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            placeholder="+372 XXX XXXX"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">Услуга</label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full !text-gray-700 px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          >
            <option value="">Выберите услугу</option>
            <option value="ecommerce">Интернет-магазин</option>
            <option value="landing">Лендинг</option>
            <option value="corporate">Корпоративный сайт</option>
            <option value="crm">CRM-система</option>
            <option value="other">Другое</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2 text-gray-700">Сообщение *</label>
        <textarea
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className=" !text-gray-700 w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder="Расскажите о вашем проекте..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-blue-800 transition disabled:opacity-50"
      >
        {status === 'sending' ? 'Отправка...' : 'Отправить заявку'}
      </button>

      {status === 'success' && (
        <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-2xl border border-green-200">
          ✅ Спасибо! Мы свяжемся с вами в ближайшее время.
        </div>
      )}
    </form>
  )
}