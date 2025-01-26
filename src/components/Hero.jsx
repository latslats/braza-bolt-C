import { motion } from 'framer-motion'
import Stats from './Stats'

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center bg-gray-50">
      {/* Creative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="creative-shape top-0 left-0 animate-float"></div>
        <div className="creative-shape bottom-0 right-0 animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute inset-0 bg-gray-50/80 backdrop-blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h1 className="text-display-2xl leading-none">
                <span className="text-gradient">Creative</span><br />
                <span className="text-outline">Solutions</span><br />
                for Tomorrow
              </h1>
              
              <p className="text-2xl text-gray-600 max-w-xl leading-relaxed font-light">
                We craft digital experiences that inspire, engage, and transform.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-6"
            >
              <button className="button-primary magnetic-button">
                Start Creating
              </button>
              <button className="button-secondary magnetic-button">
                Our Work
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-creative-500 to-accent-500 rounded-[2rem] blur-3xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
                alt="Creative Visualization"
                className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Stats />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
