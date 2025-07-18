'use client';

import {useState} from 'react';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import phoneIcon from '../../assets/assets/phone-icon1.png';
import './Callback.scss';

const Callback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isCustomersPage = pathname?.includes('/customers') ?? false;

  // Контакты в зависимости от страницы
  const contacts = {
    phone: isCustomersPage ? 'tel:+375339906077' : 'tel:+375339904077',
    form: isCustomersPage ? 'http://forma.gruzco.by/' : 'http://form.gruzco.by/',
    viber: isCustomersPage
      ? 'viber://chat?number=%2B375339906077'
      : 'viber://chat?number=%2B375339904077',
    telegram: 'https://t.me/gruzco',
    whatsapp: isCustomersPage
      ? 'https://wa.me/375339906077'
      : 'https://wa.me/375339904077',
    email: 'mailto:gruzco@mail.ru?subject=Оформить заказ&body=Содержание'
  };

  const menuItems = [
    { id: 'phone', className: 'open5', href: contacts.phone },
    { id: 'form', className: 'open4', href: contacts.form },
    { id: 'viber', className: 'open', href: contacts.viber },
    { id: 'telegram', className: 'open1', href: contacts.telegram },
    { id: 'whatsup', className: 'open2', href: contacts.whatsapp },
    { id: 'gmail', className: 'open3', href: contacts.email }
  ];

  return (
    <div className="callback-widget">
      <div className="circle phone" onClick={toggleMenu} role="button" tabIndex={0}>
        {pathname === '/' && (
          <div className="textInfo">Заказать звонок</div>
        )}
        <div className="iconBlock">
          <div className="iconPhone shake shake-constant">
            <i>
              <Image
                src={phoneIcon}
                className="iconPhone"
                alt="phone icon"
              />
            </i>
          </div>
        </div>
      </div>
      {menuItems.map((item) => (
        <a
          key={item.id}
          className={`circle menu ${isOpen ? item.className : 'openNo'}`}
          id={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.id}
        />
      ))}
    </div>
  );
};

export default Callback;