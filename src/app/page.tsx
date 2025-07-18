'use client'

import React from "react";
import '@/styles/main.scss'
import Main from "@/components/Main/Main";
import Services from "@/components/Services/Services";
import BackToUs from "@/components/BackToUs/BackToUs";
import Work from "@/components/Work/Work";
import OurPartners from "@/components/OurPartners/OurPartners";
import Portfolio from "@/components/Portfolio/Portfolio";
import Cars from "@/components/Cars/Cars";
import Button from "@/components/shared/Buttons/MainButton";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="section">
          <Main/>
        </div>

        <div className="section">
          <h2 className="background-grey1">Предоставляем услуги</h2>
          <Services/>
        </div>

        <div className="section">
          <h2>Почему к нам приходят снова?</h2>
          <BackToUs/>
          <Button/>
        </div>

        <div className="section">
          <h2>Как мы работаем</h2>
          <Work/>
        </div>

        <div className="section">
          <h2>Наше портфолио</h2>
          <Portfolio/>
        </div>
        <div className="section background-white pt-3">
          <h2>Предоставляем технику</h2>
          <Cars/>
        </div>
        <div className="section">
          <h2>Наши Партнеры</h2>
          <OurPartners/>
        </div>
      </div>
    </>
  );
}
