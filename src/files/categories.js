import { IoFastFoodOutline, IoCarSportSharp } from 'react-icons/io5';
import { FcPhoneAndroid, FcMusic } from 'react-icons/fc';
import { GiClothes } from 'react-icons/gi';

const categories = [
  {
    id: 1,
    category: 'Музыкальные инструменты',
    slug: 'musical-instruments',
    image: <FcMusic />,
  },
  {
    id: 2,
    category: 'Телефоны',
    slug: 'telefony',
    image: <FcPhoneAndroid />,
  },
  {
    id: 3,
    category: 'Автомобили',
    slug: 'avtomobili',
    image: <IoCarSportSharp />,
  },
  {
    id: 4,
    category: 'Одежда',
    slug: 'odegda',
    image: <GiClothes />,
  },
  {
    id: 5,
    category: 'Продукты',
    slug: 'producti',
    image: <IoFastFoodOutline />,
  },
];

export default categories;
