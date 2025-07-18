"use client";

import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {usePathname} from "next/navigation";
import Image from "next/image";
import footerMan from "../../assets/footer.png";
import "./Footer.scss";

const Footer = () => {
  const pathname = usePathname();
  const isCustomersSection = pathname?.includes("/customers") ?? false;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const phoneNumber = isCustomersSection ? "+375 (33) 990-60-77" : "+375 (29) 346-90-36";
  const phoneHref = isCustomersSection ? "tel:+375339906077" : "tel:+375293469036";
  const telegramLink = isCustomersSection ? "https://t.me/gruzcoby" : "https://t.me/gruzco";
  const whatsappLink = isCustomersSection
    ? "https://wa.me/375339906077"
    : "https://wa.me/375339904077";
  const viberLink = isCustomersSection
    ? "viber://chat?number=%2B375339906077"
    : "viber://chat?number=%2B375339904077";

  return (
    <footer className="footer">
      {/*QA: анимация  data-aos="fade-up"*/}
      <div className="Footer">
        <div className="FooterContainer">
          <div className="FooterLinks">
            <h1>Контакты</h1>
            <h2>
              <a className="tel-href" href={phoneHref}>
                {phoneNumber}
              </a>
            </h2>
            <p className="footer-p">
              Оставьте заявку и мы перезвоним Вам в течение 30 минут. Если у
              Вас есть вопросы или нужна консультация, свяжитесь с нами!
            </p>
            <p>Грузко Бай - сервис для Вас!</p>
            <div className="Links">
              <div>
                <a href="https://www.instagram.com/gruzco.by/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a href={telegramLink} className="tg" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
                <a href={whatsappLink} className="whatsapp" target="_blank" rel="noopener noreferrer">
                  Whatsapp
                </a>
              </div>
              <div>
                <a href={viberLink} className="viber" target="_blank" rel="noopener noreferrer">
                  Viber
                </a>
                <a href="mailto:gruzco@mail.ru" className="hoverMail">
                  gruzco@mail.ru
                </a>
              </div>
            </div>
          </div>
          <Image src={footerMan} alt="footer image" className="fotIMG1" width={500} height={300}/>
        </div>
      </div>
      <div id="Footer1" className="footerBottom">
        <div className="ip">ООО &ldquo;ГрузКо&rdquo;</div>
        <div className="ip">УНП 193684357</div>
      </div>
    </footer>
  );
};

export default Footer;