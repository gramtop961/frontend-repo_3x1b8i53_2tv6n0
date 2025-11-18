import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Sparkles } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Secure checkout',
    text: 'Bank-grade protection with a seamless flow for peace of mind.'
  },
  {
    icon: Zap,
    title: 'Fast delivery',
    text: 'Same-day dispatch and tracked shipping on all orders.'
  },
  {
    icon: Sparkles,
    title: 'Premium quality',
    text: 'Materials and finishes that feel as good as they look.'
  }
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-16 md:py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white"
            >
              <div className="w-11 h-11 rounded-xl bg-white text-zinc-900 flex items-center justify-center">
                {<item.icon size={20} />}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
