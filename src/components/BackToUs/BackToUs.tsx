'use client';

import {useInView} from "react-intersection-observer";
import Image from "next/image";
import us1 from '@/assets/assets/us1.png'
import us2 from '@/assets/assets/us2.png'
import us3 from '@/assets/assets/us3.png'
import us4 from '@/assets/assets/us4.png'

import "./BackToUs.scss";

const BackToUs = () => {
  const { ref: cardRef1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: cardRef2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: cardRef3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: cardRef4, inView: inView4 } = useInView({ triggerOnce: true });

  return (
    <div id="BackToUs1" className="BackToUs">
      <div className="BackContainer">
        <div className="imageContainer">
          <div className="imageList">
            <div
              className={`back img1Back ${inView1 ? "visible" : ""}`}
              ref={cardRef1}
            >
              <Image
                src={us1}
                className="icon"
                alt="Качественный сервис"
                width={100} // Укажите реальные размеры
                height={100} // Укажите реальные размеры
              />
              <div className="textOverlay">
                <p className="title1">Качественный сервис</p>
                <p className="text1">Ваше удобство - наша работа!</p>
              </div>
            </div>
            <div
              className={`back img2Back ${inView2 ? "visible" : ""}`}
              ref={cardRef2}
            >
              <Image
                src={us2}
                className="icon"
                alt="Решение задач"
                width={100}
                height={100}
              />
              <div className="textOverlay">
                <p className="title1">Решение задач</p>
                <p className="text1">Сила gruzco в ваших руках!</p>
              </div>
            </div>
            <div
              className={`back img3Back ${inView3 ? "visible" : ""}`}
              ref={cardRef3}
            >
              <Image
                src={us3}
                className="icon"
                alt="Оптимизация затрат"
                width={100}
                height={100}
              />
              <div className="textOverlay">
                <p className="title1">Оптимизация затрат</p>
                <p className="text1">Невозможное станет реальным!</p>
              </div>
            </div>
            <div
              className={`back img4Back ${inView4 ? "visible" : ""}`}
              ref={cardRef4}
            >
              <Image
                src={us4}
                className="icon"
                alt="Экономия времени"
                width={100}
                height={100}
              />
              <div className="textOverlay">
                <p className="title1">Экономия времени</p>
                <p className="text1">Профессионализм экономит время!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackToUs;