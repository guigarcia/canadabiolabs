'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import styles from './page.module.css';
import { translations } from '@/lib/translations';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    country: '',
    email: '',
    message: '',
    consent: false,
  });

  const { contact, common } = translations;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    alert('Formulário enviado! (Funcionalidade de exemplo)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles.title}>{contact.title}</h1>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="country">{contact.country} *</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className={styles.select}
            >
              <option value="">{contact.countryPlaceholder}</option>
              <option value="BR">Brasil</option>
              <option value="PT">Portugal</option>
              <option value="AR">Argentina</option>
              {/* Mais países seriam adicionados aqui */}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="email">{contact.email} *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={contact.emailPlaceholder}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className={styles.checkbox}
              />
              <span className={styles.consentText}>{contact.consent}</span>
            </label>
          </div>

          <div className={styles.field}>
            <label htmlFor="message">{contact.message} *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={contact.messagePlaceholder}
              maxLength={500}
              rows={6}
              required
              className={styles.textarea}
            />
            <p className={styles.counter}>{formData.message.length} de 500 caracteres máximos</p>
          </div>

          <button type="submit" className={styles.button}>
            {common.send}
          </button>
        </form>
      </div>
    </main>
  );
}

