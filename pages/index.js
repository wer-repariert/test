
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white text-gray-900">
      <header className="relative bg-indigo-800 text-white py-16 shadow-lg">
        <div className="absolute top-4 left-6">
          <Image src="/logo-gear-wr.png" alt="WER REPARIERT Logo" width={160} height={40} />
        </div>
        <div className="absolute top-4 right-6 z-10 flex gap-4">
          <button className="bg-white text-indigo-800 text-base font-semibold px-6 py-2 rounded-full shadow hover:bg-indigo-100 transition">
            Firma eintragen
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-base font-semibold px-6 py-2 rounded-full shadow transition">
            Login
          </button>
        </div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4">WER REPARIERT?</h1>
          <p className="text-xl">Deine Plattform für Reparaturdienste aller Art – nachhaltig & zuverlässig</p>
        </div>
      </header>
    </div>
  )
}
