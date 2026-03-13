import { useEffect, useState } from 'react'
import ResumeModal from './ResumeModal'
import styles from './Hero.module.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <section className={styles.hero} id="home">
        <div className={styles.container}>
          <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
            <h2 className={styles.title}>Hi, I'm SRIRAM A</h2>
            <p className={styles.subtitle}>SOFTWARE DEVELOPER</p>
            <p className={styles.description}>
              Dynamic Junior Software Developer with a proven track record in building innovative web app templates.
            </p>
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className={styles.cta}
            >
              View Resume
            </button>
          </div>
          <div className={`${styles.imageWrapper} ${isVisible ? styles.visible : ''}`}>
            <img
              src="/profile.png"
              alt="SRIRAM A profile"
              className={styles.profileImage}
            />
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
