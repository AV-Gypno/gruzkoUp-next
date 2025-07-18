'use client';
import React, {useEffect, useState} from "react";
import Head from "next/head";
import banner from "../../assets/workers/w7.jpg";
import mobileBanner from "../../assets/workers/w6.jpg";
import AOS from "aos";
import Popup from "reactjs-popup";
import PopupContent from '../Popup/Popup';
import Link from "next/link";
import "./Service4.scss";

const Service4 = () => {
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
    <div className="Service4">
      <Head>
        <title>Такелажные работы | Профессиональное перемещение тяжелых предметов</title>
        <meta name="description" content="Перемещение пианино, рояля, аквариумов, стекол, зеркал и другого тяжелого оборудования"/>
      </Head>
      <div className="banner" data-aos="fade-up">
        <div className="parallax-4"></div>
        <div className="banner-content">
          <h1 className="title-services" style={{ color: 'white' }}>Такелажные работы</h1>
          <p className="subtitle" style={{ color: 'white' }}>Перемещение пианино, рояля, аквариумов, стекол, зеркал и другого тяжелого
            оборудования</p>
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
              Мы предоставляем профессиональные услуги по такелажным работам, включая перемещение пианино, рояля, аквариумов, стекол,
              зеркал, тяжелого оборудования, бильярдных столов, джакузи, ванн, тренажеров, сейфов и других тяжелых и крупногабаритных
              единиц. Наши специалисты обладают многолетним опытом и готовы справиться с любыми вызовами, обеспечивая надежность и
              безопасность на каждом этапе.
            </p>
          </div>
        </section>
        <section className="cards" data-aos="fade-up">
          <h2 className="services-title">Наши <span className="text-accent">услуги</span></h2>
          <div className="cards-container">
            <Link href="/services/piano-moving" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(0)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 0 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-music"></i></div>
                  <h3>Перемещение музыкальных инструментов</h3>
                  <p>
                    Мы обеспечиваем безопасную и аккуратную транспортировку пианино и роялей.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/heavy-equipment" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(1)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 1 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-weight-hanging"></i></div>
                  <h3>Перемещение тяжелого оборудования</h3>
                  <p>
                    Перемещаем тяжелое оборудование, бильярдные столы, джакузи и другие крупные предметы.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/glass-moving" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(2)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 2 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-glass"></i></div>
                  <h3>Перемещение стекол и зеркал</h3>
                  <p>
                    Эффективно и безопасно перемещаем стекла, зеркала и аквариумы.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/safe-moving" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(3)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 3 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-lock"></i></div>
                  <h3>Перемещение сейфов</h3>
                  <p>
                    Профессиональное перемещение сейфов любого размера и веса с соблюдением всех мер безопасности.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/spa-moving" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(4)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 4 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-hot-tub"></i></div>
                  <h3>Перемещение джакузи и ванн</h3>
                  <p>
                    Аккуратное перемещение джакузи, ванн и другого сантехнического оборудования.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/gym-equipment" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(5)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 5 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-dumbbell"></i></div>
                  <h3>Перемещение тренажеров</h3>
                  <p>
                    Безопасное перемещение тренажеров и спортивного оборудования любой сложности.
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
              <h2>О наших <span className="text-accent">такелажных работах</span></h2>
              <p>
                Мы предлагаем широкий спектр услуг по такелажным работам, включая перемещение тяжелых и крупногабаритных единиц. Наши
                специалисты проходят тщательный отбор и обучение, чтобы гарантировать, что они обладают всеми необходимыми навыками и
                знаниями для выполнения своей работы.
              </p>
              <p>
                Мы стремимся к тому, чтобы каждый клиент остался доволен нашим сервисом и рекомендовал нас своим друзьям и коллегам.
                Независимо от сложности задачи, мы готовы предложить индивидуальные решения, которые соответствуют вашим потребностям.
              </p>
              <div className="stats-container">
                <div className="stat-item">
                  <span className="stat-number">8+</span>
                  <span className="stat-text">лет опыта</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">200+</span>
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
            <p>Свяжитесь с нами сегодня и получите бесплатную консультацию по всем вопросам такелажных работ!</p>
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

export default Service4;