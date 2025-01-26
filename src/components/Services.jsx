import { motion } from 'framer-motion'

const services = [
  {
    icon: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
    title: 'Digital Design',
    description: 'Creating immersive experiences that inspire and engage',
  },
  {
    icon: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=400&q=80',
    title: 'Brand Identity',
    description: 'Crafting unique and memorable brand experiences',
  },
  {
    icon: 'https://images.unsplash.com/photo-1618005198208-2d3ec5f5d2c7?auto=format&fit=crop&w=400&q=80',
    title: 'Web Development',
    description: 'Building innovative digital solutions',
  },
  {
    icon: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80',
    title: 'Motion Design',
    description: 'Bringing ideas to life through animation',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }
  },
}

export default function Services() {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="creative-shape top-0 left-1/2 -translate-x-1/2"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-display-xl mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            We transform ideas into exceptional digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-effect rounded-[2rem] p-8 hover-lift"
            >
              <div className="mb-6 aspect-square overflow-hidden rounded-2xl">
                <img 
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition-all duration-700 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gradient">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
