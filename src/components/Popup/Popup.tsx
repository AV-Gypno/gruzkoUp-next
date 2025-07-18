'use client';

import {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';
import "./Popup.scss";

const PopupContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Проверяем, находимся ли мы на странице клиентов
  const isCustomersPage = pathname.includes("/customers");

  // Выбираем соответствующий номер телефона
  const phoneNumber = isCustomersPage
    ? "+375 (33) 990-60-77"
    : "+375 (29) 346-90-36";

  // Выбираем соответствующий URL формы заказа
  const formUrl = isCustomersPage
    ? "https://forma.gruzco.by/"
    : "https://form.gruzco.by/";

  return (
    <div className={`Popup ${isOpen ? 'open' : ''}`}>
      <div className="PopupContainer">
        <h1>Контакты</h1>
        <p className="textPopup">
          Если у вас есть вопросы или нужна консультация, свяжитесь с нами!
          Оставьте заявку и мы перезвоним Вам в течение 30 минут.
        </p>
        <div className="contactLinks">
          <a href="viber://chat?number=%2B375339906077" className="contactLink">Viber</a>
          <a href="https://t.me/gruzco" className="contactLink">Telegram</a>
          <a href="https://wa.me/375339906077" className="contactLink">Whatsapp</a>
          <a href={`tel:${phoneNumber.replace(/[\s()]/g, '')}`} className="contactLink">{phoneNumber}</a>
          <a href="mailto:gruzco@mail.ru" className="contactLink">gruzco@mail.ru</a>
        </div>
        <button className="popupButton">
          <a href={formUrl} className="orderButton" target="_blank" rel="noopener noreferrer">Отправить заявку</a>
        </button>
      </div>
    </div>
  );
};

export default PopupContent;