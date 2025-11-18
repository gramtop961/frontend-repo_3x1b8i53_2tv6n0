import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function ProductGrid({ onAdd }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    async function load() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(`${API_BASE}/products`)
        if (!res.ok) throw new Error(`Failed to load products: ${res.status}`)
        const data = await res.json()
        if (isMounted) setProducts(data)
      } catch (e) {
        if (isMounted) setError(e.message)
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    load()
    return () => { isMounted = false }
  }, [])

  return (
    <section id="products" className="relative py-16 md:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">New arrivals</h2>
          <a className="text-white/70 hover:text-white text-sm" href="#">View all</a>
        </div>

        {loading && (
          <div className="text-white/70">Loading products…</div>
        )}
        {error && (
          <div className="text-red-400">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image || 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop'}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70"></div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium">{p.title}</h3>
                    <p className="text-white/70 text-sm">${p.price}</p>
                  </div>
                  <button onClick={() => onAdd(p)} className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-100">
                    Add
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
