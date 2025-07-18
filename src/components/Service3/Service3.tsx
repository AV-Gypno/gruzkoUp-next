'use client';
import React, {useEffect, useState} from "react";
import Head from "next/head";
import banner from "../../assets/workers/w3.jpg";
import mobileBanner from "../../assets/workers/w3.jpg";
import AOS from "aos";
import Popup from "reactjs-popup";
import PopupContent from '../Popup/Popup';
import Link from "next/link";
import Cars from "../Cars/Cars";
import "./Service3.scss";

const Service3 = () => {
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
    <div className="Service3">
      <Head>
        <title>Автоуслуги | Профессиональные транспортные услуги</title>
        <meta name="description" content="Профессиональные автоуслуги для вашего бизнеса и личных нужд"/>
      </Head>
      <div className="banner" data-aos="fade-up">
        <div className="parallax-3"></div>
        <div className="banner-content">
          <h1 className="title-services" style={{ color: 'white' }}>Автоуслуги</h1>
          <p className="subtitle" style={{ color: 'white' }}>Профессиональные автоуслуги для вашего бизнеса и личных нужд</p>
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
              Мы предлагаем надежные и профессиональные автоуслуги, которые
              помогут вам с любыми задачами по перевозке и транспортировке. Наши
              специалисты обладают многолетним опытом и готовы справиться с любыми
              вызовами в кратчайшие сроки.
            </p>
          </div>
        </section>
        <section className="cards" data-aos="fade-up">
          <h2 className="services-title">Наши <span className="text-accent">услуги</span></h2>
          <div className="cards-container">
            <Link href="/services/cargo-transportation" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(0)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 0 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-truck"></i></div>
                  <h3>Грузоперевозки</h3>
                  <p>
                    Мы обеспечиваем профессиональные грузоперевозки по городу и области с гарантией сохранности груза.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/furniture-transportation" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(1)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 1 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-couch"></i></div>
                  <h3>Перевозка мебели</h3>
                  <p>
                    Перевозим мебель любой сложности с аккуратной погрузкой и разгрузкой.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/moving-services" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(2)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 2 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-home"></i></div>
                  <h3>Квартирные и офисные переезды</h3>
                  <p>
                    Комплексная организация переездов с упаковкой вещей и разборкой/сборкой мебели.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/construction-materials" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(3)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 3 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-hard-hat"></i></div>
                  <h3>Доставка стройматериалов</h3>
                  <p>
                    Осуществляем быструю и надежную доставку строительных материалов на ваш объект.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/equipment-transportation" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(4)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 4 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-cogs"></i></div>
                  <h3>Перевозка оборудования</h3>
                  <p>
                    Специализируемся на безопасной транспортировке промышленного и офисного оборудования.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/glass-transportation" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(5)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 5 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-wine-glass"></i></div>
                  <h3>Перевозка изделий из стекла</h3>
                  <p>
                    Безопасная транспортировка стеклянных изделий любой формы и размера с соблюдением всех мер предосторожности.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <Cars/>
        <section className="about" data-aos="fade-up">
          <div className="about-container">
            <div className="about-text">
              <h2>О наших <span className="text-accent">автоуслугах</span></h2>
              <p>
                Наши автоуслуги — это команда профессиональных водителей и современный автопарк,
                которые готовы помочь вам с любыми задачами по перевозке и транспортировке.
                Мы гордимся тем, что предоставляем услуги высокого качества, которые
                соответствуют ожиданиям наших клиентов.
              </p>
              <p>
                Каждый из наших водителей проходит тщательный отбор и обучение,
                чтобы гарантировать, что они обладают всеми необходимыми навыками и
                знаниями для выполнения своей работы.
              </p>
              <div className="stats-container">
                <div className="stat-item">
                  <span className="stat-number">7+</span>
                  <span className="stat-text">лет опыта</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">150+</span>
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
            <h2>Готовы начать?</h2>
            <p>Свяжитесь с нами сегодня и получите бесплатную консультацию!</p>
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

export default Service3;