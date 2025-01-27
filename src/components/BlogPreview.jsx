import { motion } from 'framer-motion'
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi'

const blogPosts = [
  {
    title: "The Future of Digital Design: AI and Creative Collaboration",
    excerpt: "Explore how artificial intelligence is transforming the design industry and enhancing creative workflows.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    date: "Jan 24, 2024",
    category: "Design"
  },
  {
    title: "Building Scalable Web Applications with Modern Architecture",
    excerpt: "Learn about the latest architectural patterns and best practices for building robust web applications.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    author: "Michael Chen",
    date: "Jan 22, 2024",
    category: "Development"
  },
  {
    title: "Creating Engaging Brand Experiences in the Digital Age",
    excerpt: "Discover strategies for building memorable brand experiences that resonate with modern audiences.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    author: "Emily Rodriguez",
    date: "Jan 20, 2024",
    category: "Branding"
  }
]

export default function BlogPreview() {
  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="creative-shape top-0 right-0 opacity-10"></div>
      <div className="creative-shape bottom-0 left-0 opacity-10"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-display-xl mb-6">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed">
            Stay updated with our latest thoughts on design, development, and digital innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="glass-effect rounded-[2rem] overflow-hidden hover-lift">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="inline-flex items-center space-x-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </span>
                    <span className="inline-flex items-center space-x-2">
                      <FiUser className="w-4 h-4" />
                      <span>{post.author}</span>
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 bg-creative-500/10 dark:bg-creative-500/20 text-creative-600 dark:text-creative-400 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-creative-600 dark:group-hover:text-creative-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 text-creative-600 dark:text-creative-400 font-medium group/link"
                  >
                    <span>Read More</span>
                    <FiArrowRight className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="button-primary"
          >
            View All Posts
          </a>
        </motion.div>
      </div>
    </section>
  )
}