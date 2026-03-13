import { useEffect, useRef, useState } from 'react'
import { projectsData } from '@/data/dummy'
import styles from './Projects.module.css'

export default function Projects() {
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
    <section className={styles.projects} id="projects" ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <div className={styles.grid}>
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`${styles.card} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tech}>
                  {project.tech.map((t, i) => (
                    <span key={i} className={styles.tag}>{t}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
