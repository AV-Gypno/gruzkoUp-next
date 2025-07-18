'use client'

import React, {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CarDetail.scss";
import Popup from "reactjs-popup";
import PopupContent from "../Popup/Popup";
import data from "@/constants/workers";
import Cars from "../Cars/Cars";
import Link from "next/link";
import {carObj} from '@/constants/carsObj'

const CarDetail: React.FC = () => {
  const params = useParams();
  const id = params?.id as string;
  console.log(id)
  const [car, setCar] = useState<any>(carObj.car2);
  const [animationStep, setAnimationStep] = useState(0);
  const [randomImage, setRandomImage] = useState<any>(null);
  const [fillPercent, setFillPercent] = useState(0);
  const [animDirection, setAnimDirection] = useState<'horizontal' | 'vertical'>('horizontal');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  useEffect(() => {
    if (!id) return;

    const allCars = [carObj.car1, carObj.car2, carObj.car3, carObj.car4, carObj.car5, carObj.car6, carObj.car7, carObj.car8, carObj.car9];
    const foundCar = allCars.find(car => car.id === id);
    console.log(id, foundCar)
    setCar(foundCar);

    if (isClient) {
      AOS.init({ duration: 1000, easing: 'ease-in-out' });

      // Smooth scroll to top
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 100);
    }

    // Fill animation
    const fillAnimation = setInterval(() => {
      setFillPercent(prev => {
        if (prev >= 100) {
          setAnimDirection(curr => curr === 'horizontal' ? 'vertical' : 'horizontal');
          return 0;
        }
        return prev + 1;
      });
    }, 30);

    // Banner animation
    const interval = setInterval(() => {
      setAnimationStep(prev => (prev + 1) % 4);
    }, 3000);

    // Random image selection
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomImage(data[randomIndex]);

    // Handle manipulators special case
    if (id === 'manipulators') {
      // In Next.js, we handle canonical tags differently
      return () => {
        clearInterval(interval);
        clearInterval(fillAnimation);
      };
    }

    return () => {
      clearInterval(interval);
      clearInterval(fillAnimation);
    };
  }, [id, isClient]);

  if (!id) return;

  return (
    <div className="carDetail">
      <Head>
        {car.id === 'manipulators' && (
          <link rel="canonical" href="https://gruzco.by/cars/manipulators"/>
        )}
        <title>{car.name} | GRUZCO</title>
        <meta name="description" content={`Аренда ${car.name} - надежная техника для ваших задач`}/>
      </Head>
      <div className="interactiveBanner acid-banner">
        <div className="banner-background"></div>
        <div className="bannerContent">
          <div className="contentWrapper">
            <h1 className="gruzMain" data-aos="fade-up">
              GRUZ<span className="blackText">CO</span>
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="100">{car.name}</h2>
            <p className="highlight" data-aos="fade-up" data-aos-delay="200">
              Оставьте заявку и мы перезвоним Вам в течение 30 минут
            </p>
            <p className="subText" data-aos="fade-up" data-aos-delay="300">{car.price}</p>
            {car.min_order ?
              <p className="subText" data-aos="fade-up" data-aos-delay="400">
                {car.min_order}
              </p>
              :
              <p className="subText" data-aos="fade-up" data-aos-delay="400">
                Минимальный заказ по наличному расчёту - 2 часа, по безналичному
                расчёту - 3 часа.
              </p>
            }
            <Popup
              trigger={<button className="appleButton" data-aos="fade-up" data-aos-delay="500">Заказать звонок</button>}
              modal
              overlayStyle={{
                background: 'rgba(0, 0, 0, 0.8)',
                zIndex: 999
              }}
              closeOnDocumentClick
            >
              <PopupContent/>
            </Popup>
          </div>
        </div>
      </div>
      <div className="carContent">
        <div className="container">
          <div className="breadcrumbs" data-aos="fade-right">
            <Link href="/">Главная</Link> / <Link href="/cars">Техника</Link> / <span>{car.name}</span>
          </div>
          <div className="carDescription" data-aos="fade-up">
            <h2>Описание</h2>
            <p>
              {car.name} - это надежная техника для выполнения различных задач.
              Мы предлагаем выгодные условия аренды и гарантируем качество обслуживания.
            </p>
          </div>
          <div className="carGallery" data-aos="fade-up">
            <div className="galleryContainer">
              <div className="mainImage" onClick={() => console.log(car.img)}>
                <img src={car.img.src} alt={car.name}/>
              </div>
            </div>
          </div>
          <div className="carFeatures" data-aos="fade-up">
            <h2>Характеристики</h2>
            <ul>
              <li data-aos="fade-right" data-aos-delay="100">{car.first_text}</li>
              <li data-aos="fade-right" data-aos-delay="200">{car.second_text}</li>
              <li data-aos="fade-right" data-aos-delay="300">Техническое обслуживание включено</li>
              <li data-aos="fade-right" data-aos-delay="400">Опытные водители</li>
            </ul>
          </div>
          <div className="carDetailedInfo" data-aos="fade-up">
            <h2>Подробная информация</h2>
            <div className="infoContainer">
              <div className="infoText" data-aos="fade-right">
                <h3>Технические характеристики</h3>
                <p>
                  {car.name} обладает высокой производительностью и надежностью.
                  Данная техника оснащена современным оборудованием, которое позволяет
                  эффективно выполнять различные задачи в строительстве и логистике.
                </p>
                <p>
                  Мы предоставляем технику в отличном техническом состоянии,
                  регулярно проводим техническое обслуживание и следим за исправностью
                  всех систем.
                </p>
              </div>
              {randomImage && (
                <div className="infoImage">
                  <img
                    src={randomImage.src}
                    alt={car.name}
                    className="car-random-image"
                    style={{
                      maxWidth: '40%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                      objectFit: 'cover',
                      minHeight: '300px',
                      display: 'block',
                      margin: '0 auto'
                    }}
                  />
                </div>
              )}
              <div className="infoText" data-aos="fade-left">
                <h3>Условия аренды</h3>
                <p>
                  Мы предлагаем гибкие условия аренды {car.name}, которые подойдут
                  как для краткосрочных, так и для долгосрочных проектов.
                </p>
                <p>
                  Наши клиенты получают полную техническую поддержку на протяжении
                  всего срока аренды. В случае возникновения неисправностей,
                  мы оперативно решаем проблему или предоставляем замену.
                </p>
              </div>
            </div>
          </div>
          <div className="carAdvantages" data-aos="fade-up">
            <h2>Преимущества</h2>
            <div className="advantagesGrid">
              <div className="advantageCard" data-aos="zoom-in" data-aos-delay="100">
                <div className="advantageIcon">✓</div>
                <p>Быстрая подача техники</p>
              </div>
              <div className="advantageCard" data-aos="zoom-in" data-aos-delay="200">
                <div className="advantageIcon">✓</div>
                <p>Гибкие условия оплаты</p>
              </div>
              <div className="advantageCard" data-aos="zoom-in" data-aos-delay="300">
                <div className="advantageIcon">✓</div>
                <p>Работаем 24/7</p>
              </div>
            </div>
          </div>
          <div className="callToAction" data-aos="fade-up">
            <h2>Готовы заказать?</h2>
            <p>Свяжитесь с нами для получения дополнительной информации или оформления заказа</p>
            <Popup
              trigger={<button className="appleButton">Заказать {car.name}</button>}
              modal
              closeOnDocumentClick
            >
              <PopupContent/>
            </Popup>
          </div>
        </div>
      </div>
      <div className="related-cars-section">
        <div className="container">
          <Cars onLoad={() => console.log("Подборка техники загружена")}/>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;