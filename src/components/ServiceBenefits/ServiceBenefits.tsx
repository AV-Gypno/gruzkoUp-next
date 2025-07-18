import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import "./ServiceBenefits.scss";

interface Benefit {
  icon: React.ReactNode;
  text: string;
}

interface ServiceBenefitsProps {
  benefits: any;
  benefitsImage: any;
}

const ServiceBenefits: React.FC<ServiceBenefitsProps> = ({ benefits, benefitsImage }) => {
  const benefitsRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !benefitsRef.current) return;

    // Анимация появления при скролле
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const benefitItems = benefitsRef.current.querySelectorAll('.benefit-item');
    benefitItems.forEach(item => observer.observe(item));

    // Анимация для изображения
    const imageSection = document.querySelector('.benefits-image-section');
    if (imageSection) {
      observer.observe(imageSection);
    }

    return () => {
      benefitItems.forEach(item => observer.unobserve(item));
      if (imageSection) {
        observer.unobserve(imageSection);
      }
    };
  }, [isClient]);

  if (!isClient) {
    return null; // or return a loading state
  }

  return (
    <div className="benefits-container">
      {/* Секция с преимуществами */}
      <div className="benefits-section">
        <div className="benefits-grid" ref={benefitsRef}>
          {benefits.map((benefit: any, index: number) => (
            <div
              className="benefit-item"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="benefit-card">
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <p className="benefit-text">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Отдельная секция для изображения */}
      <div className="benefits-image-section">
        <div className="image-container">
          <Image
            src={benefitsImage}
            alt="Наши преимущества"
            width={600}
            height={400}
            layout="responsive"
          />
          <div className="image-overlay">
            <span>Наши услуги</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBenefits;