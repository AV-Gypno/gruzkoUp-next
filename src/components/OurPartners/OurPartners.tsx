'use client';

import React, {useEffect} from "react";
import Image from "next/image";
import "./OurPartners.scss"; // Обычный импорт SCSS
import AOS from "aos";
import "aos/dist/aos.css";
import images from '@/constants/partners'

const OurPartners: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="OurPartners">
      <div className="OurPartnersContainer">
        <div className="OurPartnersList">
          {images.map((src, index) => (
            <div key={index} className="partnerLogo" data-aos="fade-up">
              <Image
                src={src}
                alt={`Partner ${index + 1}`}
                width={150}
                height={80}
                className="partnerImage"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;