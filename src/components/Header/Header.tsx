'use client'

import {useEffect, useRef, useState} from "react";
import {FaBars, FaChevronDown, FaChevronUp, FaTimes} from "react-icons/fa";
import {usePathname, useRouter} from "next/navigation";
import "./Header.scss";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVehiclesDropdownOpen, setIsVehiclesDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownRendered, setIsDropdownRendered] = useState(false);
  const [isVehiclesDropdownRendered, setIsVehiclesDropdownRendered] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const isCustomersSection = pathname?.includes("/customers") ?? false;
  const isSectionHomePage = isCustomersSection
    ? pathname === "/customers"
    : pathname === "/";
  const isNotHomePage = !isSectionHomePage;

  const toggleDropdown = () => {
    if (isVehiclesDropdownOpen) setIsVehiclesDropdownOpen(false);
    if (!isDropdownOpen) setIsDropdownRendered(true);
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleVehiclesDropdown = () => {
    if (isDropdownOpen) setIsDropdownOpen(false);
    if (!isVehiclesDropdownOpen) setIsVehiclesDropdownRendered(true);
    setIsVehiclesDropdownOpen(!isVehiclesDropdownOpen);
  };

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    document.body.classList.toggle("menu-open", newMenuState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  const handleAnchorClick = (e: React.MouseEvent, anchor: string) => {
    if (isNotHomePage) {
      e.preventDefault();
      localStorage.setItem("scrollToAnchor", anchor);
      router.push(isCustomersSection ? "/customers" : "/");
    }
  };

  const getProperLink = (path: string) => {
    return isCustomersSection ? `/customers${path}` : path;
  };

  useEffect(() => {
    document.body.classList.toggle("home-page", isSectionHomePage);

    const savedAnchor = localStorage.getItem("scrollToAnchor");
    if (savedAnchor && isSectionHomePage) {
      setTimeout(() => {
        const element = document.querySelector(savedAnchor);
        element?.scrollIntoView({ behavior: "smooth" });
        localStorage.removeItem("scrollToAnchor");
      }, 500);
    }
  }, [pathname, isSectionHomePage]);

  useEffect(() => {
    const handleScroll = () => {
      const dropdownsOpen = isDropdownOpen || isVehiclesDropdownOpen;
      if (window.scrollY === 0 || dropdownsOpen) {
        setIsVisible(true);
      } else {
        setIsVisible(window.scrollY < lastScrollY);
      }
      setLastScrollY(window.scrollY);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setIsVehiclesDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("menu-open");
    };
  }, [lastScrollY, isDropdownOpen, isVehiclesDropdownOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDropdownOpen) setIsDropdownRendered(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [isDropdownOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isVehiclesDropdownOpen) setIsVehiclesDropdownRendered(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [isVehiclesDropdownOpen]);

  return (
    <header
      ref={headerRef}
      className={`Header ${isVisible ? "visible" : "hidden"} ${
        isNotHomePage ? "not-home-page inner-page-header" : ""
      }`}
    >
      <div className="headerContainer">
        <nav className={`anchorsContainer ${isMenuOpen ? "open" : ""}`}>
          {!isSectionHomePage && (
            <a
              href={isCustomersSection ? "/customers" : "/"}
              className="home-link logo-g"
              onClick={closeMenu}
            >
              Главная
            </a>
          )}

          <div className="dropdown services-dropdown services-menu-item">
            <div className="popular-badge">Популярное</div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
              className={`navLink ${isNotHomePage ? 'navlink-active' : ''}`}
            >
              Услуги {isDropdownOpen ? <FaChevronUp/> : <FaChevronDown/>}
            </a>
            {(isDropdownOpen || isDropdownRendered) && (
              <div className={`dropdownContent ${isDropdownOpen ? "open" : "closed"}`}>
                <a href="/fencing" onClick={closeMenu} className="fencing-service">
                  <span className="service-badge hit-badge">ХИТ</span>
                  Установка заборов
                </a>
                <a href={getProperLink('/service1')} onClick={closeMenu}>Грузчики от 14 р/час</a>
                <a href={getProperLink('/service2')} onClick={closeMenu}>Разнорабочие от 14 р/час</a>
                <a href={getProperLink('/service3')} onClick={closeMenu}>Автоуслуги</a>
                <a href={getProperLink('/service4')} onClick={closeMenu}>Такелажные работы</a>
                <a href={getProperLink('/service5')} onClick={closeMenu}>Утилизация</a>
              </div>
            )}
          </div>

          <div className="dropdown equipment-menu-item">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleVehiclesDropdown();
              }}
              className={`navLink ${isNotHomePage ? 'navlink-active2' : ''}`}
            >
              Техника {isVehiclesDropdownOpen ? <FaChevronUp/> : <FaChevronDown/>}
            </a>
            {(isVehiclesDropdownOpen || isVehiclesDropdownRendered) && (
              <div className={`dropdownContent ${isVehiclesDropdownOpen ? "open" : "closed"}`}>
                <a href={getProperLink('/cars/microbus')} onClick={closeMenu}>Микроавтобусы</a>
                <a href={getProperLink('/cars/furniture-van')} onClick={closeMenu}>Мебельные фургоны</a>
                <a href={getProperLink('/cars/five-ton-truck')} onClick={closeMenu}>Пятитонник</a>
                <a href={getProperLink('/cars/pyramid-truck')} onClick={closeMenu}>Машина с пирамидой</a>
                <a href={getProperLink('/cars/maz')} onClick={closeMenu}>МАЗ</a>
                <a href={getProperLink('/cars/mini-tractor')} onClick={closeMenu}>Минитрактор</a>
                <a href={getProperLink('/cars/containers')} onClick={closeMenu}>Контейнеры</a>
                <a href={getProperLink('/cars/manipulators')} onClick={closeMenu}>Манипуляторы</a>
                <a href={getProperLink('/cars/loader')} onClick={closeMenu}>Погрузчик</a>
              </div>
            )}
          </div>

          <a
            href={isNotHomePage ? (isCustomersSection ? "/customers#Portfolio" : "/#Portfolio") : "#Portfolio"}
            onClick={(e) => {
              handleAnchorClick(e, "#Portfolio");
              closeMenu();
            }}
          >
            Портфолио
          </a>
          <a
            href={isNotHomePage ? (isCustomersSection ? "/customers#workS" : "/#workS") : "#workS"}
            onClick={(e) => {
              handleAnchorClick(e, "#workS");
              closeMenu();
            }}
          >
            Этапы
          </a>
          <a
            href={isNotHomePage ? (isCustomersSection ? "/customers#BackToUs1" : "/#BackToUs1") : "#BackToUs1"}
            onClick={(e) => {
              handleAnchorClick(e, "#BackToUs1");
              closeMenu();
            }}
          >
            Преимущества
          </a>
          <a
            href={isNotHomePage ? (isCustomersSection ? "/customers#Footer1" : "/#Footer1") : "#Footer1"}
            onClick={(e) => {
              handleAnchorClick(e, "#Footer1");
              closeMenu();
            }}
          >
            Контакты
          </a>
        </nav>

        <div className="headerLayout">
          <div className="menuIcon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes/> : <FaBars/>}
          </div>

          <div className="telContainer">
            <a
              href={isCustomersSection ? "tel:+375 (33) 990-60-77" : "tel:+375 (29) 346-90-36"}
              className="phone-number"
            >
              {isCustomersSection ? "+375 (33) 990-60-77" : "+375 (29) 346-90-36"}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;