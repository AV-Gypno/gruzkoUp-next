"use client";

import React, {useEffect, useRef, useState} from "react";
import "./Loader.scss";

interface LoaderProps {
  loadingStatus: boolean;
  forceDuration?: number;
}

const Loader: React.FC<LoaderProps> = ({ loadingStatus, forceDuration = 2000 }) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLDivElement>(null);
  const boxContainerRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLParagraphElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!mounted || !progressBarRef.current) return;

    // Устанавливаем CSS-анимацию для прогресс-бара
    progressBarRef.current.style.transition = `width ${forceDuration}ms cubic-bezier(0.1, 0.7, 1.0, 0.1)`;
    progressBarRef.current.style.width = '0%';

    let startTime: number | null = null;
    let animationFrameId: number | null = null;

    const updateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const runtime = timestamp - startTime;
      const relativeProgress = Math.min(runtime / forceDuration, 1);
      const percentComplete = Math.floor(relativeProgress * 100);

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${percentComplete}%`;
      }

      if (progressTextRef.current) {
        progressTextRef.current.textContent = `${percentComplete}%`;
      }

      if (boxContainerRef.current) {
        const targetBoxes = Math.ceil((percentComplete / 100) * 8);
        const currentBoxes = boxContainerRef.current.children.length;

        if (targetBoxes > currentBoxes) {
          for (let i = currentBoxes; i < targetBoxes; i++) {
            const box = document.createElement('div');
            box.className = `box box-${i + 1}`;
            box.style.animationDelay = `${i * 0.1}s`;
            box.style.backgroundColor = i % 2 ? '#ff9800' : '#f5f5f5';
            boxContainerRef.current.appendChild(box);
          }
        }
      }

      if (messageRef.current) {
        if (percentComplete < 30) {
          messageRef.current.textContent = "Инициализация загрузки...";
        } else if (percentComplete < 70) {
          messageRef.current.textContent = "Загружаем ресурсы для вас...";
        } else if (percentComplete < 95) {
          messageRef.current.textContent = "Почти готово...";
        } else {
          messageRef.current.textContent = "Загрузка завершена!";
        }
      }

      if (relativeProgress < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    const animationTimeout = setTimeout(() => {
      animationFrameId = requestAnimationFrame(updateProgress);
    }, 50);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      clearTimeout(animationTimeout);
    };
  }, [forceDuration, mounted]);

  if (!loadingStatus) return null;

  return (
    <div className="loader-container">
      <div className="loader-scene">
        <div className="city-skyline">
          {[...Array(6)].map((_, i) => (
            <div key={`building-${i}`} className={`building building-${i + 1}`}></div>
          ))}
        </div>
        <div className="road">
          {[...Array(10)].map((_, i) => (
            <div key={`road-line-${i}`} className="road-line"></div>
          ))}
        </div>
        <div className="truck-animation">
          <div className="truck">
            <div className="truck-container">
              <div className="truck-box-container" ref={boxContainerRef}/>
            </div>
            <div className="truck-cabin"></div>
            <div className="truck-wheel front-wheel"></div>
            <div className="truck-wheel back-wheel"></div>
            <div className="truck-light"></div>
          </div>
        </div>
      </div>
      <div className="loader-content">
        <div className="loader-logo">
          <h1 className="loader-title">
            <span className="gruz">GRUZ</span>
            <span
              className="gruz co"
              style={{
                marginLeft: '-0.1em',
                fontWeight: 'bold',
                color: '#ff9800'
              }}
            >
              CO
            </span>
          </h1>
        </div>
        <div className="loader-progress-bar">
          <div
            ref={progressBarRef}
            className="loader-progress-fill"
          />
          <div className="loader-percentage" ref={progressTextRef}>0%</div>
        </div>
        <p className="loader-text" ref={messageRef}>
          Инициализация загрузки...
        </p>
      </div>
    </div>
  );
};

export default Loader;