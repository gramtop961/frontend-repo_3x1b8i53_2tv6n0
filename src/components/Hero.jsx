import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/gL1OurO-6gihUrEW/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white"
          >
            Shop the future of fintech fashion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-base md:text-lg text-white/80 max-w-xl"
          >
            A curated collection inspired by digital minimalism. Smooth interactions, premium feel, and an elevated shopping experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#products" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-zinc-900 font-semibold hover:bg-zinc-100">
              Explore products
            </a>
            <a href="#highlights" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 border border-white/10">
              How it works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
