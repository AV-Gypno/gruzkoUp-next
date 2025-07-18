'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Cars.scss';
import {car1, car2, car3, car4, car5, car6, car7, car8, car9} from './carsObj';

type ImageStatus = {
  [key: string]: 'loading' | 'loaded' | 'error';
};

const Cars = ({ onLoad }: { onLoad?: () => void }) => {
  const fallbackImage = '/images/placeholder.jpg';
  const allCars = [car1, car2, car3, car4, car5, car6, car7, car8, car9];

  const [imageStatus, setImageStatus] = useState<ImageStatus>({});
  const [loadedCount, setLoadedCount] = useState(0);
  const [onLoadCalled, setOnLoadCalled] = useState(false);

  useEffect(() => {
    document.body.classList.add('loaded');
    return () => {
      document.body.classList.remove('loaded');
    };
  }, []);

  useEffect(() => {
    if (loadedCount === allCars.length && onLoad && !onLoadCalled) {
      console.log('Все изображения автомобилей загружены');
      setOnLoadCalled(true);
      onLoad();
    }
  }, [loadedCount, allCars.length, onLoad, onLoadCalled]);

  const handleImageLoad = (id: string) => {
    setImageStatus(prev => ({ ...prev, [id]: 'loaded' }));
    setLoadedCount(prev => prev + 1);
  };

  const handleImageError = (id: string) => {
    setImageStatus(prev => ({ ...prev, [id]: 'error' }));
    console.error(`Ошибка загрузки изображения для авто ID: ${id}`);
    setLoadedCount(prev => prev + 1);
  };

  return (
    <div className="Cars">

      <div className="modern-cars-grid">
        {allCars.map((car) => (
          <div key={car.id} className="modern-car-card">
            <div className="modern-car-image-container">
              {imageStatus[car.id] !== 'loaded' && imageStatus[car.id] !== 'error' && (
                <div className="modern-car-loader"></div>
              )}
              <Image
                src={imageStatus[car.id] === 'error' ? fallbackImage : car.img}
                alt={car.name || "Спецтехника"}
                width={400}
                height={300}
                quality={95}
                priority={true}
                onLoadingComplete={() => handleImageLoad(car.id)}
                onError={() => handleImageError(car.id)}
                className={`modern-car-image ${imageStatus[car.id] === 'loaded' ? 'loaded' : ''}`}
              />
              {imageStatus[car.id] === 'error' && (
                <div className="image-error-text">Изображение недоступно</div>
              )}
              <div className="modern-car-price">
                {car.price || "По запросу"}
              </div>
            </div>
            <div className="modern-car-content">
              <h3 className="modern-car-title">
                {car.name || "Спецтехника"}
              </h3>
              <p className="modern-car-description">
                {car.first_text || "Описание недоступно"}
              </p>
              <div className="modern-car-capacity">
                {car.second_text || "Характеристики недоступны"}
              </div>
              <Link href={`/cars/${car.id}`} className="modern-car-button">
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;