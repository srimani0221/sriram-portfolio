import { useEffect, useRef, useState } from 'react'
import { aboutData } from '@/data/dummy'
import styles from './About.module.css'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.about} id="about" ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            {aboutData.description}
          </p>
          <div className={styles.details}>
            {aboutData.details.map((detail, index) => (
              <div key={index} className={`${styles.detail} ${isVisible ? styles.visible : ''}`}>
                <span className={styles.label}>{detail.label}</span>
                <span className={styles.value}>{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
