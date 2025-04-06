import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    const [showSecondText, setShowSecondText] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setShowSecondText((prev) => !prev);
        }, 3000); // Toggle text every 3 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <div className={`${styles.textContainer} ${styles.animatedText}`}>
                    {showSecondText ? (
                        <> 
                            <span className={styles.subheading}> 👋 Hello!</span>
                            
                            <h2 className={styles.title}> I'm Heena – Innovator in Design, Code & Creativity</h2>
                           
                            <h3 className={styles.description}>🔹 Design with Purpose. Code with Passion. Innovate for Impact.</h3>
                        </>
                    ) : (
                        <>
                            <span className={styles.subheading}>✨ Welcome to My Web Zone! ✨</span>
                            <h2 className={styles.title}>I'm a  Web Designer | Developer | Programmer 🚀</h2>
                           

                            <h3 className={styles.description}>💡 Transforming Ideas into Stunning Digital Realities.</h3>
                        </>
                    )}
                    <div className={styles.buttonGroup}>
                        <a href="#proj" className={`${styles.btn} ${styles.btnBlack}`}>My Works</a>
                        <a href="#cont" className={`${styles.btn} ${styles.btnWhite}`}>Contact Me</a>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                    <img src="/WhatsApp2.jpg" alt="Profile" className={styles.heroImg} />
                </div>
            </div>
        </section>
    );
};
