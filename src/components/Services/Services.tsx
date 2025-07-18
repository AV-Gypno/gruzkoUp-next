'use client';
import {useLayoutEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import Link from 'next/link';
import "./Services.scss";

interface ServiceItem {
  title: string[];
  link: string;
  image: string;
}

interface ServicesProps {
  highlightService?: string;
  onLoad?: () => void;
}

const servicesData: ServiceItem[] = [
  {
    title: ["Грузчики от", "14 р/час"],
    link: "/service1",
    image: "1s.jpg"
  },
  {
    title: ["Разнорабочие от", "14 р/час"],
    link: "/service2",
    image: "2s.jpg",
  },
  {
    title: ["Грузоперевозки"],
    link: "/service3",
    image: "3s.jpg",
  },
  {
    title: ["Такелажные работы"],
    link: "/service4",
    image: "4s.jpg"
  },
  {
    title: ["Утилизация"],
    link: "/service5",
    image: "5s.png"
  },
];

const Services = ({ highlightService, onLoad }: ServicesProps) => {
  const [visibleItems] = useState<number[]>([]);
  const { ref } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [windowWidth, setWindowWidth] = useState<number>(0);

  useLayoutEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);


  return (
    <div className="Services">
      <div className="ServicesBg">
        <div className="services-container" ref={ref}>
          {servicesData.slice(0, 3).map((service, index) => (
            <div
              className={`servicesContainer ${service.title.join(' ') === highlightService ? 'highlight' : ''} ${visibleItems.includes(index) ? 'visible' : 'hidden'}`}
              key={index}
              style={{ backgroundImage: `url(/assets/${service.image})` }}
            >
              <div className="serviceContent">
                <div className="title-area">
                  {service.title.map((line, i) => (
                    <h3 key={i}>{line}</h3>
                  ))}
                </div>
                <Link href={service.link} className="serviceButton">
                  Перейти
                </Link>
              </div>
            </div>
          ))}
          {servicesData.slice(3, 5).map((service, index) => (
            <div
              className={`servicesContainer ${service.title.join(' ') === highlightService ? 'highlight' : ''} ${visibleItems.includes(index + 3) ? 'visible' : 'hidden'}`}
              key={index + 3}
              style={{ backgroundImage: `url(/assets/${service.image})` }}
            >
              <div className="serviceContent">
                <div className="title-area">
                  {service.title.map((line, i) => (
                    <h3 key={i}>{line}</h3>
                  ))}
                </div>
                <Link href={service.link} className="serviceButton">
                  Перейти
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;