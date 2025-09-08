'use client'

import { useState } from 'react'

type Props = {
  subject: string
  to?: string
  defaults?: Partial<Record<'name'|'email'|'childAge'|'device'|'timeslot'|'message', string>>
}

export default function SimpleBookingForm({ subject, to = 'info@shindo-for-kids.com', defaults = {} }: Props) {
  const [name, setName] = useState(defaults.name || '')
  const [email, setEmail] = useState(defaults.email || '')
  const [childAge, setChildAge] = useState(defaults.childAge || '')
  const [device, setDevice] = useState(defaults.device || '')
  const [timeslot, setTimeslot] = useState(defaults.timeslot || '')
  const [message, setMessage] = useState(defaults.message || '')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `お名前: ${name}\nメール: ${email}\nお子さまの年齢: ${childAge}\nご利用予定デバイス: ${device}\n希望日時: ${timeslot}\nご質問/メモ:\n${message}`
    const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = url
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid md:grid-cols-2 gap-3">
        <input required value={name} onChange={e=>setName(e.target.value)} placeholder="お名前" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
        <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="メールアドレス" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        <input value={childAge} onChange={e=>setChildAge(e.target.value)} placeholder="お子さまの年齢" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
        <input value={device} onChange={e=>setDevice(e.target.value)} placeholder="ご利用予定デバイス (PC/タブレット/スマホ)" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
        <input value={timeslot} onChange={e=>setTimeslot(e.target.value)} placeholder="希望日時 (第1～第3希望)" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
      </div>
      <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="ご質問/メモ" rows={4} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm" />
      <div className="flex justify-end">
        <button type="submit" className="px-5 py-2.5 bg-[#0073e6] text-white font-bold rounded-full hover:bg-[#0052cc]">送信して予約する</button>
      </div>
    </form>
  )
}

