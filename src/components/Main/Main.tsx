"use client";

import React, {useEffect, useRef} from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import "./Main.scss";
import AOS from "aos";
import "aos/dist/aos.css";

// Динамический импорт для клиент-сайд компонентов
const Popup = dynamic(() => import("reactjs-popup"), { ssr: false });
const PopupContent = dynamic(() => import("../Popup/Popup"), { ssr: false });

interface MainProps {
  onLoad?: () => void;
}

const Main: React.FC<MainProps> = ({ onLoad }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 800, once: true });

      onLoad && onLoad();

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [onLoad]);

  return (
    <div className="Main">
      <Head>
        <title>Грузчики в Минске</title>
        <meta name="description" content="Грузчики в Минске от 14 р/час. Оставьте заявку и мы перезвоним Вам в течение 30 минут."/>
        <meta charSet="utf-8"/>
      </Head>
      <div className="content">
        <div className="textSection" data-aos="fade-up">
          <h1 className="gruzMain" data-aos="fade-right" data-aos-delay="100">
            GRUZ<span className="blackText">CO</span>
          </h1>
          <p className="highlight" data-aos="fade-right" data-aos-delay="200">
            Оставьте заявку и мы перезвоним Вам в течение 30 минут
          </p>
          <p className="subText" data-aos="fade-right" data-aos-delay="300">Грузчики от 14 р/час.</p>
          <p className="subText" data-aos="fade-right" data-aos-delay="400">
            Минимальный заказ по наличному расчёту - 2 часа, по безналичному
            расчёту - 3 часа.
          </p>
          <div data-aos="fade-up" data-aos-delay="500">
            <Popup
              trigger={<button className="appleButton">Заказать звонок</button>}
              modal
              closeOnDocumentClick
              contentStyle={{
                padding: '20px',
                borderRadius: '8px',
                maxWidth: '500px',
                width: '90%',
                position: 'relative',
                zIndex: 1001,
                color: 'black'
              }}
              overlayStyle={{
                background: 'rgba(0, 0, 0, 0.8)',
                zIndex: 999
              }}
            >
              {(close: () => void) => <PopupContent close={close}/>}
            </Popup>
          </div>
        </div>
        <div className="videoSection" data-aos="fade-left" data-aos-delay="300">
          <video
            ref={videoRef}
            className="mainVideo"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/banner.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Main;