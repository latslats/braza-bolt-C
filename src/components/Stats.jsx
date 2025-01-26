import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const stats = [
  { label: 'Projects Completed', value: 150, suffix: '+' },
  { label: 'Happy Clients', value: 80, suffix: '+' },
  { label: 'Team Members', value: 25, suffix: '' },
  { label: 'Awards Won', value: 15, suffix: '' },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const duration = 2000 // 2 seconds
  const steps = 60

  useEffect(() => {
    let startTime = null
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      if (progress < duration) {
        const nextCount = Math.min(
          Math.floor((progress / duration) * value),
          value
        )
        setCount(nextCount)
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value])

  return (
    <span className="text-4xl font-bold font-display">
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <div className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="container-custom"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}