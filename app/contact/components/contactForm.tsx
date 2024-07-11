"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './ContactForm.module.css';
import { Button } from './Button';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [result, setResult] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({ error: 'Error sending email' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>Contact Us</div>
      <form onSubmit={sendEmail}>
        <div className={styles.formRow}>
          <div className={styles.inputData}>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            <label>First Name</label>
          </div>
          <div className={styles.inputData}>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            <label>Last Name</label>
          </div>
          <div className={styles.inputData}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <label>Email Address</label>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={`${styles.inputData} ${styles.textarea}`}>
            <textarea rows={3} name="message" value={formData.message} onChange={handleChange} required></textarea>
            <label>Write your message</label>
          </div>
        </div>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline2"
            buttonSize="btn--medium2"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'SUBMIT'}
          </Button>
        </div>
      </form>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
