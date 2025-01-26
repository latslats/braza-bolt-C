import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechVision',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    content: 'Working with BrazaBolt was a game-changer for our brand. Their creative vision and technical expertise transformed our digital presence.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder of DesignLab',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: "The team's attention to detail and innovative approach helped us create a unique brand identity that truly stands out.",
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    content: 'Their digital marketing strategies significantly improved our online presence and engagement. Highly recommended!',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="creative-shape top-0 right-0"></div>
      <div className="creative-shape bottom-0 left-0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-display-xl mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="glass-effect rounded-[2rem] p-8 hover-lift"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-display font-bold text-gradient">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}