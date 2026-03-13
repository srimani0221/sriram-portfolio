import { footerData } from '@/data/dummy'
import styles from './Footer.module.css'
import CurrentYear from '@/data/currentYear'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>SRIRAM A</h3>
            <ul>
              <li>SOFTWARE DEVELOPER</li>
              <li>+91 6383108571</li>
              <li>sriramarunachalaselvam.com</li>
              <li>Tenkasi, Tamil Nadu, IN</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Follow Me</h4>
            <div className={styles.socials}>
              {footerData.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; <CurrentYear /> SRIRAM A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
