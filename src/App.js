import Home from './page/Home';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { IoSearchCircleOutline } from 'react-icons/io5';
import Category from './page/Category';
import product from './files/product';
import categories from './files/categories';
import Product from './page/Product';
import { useParams } from 'react-router';

// const CategoryPage = ({ categoryName }) => {
//   return <div>Это страница категории: {categoryName}</div>;
// };

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // console.log(product);
  // Получаем уникальные категории
  const uniqueCategories = [...new Set(product.map((e) => e.category))];

  function ProductWrapper() {
    const { productSlug } = useParams(); // Получаем slug из URL

    // Ищем продукт по slug
    const selectedProduct = product.find((item) => item.slug === productSlug);

    if (!selectedProduct) {
      return <div>Продукт не найден</div>; // Обработка случая, когда продукт не найден
    }

    return <Product {...selectedProduct} />; // Передаем все поля продукта как пропсы
  }

  return (
    <BrowserRouter>
      <div className="mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          {categories.map((category) => (
            <Route
              key={category.id}
              path={`/${category.slug}`}
              element={<Category categoryName={category.category} />}
            />
          ))}

          <Route
            path="/:categorySlug/:productSlug"
            element={<ProductWrapper />}
          />
        </Routes>

        {/* Кнопка меню */}
        <button className="floating-button" onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Панель меню */}
        <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="p-[30px] bg-[#0c957b]">
            <div className="pb-[15px] font-bold text-[20px] flex justify-between">
              <div className="menu-title-kategor">Категории</div>
              <div className="menu-title-close">
                <IoMdCloseCircleOutline
                  className="float-right inline align-middle w-[40px] h-[30px] align-middle cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>
            </div>
            <div className="menu-search">
              <input
                type="text"
                className="rounded-[4px] w-[170px] p-[5px]"
                placeholder="Поиск товаров..."
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* <button className="search-button" onClick={handleSearch}> */}

              <IoSearchCircleOutline className="float-right inline align-middle w-[40px] h-[30px] align-middle cursor-pointer" />
            </div>
          </div>

          <ul>
            <li>
              <Link to={`/`}>{'Главная'}</Link>
            </li>
            {uniqueCategories.map((categoryName) => {
              const category = categories.find(
                (cat) => cat.category === categoryName
              );

              if (category) {
                return (
                  <li key={category.id}>
                    {category.image}
                    <Link to={`/${category.slug}`}>{category.category}</Link>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
