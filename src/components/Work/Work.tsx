'use client';

import React, {useEffect, useRef, useState} from "react";
import "./Work.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import {isBot} from '@/utils/isBot';

const Work = ({ onLoad }: { onLoad?: any }) => {
  const videoRef = useRef<any>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(!isBot());
  }, []);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 600,
        once: true,
        offset: -1200
      });
    }


    // Отслеживание загрузки видео только если не бот
    if (showVideo) {
      const videoElement = videoRef.current;

      if (videoElement) {
        const handleVideoLoad = () => {
          console.log("Видео в Work компоненте загружено");
          onLoad && onLoad();
        };

        if (videoElement.readyState >= 2) {
          console.log("Видео в Work компоненте уже загружено");
          onLoad && onLoad();
        } else {
          videoElement.addEventListener('loadeddata', handleVideoLoad);
          videoElement.addEventListener('error', () => {
            console.error("Ошибка загрузки видео в Work компоненте");
            onLoad && onLoad();
          });
        }

        return () => {
          videoElement.removeEventListener('loadeddata', handleVideoLoad);
        };
      } else {
        onLoad && onLoad();
      }
    } else {
      onLoad && onLoad();
    }
  }, [onLoad]);

  return (
    <div id="workS" className="Work green-theme" data-aos="fade-up">
      <div className="WorkContainer">
        <div className="Banner green-banner" data-aos="fade-up">
          <div className="VideoContainer green-video-container" data-aos="fade-right">
            {showVideo && (
              <video
                ref={videoRef}
                className="BannerVideo"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/assets/video234.mp4" type="video/mp4"/>
                Ваш браузер не поддерживает видео.
              </video>
            )}
          </div>
          <div className="Rules green-rules" data-aos="fade-left">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="listblock green-listblock"
                data-aos="fade-up"
                data-aos-delay={num * 100}
              >
                <div className="titleList green-title-list">
                  <span className="green-number">{num}/6 </span>
                  {num === 1 && "Обработка заявки"}
                  {num === 2 && "Уточнение деталей"}
                  {num === 3 && "Расчет и согласование"}
                  {num === 4 && "Оформление заказа"}
                  {num === 5 && "Выполнение работы"}
                  {num === 6 && "Оплата услуги"}
                </div>
                <p>
                  {num === 1 && "Оформляете заявку по телефону или в письменной форме"}
                  {num === 2 && "Наш менеджер уточняет детали заказа для расчета стоимости"}
                  {num === 3 && "Производится расчет стоимости и согласование с клиентом"}
                  {num === 4 && "Менеджер регистрирует ваш заказ в нашей базе"}
                  {num === 5 && "Наши работники выполняют работу точно и в срок"}
                  {num === 6 && "Производится оплата согласно установленных тарифов"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
