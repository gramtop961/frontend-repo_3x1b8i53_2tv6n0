import { ShoppingCart, Menu, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar({ onCartClick, cartCount }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-400 flex items-center justify-center">
              <span className="text-sm font-black tracking-tight text-zinc-900">EC</span>
            </div>
            <span className="font-semibold text-white/90 text-lg">EdgeCommerce</span>
          </div>

          {/* Center search (hidden on small) */}
          <div className="hidden md:flex items-center gap-2 text-white/70 bg-white/5 border border-white/10 rounded-xl px-3 py-2 w-96">
            <Search size={16} />
            <input
              placeholder="Search products, brands..."
              className="bg-transparent outline-none text-sm w-full placeholder:text-white/40"
            />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button className="md:hidden inline-flex items-center justify-center w-10 h-10 text-white/80 hover:text-white">
              <Menu />
            </button>
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={onCartClick}
              className="relative inline-flex items-center gap-2 bg-white text-zinc-900 rounded-xl px-3 py-2 font-medium hover:bg-zinc-100"
            >
              <ShoppingCart size={18} />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-emerald-400 text-emerald-950 rounded-full px-1.5 py-0.5 border border-emerald-700/20">
                  {cartCount}
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}
