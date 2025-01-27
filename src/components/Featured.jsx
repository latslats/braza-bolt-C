import { motion } from 'framer-motion'

const features = [
  {
    title: 'Digital Design',
    description: 'Creating immersive digital experiences that captivate and inspire',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Brand Strategy',
    description: 'Crafting unique brand identities that stand out in the digital age',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Creative Development',
    description: 'Building innovative digital solutions with cutting-edge technology',
    image: 'https://images.unsplash.com/photo-1618005198208-2d3ec5f5d2c7?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Featured() {
  return (
    <section id="work" className="section-padding bg-white relative overflow-hidden">
      <div className="creative-shape -top-1/2 -left-1/2"></div>
      <div className="creative-shape -bottom-1/2 -right-1/2"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-display-xl mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Explore our latest creative projects and innovative solutions
          </p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-8"
                >
                  <h3 className="text-display-md text-gradient">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    {feature.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="button-primary"
                  >
                    View Project
                  </motion.button>
                </motion.div>
              </div>

              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[4/3] hover-lift"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-creative-500 to-accent-500 rounded-[2rem] blur-3xl opacity-20"></div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
