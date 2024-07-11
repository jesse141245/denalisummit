import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <h2>Contact Us</h2>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className={styles.button}>Send</button>
            </form>
        </section>
    );
}

export default Contact;
