import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id)
      if (exists) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id))
  const updateQty = (id, delta) =>
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty + delta) } : p))
        .filter((p) => p.qty > 0)
    )

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <div className="min-h-screen bg-black">
      <Navbar onCartClick={() => setCartOpen(true)} cartCount={cart.reduce((s, i) => s + i.qty, 0)} />
      <Hero />
      <Highlights />
      <ProductGrid onAdd={addToCart} />
      <Footer />

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-zinc-950 border-l border-white/10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            >
              <div className="h-full flex flex-col">
                <div className="p-5 border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">Your Cart</h3>
                  <button onClick={() => setCartOpen(false)} className="text-white/60 hover:text-white text-sm">Close</button>
                </div>
                <div className="flex-1 overflow-auto p-5 space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-white/60">Your cart is empty. Add some items to get started.</p>
                  ) : (
                    cart.map((item) => (
                      <div key={item.id} className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                        <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white text-sm font-medium truncate">{item.title}</h4>
                          <p className="text-white/60 text-xs">${item.price} • Qty {item.qty}</p>
                          <div className="mt-2 flex items-center gap-2">
                            <button onClick={() => updateQty(item.id, -1)} className="px-2 py-1 rounded bg-white/10 text-white text-xs">-</button>
                            <button onClick={() => updateQty(item.id, 1)} className="px-2 py-1 rounded bg-white text-zinc-900 text-xs">+</button>
                            <button onClick={() => removeFromCart(item.id)} className="ml-auto text-white/60 hover:text-white text-xs">Remove</button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="p-5 border-t border-white/10">
                  <div className="flex items-center justify-between text-white mb-3">
                    <span className="text-sm">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-white text-zinc-900 font-semibold hover:bg-zinc-100">
                    Checkout
                  </button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
