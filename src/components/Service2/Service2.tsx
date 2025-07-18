'use client';
import React, {useEffect, useState} from "react";
import Head from "next/head";
import banner from "../../assets/services/services2.png";
import mobileBanner from "../../assets/services/banner2.png";
import AOS from "aos";
import Popup from "reactjs-popup";
import PopupContent from '../Popup/Popup';
import Link from "next/link";
import "./Service2.scss";

const Service2 = () => {
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
    <div className="Service2">
      <Head>
        <title>Услуги разнорабочих | Профессиональные разнорабочие от 14 р/час</title>
        <meta name="description" content="Профессиональные услуги разнорабочих для вашего дома и бизнеса"/>
      </Head>
      <div className="banner" data-aos="fade-up">
        <div className="parallax-2"></div>
        <div className="banner-content">
          <h1 className="title-services" style={{ color: 'white' }}>Разнорабочие от <span className="highlight">14 р/час</span></h1>
          <p className="subtitle" style={{ color: 'white' }}>Профессиональные услуги разнорабочих для вашего дома и бизнеса</p>
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
              Мы предлагаем надежные и профессиональные услуги разнорабочих, которые
              помогут вам с любыми задачами по дому и на участке. Наши
              специалисты обладают многолетним опытом и готовы справиться с любыми
              вызовами.
            </p>
          </div>
        </section>
        <section className="cards" data-aos="fade-up">
          <h2 className="services-title">Наши <span className="text-accent">услуги</span></h2>
          <div className="cards-container">
            <Link href="/services/furniture" passHref>
              <div className="card-link"
                   onMouseEnter={() => handleCardHover(0)}
                   onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 0 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-couch"></i></div>
                  <h3>Сборка/разборка мебели</h3>
                  <p>
                    Наши специалисты быстро и аккуратно соберут или разберут вашу мебель.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/gardening" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(1)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 1 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-seedling"></i></div>
                  <h3>Земельные работы/прополка</h3>
                  <p>
                    Мы поможем вам с любыми земельными работами, включая прополку и уход за садом.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/fencing" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(2)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 2 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-fence"></i></div>
                  <h3>Установка и ремонт заборов</h3>
                  <p>
                    Наши мастера профессионально установят или отремонтируют заборы на вашем участке.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/construction-work" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(3)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 3 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-hammer"></i></div>
                  <h3>Демонтажные/Монтажные работы</h3>
                  <p>
                    Мы выполняем демонтаж и монтаж различных конструкций быстро и безопасно.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/tree-care" passHref>
              <div className="card-link"
                   onMouseEnter={() => handleCardHover(4)}
                   onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 4 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-tree"></i></div>
                  <h3>Спил, обрезка, пересадка деревьев и кустарников, покос травы</h3>
                  <p>
                    Наши специалисты обеспечат уход за вашими деревьями и кустарниками, включая спил и обрезку.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/plowing" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(5)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 5 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-tractor"></i></div>
                  <h3>Вспашка и культивация</h3>
                  <p>
                    Мы предлагаем услуги по вспашке и культивации вашего участка.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/snow-removal" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(6)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 6 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-snowflake"></i></div>
                  <h3>Уборка снега</h3>
                  <p>
                    Наши разнорабочие помогут вам с уборкой снега в зимний период.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/picking" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(7)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 7 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-boxes"></i></div>
                  <h3>Комплектовщики</h3>
                  <p>
                    Наши специалисты быстро и качественно выполнят комплектацию товаров на складе или производстве.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/stickering" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(8)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 8 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-paint-brush"></i></div>
                  <h3>Стикеровщики</h3>
                  <p>
                    Мы предоставляем услуги по профессиональной стикеровке товаров и продукции любой сложности.
                  </p>
                  <span className="card-arrow">→</span>
                </div>
              </div>
            </Link>
            <Link href="/services/marking" passHref>
              <div
                className="card-link"
                onMouseEnter={() => handleCardHover(9)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className={`card ${activeCard === 9 ? 'active' : ''}`}>
                  <div className="card-icon"><i className="fas fa-marker"></i></div>
                  <h3>Маркировщик</h3>
                  <p>
                    Наши маркировщики обеспечат точную и аккуратную маркировку вашей продукции согласно всем требованиям.
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
              <h2>О наших <span className="text-accent">разнорабочих</span></h2>
              <p>
                Наши разнорабочие — это команда профессионалов, которые готовы помочь
                вам с любыми задачами, связанными с обслуживанием вашего дома и участка.
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

export default Service2;