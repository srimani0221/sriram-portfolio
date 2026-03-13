import { useEffect, useRef, useState } from 'react'
import { skillsData } from '@/data/dummy'
import styles from './Skills.module.css'

export default function Skills() {
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
    <section className={styles.skills} id="skills" ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Skills</h2>
        <div className={styles.grid}>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`${styles.card} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.icon}>{skill.icon}</div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <p className={styles.level}>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
