import { motion } from 'framer-motion';

const products = [
  { id: 1, title: 'Carbon Wallet', price: 89, image: 'https://images.unsplash.com/photo-1585401586477-2a671e1cae4e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXJib24lMjBXYWxsZXR8ZW58MHwwfHx8MTc2MzQ1NjUwNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, title: 'Monochrome Sneakers', price: 159, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, title: 'Minimal Watch', price: 129, image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, title: 'Graphite Backpack', price: 119, image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, title: 'Studio Headphones', price: 199, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1600&auto=format&fit=crop' },
  { id: 6, title: 'Matte Sunglasses', price: 99, image: 'https://images.unsplash.com/photo-1585401586477-2a671e1cae4e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXJib24lMjBXYWxsZXR8ZW58MHwwfHx8MTc2MzQ1NjUwNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' }
];

export default function ProductGrid({ onAdd }) {
  return (
    <section id="products" className="relative py-16 md:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">New arrivals</h2>
          <a className="text-white/70 hover:text-white text-sm" href="#">View all</a>
        </div>

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
                  src={p.image}
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
      </div>
    </section>
  );
}
