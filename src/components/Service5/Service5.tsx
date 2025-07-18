'use client';
import React, {useEffect, useState} from "react";
import Head from "next/head";
import banner from "../../assets/workers/w7.jpg";
import mobileBanner from "../../assets/workers/w7.jpg";
import AOS from "aos";
import Popup from "reactjs-popup";
import PopupContent from '../Popup/Popup';
import Link from "next/link";
import serviceData5 from "@/constants/services/data5";
import Cars from "../Cars/Cars";
import "./Service5.scss";

interface Service {
  icon: React.ReactNode;

  title: string;

  description: string;
}

interface ServiceData {
  [key: string]: Service;
}

const Service5 = () => {
  const [currentBanner, setCurrentBanner] = useState(banner);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init({ duration: 1000 });

    // Format current date
    if (typeof window !== 'undefined') {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
      setCurrentDate(now.toLocaleDateString('ru-RU', options));
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      window.scrollTo(0, 0);
    }
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    const updateBanner = () => {
      if (window.innerWidth <= 768) {
        setCurrentBanner(mobileBanner);
      } else {
        setCurrentBanner(banner);
      }
    };

    window.addEventListener("resize", updateBanner);
    updateBanner();

    return () => window.removeEventListener("resize", updateBanner);
  }, [isClient]);

  const handleCardHover = (index: number | null) => {
    setActiveCard(index);
  };

  if (!isClient) {
    return null; // or return a loading state
  }

  return (
    <div className="Service5">
      <Head>
        <title>Утилизация | Профессиональный вывоз и утилизация отходов</title>
        <meta name="description" content="Профессиональный вывоз и утилизация мебели, строительного мусора и других отходов"/>
      </Head>
      <div className="banner" data-aos="fade-up">
        <div className="parallax-5"></div>
        <div className="banner-content">
          <h1 className="title-services" style={{ color: 'white' }}>Утилизация</h1>
          <p className="subtitle" style={{ color: 'white' }}>Профессиональный вывоз и утилизация мебели, строительного мусора и других
            отходов</p>
          <Popup
            trigger={<button className="hero-button">Получить консультацию</button>}
            modal
            closeOnDocumentClick
            overlayStyle={{
              background: 'rgba( 0, 0, 0, 0.8)',
              zIndex: 999
            }}
          >
            <PopupContent/>
          </Popup>
        </div>
      </div>
      <div className="content-1">
        <section className="intro">
          <h2>Почему <span className="text-accent">выбирают нас</span>?</h2>
          <div className="intro-content">
            <div className="intro-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <p>
              Мы предоставляем профессиональные услуги по вывозу и утилизации различных типов отходов и ненужного имущества. Наша компания
              обладает собственным автопарком специализированной техники и командой опытных специалистов, которые быстро и эффективно решат
              любую задачу по утилизации. Мы ответственно подходим к вопросам экологии, обеспечивая правильную сортировку и переработку
              вывезенных материалов.
            </p>
          </div>
        </section>
        <section className="cards" data-aos="fade-up">
          <h2 className="services-title">Наши <span className="text-accent">услуги</span></h2>
          <div className="cards-container">
            {Object.entries(serviceData5 as ServiceData).map(([id, service], index) => (
              <Link href={`/services/${id}`} passHref key={id}>
                <div
                  className="card-link"
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={() => handleCardHover(null)}
                >
                  <div className={`card ${activeCard === index ? 'active' : ''}`}>
                    <div className="card-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="card-arrow">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <div className="background-white mt-4">
          <h2>Наша <span className="text-accent">техника</span></h2>
          <Cars/>
        </div>
        <section className="about" data-aos="fade-up">
          <div className="about-container">
            <div className="about-text">
              <h2>О наших <span className="text-accent">услугах утилизации</span></h2>
              <p>
                Мы предлагаем полный спектр услуг по вывозу и утилизации различных видов отходов. Наша компания работает как с частными
                лицами, так и с организациями любого масштаба.
              </p>
              <p>
                Мы строго соблюдаем экологические нормы и стандарты, обеспечивая правильную сортировку, переработку и утилизацию вывезенных
                материалов. Наша цель - не только освободить ваше пространство от ненужных вещей, но и внести вклад в сохранение окружающей
                среды.
              </p>
              <div className="stats-container">
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-text">лет опыта</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">250+</span>
                  <span className="stat-text">довольных клиентов</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-text">поддержка</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src={banner.src} alt="banner" className="banner-services banner-browser"/>
              <img src={currentBanner.src} alt="banner" className="banner-services banner-mobile"/>
            </div>
          </div>
        </section>
        <section className="cta" data-aos="fade-up">
          <div className="cta-overlay"></div>
          <div className="cta-content">
            <h2>Готовы освободить пространство?</h2>
            <p>Свяжитесь с нами сегодня и получите бесплатную консультацию по всем вопросам вывоза и утилизации!</p>
            <div className="cta-date">Актуально на: {currentDate}</div>
            <Popup
              trigger={<button className="contactButton">Связаться с нами</button>}
              modal
              closeOnDocumentClick
            >
              <PopupContent/>
            </Popup>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service5;