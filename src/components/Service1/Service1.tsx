'use client';
import {useEffect, useState} from "react";
import Head from "next/head";
import banner from "../../assets/workers/w1.jpg";
import mobileBanner from "../../assets/workers/w1.jpg";
import AOS from "aos";
import Popup from "reactjs-popup";
import PopupContent from '../Popup/Popup';
import Link from "next/link";
import "./Service1.scss";

const Service1 = () => {
  const [currentBanner, setCurrentBanner] = useState(banner);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init({ duration: 1000 });
  }, []);

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

  useEffect(() => {
    if (isClient) {
      window.scrollTo(0, 0);
    }
  }, [isClient]);

  const handleCardHover = (index: number | null) => {
    setActiveCard(index);
  };

  if (!isClient) {
    return null; // or return a loading state
  }

  return (
    <div className="Service1">
      <Head>
        <title>Услуги грузчиков | Профессиональные грузчики от 14 р/час</title>
        <meta name="description" content="Профессиональные услуги грузчиков для вашего бизнеса и дома"/>
      </Head>
      <div className="banner" data-aos="fade-up">
        <div className="parallax-1"></div>
        <div className="banner-content">
          <h1 className="title-services" style={{ color: 'white' }}>Грузчики от <span className="highlight">14 р/час</span></h1>
          <p className="subtitle" style={{ color: 'white' }}>Профессиональные услуги грузчиков для вашего бизнеса и дома</p>
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
              Мы предлагаем надежные и профессиональные услуги грузчиков, которые
              помогут вам с любыми задачами по перемещению и транспортировке. Наши
              специалисты обладают многолетним опытом и готовы справиться с любыми
              вызовами.
            </p>
          </div>
        </section>
        <section className="cards" data-aos="fade-up">
          <h2 className="services-title">Наши <span className="text-accent">услуги</span></h2>
          <div className="cards-container">
            <Link href="/services/unloading" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(0)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 0 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-truck-loading"></i></div>
                  <h3>Разгрузка фур, вагонов, контейнеров</h3>
                  <p>
                    Мы обеспечиваем профессиональную разгрузку фур, вагонов и контейнеров, гарантируя безопасность и эффективность.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/moving" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(1)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 1 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-dolly"></i></div>
                  <h3>Перемещение и перестановка груза</h3>
                  <p>
                    Перемещаем и переставляем груз с учетом всех требований и пожеланий клиента.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/relocation" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(2)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 2 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-home"></i></div>
                  <h3>Помощь при переездах</h3>
                  <p>
                    Обеспечиваем полную поддержку при переездах, включая упаковку и транспортировку.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/construction" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(3)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 3 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-hard-hat"></i></div>
                  <h3>Погрузка - разгрузка стройматериалов</h3>
                  <p>
                    Профессиональная погрузка и разгрузка строительных материалов с соблюдением всех норм безопасности.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/warehouse" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(4)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 4 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-warehouse"></i></div>
                  <h3>Помощь на складе</h3>
                  <p>
                    Предоставляем услуги по помощи на складе, включая сортировку и размещение товаров.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="about" data-aos="fade-up">
          <div className="about-container">
            <div className="about-text">
              <h2>О наших <span className="text-accent">грузчиках</span></h2>
              <p>
                Наши грузчики — это команда профессионалов, которые готовы помочь
                вам с любыми задачами, связанными с перемещением и транспортировкой.
                Мы гордимся тем, что предоставляем услуги высокого качества, которые
                соответствуют ожиданиям наших клиентов.
              </p>
              <p>
                Каждый из наших сотрудников проходит тщательный отбор и обучение,
                чтобы гарантировать, что они обладают всеми необходимыми навыками и
                знаниями для выполнения своей работы.
              </p>
              <div className="stats-container">
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-text">лет опыта</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
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

export default Service1;