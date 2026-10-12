// src/components/Contact/Contact.jsx
import { personal } from '../../data/portfolioData';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section-pad ${styles.section}`} aria-label="Contact">
      <div className="container">
        <div className="reveal" style={{ maxWidth: 800, margin: '0 auto' }}>
          
          <div className={styles.macWindow}>
            <div className={styles.titleBar}>
              <div className={styles.macDots}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
              </div>
              <div className={styles.titleText}>contact.exe</div>
            </div>
            
            <div className={styles.terminalBody}>
              <div className={styles.terminalLine}>
                <span className={styles.prompt}>~/portfolio $</span> ./initiate_contact.sh
              </div>
              
              <h2 className={styles.terminalHeading}>Let's Build Something <span className="gradient-text">Amazing</span></h2>
              <p className={styles.terminalSub}>
                Whether it's a collaboration, job opportunity, or just a hello — my inbox is always open.
              </p>

              <div className={styles.contactActions}>
                <a href={`mailto:${personal.email}`} className={styles.emailPill}>
                  <span className="mdi mdi-email-outline" /> {personal.email}
                </a>

                <div className={styles.socials}>
                  <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                    <span className="mdi mdi-linkedin" style={{ color: '#60a5fa' }} /> LinkedIn
                  </a>
                  <a href={`tel:${personal.phone.replace(/\s/g, '')}`} className={styles.socialBtn}>
                    <span className="mdi mdi-phone" style={{ color: '#34d399' }} /> Phone
                  </a>
                  <a href={personal.playStore} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                    <span className="mdi mdi-google-play" style={{ color: '#34d399' }} /> Play Store
                  </a>
                </div>
              </div>
              
              <div className={styles.terminalLine}>
                <span className={styles.prompt}>~/portfolio $</span> <span className={styles.cursor}>_</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
