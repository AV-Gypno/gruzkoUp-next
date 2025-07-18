"use client";

import React, {useState} from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import images from '@/constants/portfolio'
import "./Portfolio.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Типы для TypeScript
interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
  responsive: Array<{
    breakpoint: number;
    settings: Partial<SliderSettings>;
  }>;
}


const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: any) => {
    setSelectedImage(image);
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="Portfolio" className="Portfolio">
      <Slider {...settings} className="portfolioSlider">
        {images.map((image, index) => (
          <div className="portfolioItem" key={index} onClick={() => openModal(image)}>
            <div
              className="portfolioImage"
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
          </div>
        ))}
      </Slider>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="Modal"
        overlayClassName="Overlay"
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
      >
        {selectedImage && (
          <Image src={selectedImage} alt="Portfolio" className="modalImage"/>
        )}
        <button onClick={closeModal} className="closeButton">×</button>
      </Modal>
    </div>
  );
};

export default Portfolio;