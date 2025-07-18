import React from "react";
import {
  FaTools, FaSeedling, FaHammer, FaWrench, FaTree,
  FaTractor, FaSnowflake, FaBoxes, FaTag, FaBarcode
} from "react-icons/fa";

const serviceData2 = {
  furniture: {
    title: "Сборка/разборка мебели",
    description: "Профессиональная сборка и разборка мебели любой сложности.",
    icon: <FaTools />,
    content: [
      "Наша команда специализируется на профессиональной сборке и разборке мебели любой сложности.",
      "Мы работаем со всеми типами мебели: от простых шкафов и столов до сложных модульных систем.",
      "Наши специалисты имеют многолетний опыт и все необходимые инструменты для качественного выполнения работы.",
      "Мы гарантируем аккуратное обращение с вашей мебелью и сохранность всех деталей при разборке."
    ],
    benefits: [
      { icon: <FaTools />, text: "Профессиональный инструмент" },
      { icon: <FaWrench />, text: "Опытные специалисты" },
      { icon: <FaHammer />, text: "Быстрая и качественная работа" },
      { icon: <FaBoxes />, text: "Работа с мебелью любой сложности" }
    ]
  },
  gardening: {
    title: "Земельные работы/прополка",
    description: "Профессиональные земельные работы и уход за садом.",
    icon: <FaSeedling />,
    content: [
      "Мы предлагаем полный спектр услуг по земельным работам и уходу за садом.",
      "Наши специалисты выполняют прополку, рыхление почвы, посадку растений и другие садовые работы.",
      "Мы используем профессиональный инвентарь и современные технологии для эффективного выполнения работ.",
      "Наша команда обеспечит здоровый рост ваших растений и ухоженный вид вашего сада."
    ],
    benefits: [
      { icon: <FaSeedling />, text: "Профессиональный уход за растениями" },
      { icon: <FaTools />, text: "Современный садовый инвентарь" },
      { icon: <FaTractor />, text: "Эффективные методы работы" },
      { icon: <FaTree />, text: "Опыт работы с различными типами почв" }
    ]
  },
  fencing: {
    title: "Установка и ремонт заборов",
    description: "Профессиональная установка и ремонт заборов любого типа.",
    icon: <FaHammer />,
    content: [
      "Мы предлагаем услуги по установке и ремонту заборов любого типа и сложности.",
      "Наши специалисты работают с различными материалами: дерево, металл, профнастил, сетка-рабица и другие.",
      "Мы обеспечиваем качественный монтаж с учетом особенностей грунта и ландшафта вашего участка.",
      "Наша команда также выполняет ремонт и обновление существующих заборов, продлевая срок их службы."
    ],
    benefits: [
      { icon: <FaHammer />, text: "Профессиональный монтаж" },
      { icon: <FaTools />, text: "Работа с различными материалами" },
      { icon: <FaWrench />, text: "Качественный ремонт" },
      { icon: <FaBoxes />, text: "Долговечность конструкций" }
    ]
  },
  "construction-work": {
    title: "Демонтажные/Монтажные работы",
    description: "Профессиональные демонтажные и монтажные работы любой сложности.",
    icon: <FaWrench />,
    content: [
      "Мы выполняем демонтажные и монтажные работы любой сложности для жилых и коммерческих объектов.",
      "Наши специалисты проводят демонтаж стен, перегородок, полов, потолков и других конструкций с соблюдением всех норм безопасности.",
      "Мы также осуществляем монтаж различных конструкций и элементов с высоким качеством исполнения.",
      "Наша команда обеспечивает чистоту на объекте и вывоз строительного мусора после завершения работ."
    ],
    benefits: [
      { icon: <FaWrench />, text: "Профессиональное оборудование" },
      { icon: <FaHammer />, text: "Соблюдение норм безопасности" },
      { icon: <FaTools />, text: "Опытные специалисты" },
      { icon: <FaBoxes />, text: "Вывоз строительного мусора" }
    ]
  },
  "tree-care": {
    title: "Спил, обрезка, пересадка деревьев и кустарников, покос травы",
    description: "Профессиональный уход за деревьями, кустарниками и газонами.",
    icon: <FaTree />,
    content: [
      "Мы предлагаем полный комплекс услуг по уходу за деревьями, кустарниками и газонами.",
      "Наши специалисты выполняют профессиональный спил деревьев любой сложности, включая работы в стесненных условиях.",
      "Мы проводим санитарную и формирующую обрезку деревьев и кустарников, а также их пересадку с сохранением корневой системы.",
      "Наша команда также осуществляет качественный покос травы на участках любой площади и сложности рельефа."
    ],
    benefits: [
      { icon: <FaTree />, text: "Профессиональный уход за растениями" },
      { icon: <FaTools />, text: "Специализированное оборудование" },
      { icon: <FaSeedling />, text: "Бережная пересадка" },
      { icon: <FaTractor />, text: "Качественный покос травы" }
    ]
  },
  plowing: {
    title: "Вспашка и культивация",
    description: "Профессиональная вспашка и культивация земельных участков.",
    icon: <FaTractor />,
    content: [
      "Мы предлагаем услуги по вспашке и культивации земельных участков любой площади.",
      "Наши специалисты используют современную технику и оборудование для качественной обработки почвы.",
      "Мы учитываем особенности вашего участка и типа почвы для достижения наилучшего результата.",
      "Наша команда также выполняет дополнительные работы по подготовке почвы к посадке растений."
    ],
    benefits: [
      { icon: <FaTractor />, text: "Современная техника" },
      { icon: <FaTools />, text: "Профессиональный подход" },
      { icon: <FaSeedling />, text: "Учет особенностей почвы" },
      { icon: <FaTree />, text: "Подготовка к посадке" }
    ]
  },
  "snow-removal": {
    title: "Уборка снега",
    description: "Профессиональная уборка снега с территорий любой площади.",
    icon: <FaSnowflake />,
    content: [
      "Мы предлагаем услуги по уборке снега с территорий жилых домов, коммерческих объектов и промышленных площадок.",
      "Наши специалисты используют как ручной инвентарь, так и специализированную технику для эффективной уборки снега.",
      "Мы обеспечиваем оперативный выезд на объект после снегопада для быстрого восстановления проходимости.",
      "Наша команда также выполняет работы по предотвращению образования наледи и сосулек."
    ],
    benefits: [
      { icon: <FaSnowflake />, text: "Оперативный выезд" },
      { icon: <FaTools />, text: "Профессиональное оборудование" },
      { icon: <FaTractor />, text: "Работа с территориями любой площади" },
      { icon: <FaWrench />, text: "Предотвращение образования наледи" }
    ]
  },
  picking: {
    title: "Комплектовщики",
    description: "Профессиональные услуги комплектовщиков для складов и производств.",
    icon: <FaBoxes />,
    content: [
      "Мы предлагаем услуги профессиональных комплектовщиков для складов, логистических центров и производственных предприятий.",
      "Наши специалисты быстро и точно комплектуют заказы в соответствии с требованиями клиента.",
      "Мы обеспечиваем высокую скорость обработки заказов при сохранении качества комплектации.",
      "Наша команда работает с различными системами учета и может адаптироваться к вашим бизнес-процессам."
    ],
    benefits: [
      { icon: <FaBoxes />, text: "Быстрая комплектация" },
      { icon: <FaBarcode />, text: "Работа с системами учета" },
      { icon: <FaTag />, text: "Высокая точность" },
      { icon: <FaTools />, text: "Адаптация к бизнес-процессам" }
    ]
  },
  stickering: {
    title: "Стикеровщики",
    description: "Профессиональные услуги по стикеровке товаров и продукции.",
    icon: <FaTag />,
    content: [
      "Мы предлагаем услуги профессиональных стикеровщиков для маркировки товаров и продукции.",
      "Наши специалисты быстро и аккуратно наносят стикеры, этикетки и ярлыки на различные типы товаров.",
      "Мы обеспечиваем высокую скорость работы при сохранении качества и точности нанесения.",
      "Наша команда работает с различными типами стикеров и этикеток, включая самоклеящиеся, термоэтикетки и другие."
    ],
    benefits: [
      { icon: <FaTag />, text: "Аккуратное нанесение" },
      { icon: <FaBoxes />, text: "Работа с различными типами товаров" },
      { icon: <FaBarcode />, text: "Высокая скорость" },
      { icon: <FaTools />, text: "Профессиональное оборудование" }
    ]
  },
  marking: {
    title: "Маркировщик",
    description: "Профессиональные услуги по маркировке продукции.",
    icon: <FaBarcode />,
    content: [
      "Мы предлагаем услуги профессиональных маркировщиков для нанесения маркировки на различные типы продукции.",
      "Наши специалисты выполняют маркировку в соответствии с требованиями законодательства и стандартами качества.",
      "Мы работаем с различными системами маркировки, включая штрих-коды, QR-коды, DataMatrix и другие.",
      "Наша команда обеспечивает высокую точность и читаемость маркировки, что важно для дальнейшего учета и отслеживания продукции."
    ],
    benefits: [
      { icon: <FaBarcode />, text: "Соответствие требованиям" },
      { icon: <FaTag />, text: "Различные типы маркировки" },
      { icon: <FaBoxes />, text: "Работа с разной продукцией" },
      { icon: <FaTools />, text: "Профессиональное оборудование" }
    ]
  }
};

export default serviceData2;