import React, { useState } from 'react';
import styles from './FloatingButton.module.css';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [formInteracted, setFormInteracted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    about: '',
    organization: '',
    phone: '',
    source: ''
  });
  const text = "NEWSLETTER";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted");
    setFormInteracted(false);

    setFormData({
      name: '',
      email: '',
      about: '',
      organization: '',
      phone: '',
      source: ''
    });
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowPopup(false);
    }, 300);
  };

  return (
    <button
      className={styles.floatingButton}
      onClick={onClick}
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.label}>
        <div className={styles.topDiv}></div>
        <div className={styles.middleDiv}>
          {text.split('').map((letter, index) => (
            <div key={index} className={styles.letter}>{letter}</div>
          ))}
        </div>
        <div className={styles.bottomDiv}></div>
      </div>
      <div className={styles.engage}>
        {(showPopup || formInteracted) && (
          <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
            <p className={styles.title}>Dołącz do naszej społeczności! </p>
            <p className={styles.description}>Zapisz się na newsletter i bądź na bieżąco z działalnością naszej fundacji. Co miesiąc otrzymasz informacje o projektach, wydarzeniach i osiągnięciach, które razem tworzymy dla lepszej przyszłości!</p>
            <input type="text" name="name" placeholder="Imię*" value={formData.name} onChange={handleInputChange} required autoComplete="off" />
            <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleInputChange} required autoComplete="off" />
            <textarea name="about" placeholder="Opowiedź nam o sobie..." value={formData.about} onChange={handleInputChange} autoComplete="off" />
            <input type="text" name="organization" placeholder="Organizacja" value={formData.organization} onChange={handleInputChange} autoComplete="off" />
            <input type="text" name="phone" placeholder="Telefon" value={formData.phone} onChange={handleInputChange} autoComplete="off" />
            <input type="text" name="source" placeholder="Źródło" value={formData.source} onChange={handleInputChange} autoComplete="off" />
            <button type="submit">Wyślij</button>
          </form>
        )}
      </div>
    </button>
  );
};

export default FloatingButton;
