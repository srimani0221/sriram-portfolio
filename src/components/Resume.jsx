import { useEffect, useRef, useState } from 'react'
import ResumeModal from './ResumeModal'
import styles from './Resume.module.css'

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false)
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
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
    <>
      <section className={styles.resume} id="resume" ref={sectionRef}>
        <div className={styles.container}>
          <h2 className={styles.title}>My Resume</h2>
          <div className={`${styles.resumeWrapper} ${isVisible ? styles.visible : ''}`}>
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className={styles.resumeButton}
              aria-label="View full resume"
            >
              <img
                src="/resume.jpg"
                alt="Resume"
                className={styles.resumeImage}
                onError={(e) => {
                  const target = e.target
                  target.src = '/resume.png'
                }}
              />
              <div className={styles.overlay}>
                <span className={styles.overlayText}>Click to View Full Resume</span>
              </div>
            </button>
          </div>
        </div>
      </section>
      <ResumeModal
        open={isResumeModalOpen}
        onOpenChange={setIsResumeModalOpen}
      />
    </>
  )
}
