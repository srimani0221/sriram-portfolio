import { useEffect, useRef, useState } from 'react'
import { educationData } from '@/data/dummy'
import styles from './Education.module.css'

export default function Education() {
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
    <section className={styles.education} id="education" ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.timeline}>
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`${styles.card} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={styles.icon}>🎓</div>
              <div className={styles.content}>
                <h3 className={styles.degree}>{item.degree}</h3>
                <p className={styles.institution}>{item.institution}</p>
                <span className={styles.year}>{item.year}</span>
                {item.description && (
                  <p className={styles.description}>{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
