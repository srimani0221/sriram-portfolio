import { useEffect, useRef, useState } from 'react'
import { certificationsData } from '@/data/dummy'
import styles from './Certifications.module.css'

export default function Certifications() {
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
    <section className={styles.certifications} id="certifications" ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>Certifications</h2>
        <div className={styles.grid}>
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className={`${styles.card} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.icon}>{cert.icon}</div>
              <h3 className={styles.name}>{cert.name}</h3>
              <p className={styles.issuer}>{cert.issuer}</p>
              <span className={styles.year}>{cert.year}</span>
              {cert.url && cert.url !== '#' && (
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  View credential
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
