import img1 from "../assets/assets/car/img1.png";
import img2 from "../assets/assets/car/img2.png";
import img3 from "../assets/assets/car/img3.png";
import img4 from "../assets/assets/car/img11.png";
import img5 from "../assets/assets/car/img5.png";
import img6 from "../assets/assets/car/img6.png";
import img7 from "../assets/assets/car/img7.png";
import img8 from "../assets/assets/car/img8.png";
import img9 from "../assets/assets/car/img9.png";

const car1 = {
  id: "microbus",
  name: "Микроавтобусы",
  price: "Цена: от 35 BYN/час",
  first_text: "Вместимость: до 12 м³",
  second_text: "Грузоподьемность: до 1.5 тонн",
  img: img5,
  description: "Наши микроавтобусы идеально подходят для перевозки небольших грузов и мебели. Компактные и маневренные, они легко проезжают по узким улицам города.",
  features: [
    "Вместимость до 12 м³",
    "Грузоподъемность до 1.5 тонн",
    "Экономичный расход топлива",
    "Возможность парковки в ограниченных пространствах"
  ],
  advantages: [
    "Быстрая доставка по городу",
    "Низкая стоимость аренды",
    "Не требуется специальная категория прав"
  ],
  gallery: [img5] // Здесь можно добавить больше изображений
};

const car2 = {
  id: "furniture-van",
  name: "Мебельные фургоны",
  price: "Цена: от 45 BYN/час",
  first_text: "Вместимость:  до 22 м³",
  second_text: "Грузоподьемность: до 2.5 тонн",
  img: img6,
  description: "Мебельные фургоны специально оборудованы для безопасной транспортировки мебели и крупногабаритных предметов. Просторный кузов и специальные крепления обеспечивают сохранность груза.",
  features: [
    "Вместимость до 22 м³",
    "Грузоподъемность до 2.5 тонн",
    "Специальные крепления для мебели",
    "Гидроборт для удобной погрузки/разгрузки"
  ],
  advantages: [
    "Защита от погодных условий",
    "Возможность перевозки крупногабаритной мебели",
    "Опытные водители с навыками погрузки мебели"
  ],
  gallery: [img6]
};

const car3 = {
  id: "five-ton-truck",
  name: "Пятитонник",
  price: "Цена: от 65 BYN/час ",
  first_text: "Грузоподъёмность: до 5 тонн",
  second_text: "Вместимость: до 30 м³",
  img: img4,
};

const car4 = {
  id: "pyramid-truck",
  name: "Машина с пирамидой",
  price: "Цена: Договорная",
  first_text: "Размеры: до 4 м.",
  second_text: "Тип кузова: открытый",
  img: img1,
};

const car5 = {
  id: "maz",
  name: "МАЗ",
  price: "Цена: Договорная",
  first_text: "Тип кузова: открытый/закрытый",
  second_text: "Грузоподъёмность: от 5 до 30 тонн",
  img: img2,
};

const car6 = {
  id: "mini-tractor",
  name: "Минитрактор",
  price: "Цена: Договорная",
  first_text: "Насадки: почвофреза + плуг",
  second_text: "Габариты: 2.5 м x 1.0 м x 2.0 м",
  img: img3,
};

const car7 = {
  id: "containers",
  name: "Контейнеры",
  price: "Цена: от 380 BYN",
  first_text: "Вместимость: до 24 м³",
  min_order: "Cрок аренды - 7 суток",
  second_text: "Грузоподьемность: до 15 тонн",
  img: img8,
};

const car8 = {
  id: "manipulators",
  name: "Манипуляторы",
  price: "Цена: Договорная",
  first_text: "Размеры: до 9 м.",
  second_text: "Грузоподьемность: до 15 тонн",
  img: img7,
  min_order: "Минимальный заказ: 4 часа",
};

const car9 = {
  id: "loader",
  name: "Погрузчик",
  price: "Цена: Договорная",
  first_text: "Высота подъема: от 3 до 6.5м",
  second_text: "Грузоподъемность: до 7 тонн",
  img: img9,
  description: "Наши погрузчики помогут быстро и эффективно выполнить погрузочно-разгрузочные работы любой сложности. Мы предлагаем различные модели для разных типов задач.",
  features: [
    "Высота подъема от 3 до 6.5м",
    "Грузоподъемность до 7 тонн",
    "Различные типы вил и насадок",
    "Возможность работы на неровных поверхностях"
  ],
  advantages: [
    "Экономия времени при погрузке/разгрузке",
    "Возможность аренды с оператором",
    "Работа в ограниченных пространствах"
  ],
  gallery: [img9]
};

export const carObj = {
  car1, car2, car3, car4, car5, car6, car7, car8, car9
}