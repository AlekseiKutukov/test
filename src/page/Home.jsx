import productBD from './../files/product';
import Cards from '../components/Cards';
import { Link } from 'react-router';
import categories from '../files/categories';

const Home = () => {
  // const productFilter = productBD.filter(
  //   (e) => e.category === 'musical_instruments'
  // );

  // console.log(productBD);
  return (
    <>
      <h1>Все товары</h1>
      <div className="all_product">
        {productBD.map((product) => {
          // Находим соответствующую категорию в массиве categories
          const category = categories.find(
            (cat) => cat.category === product.category
          );

          if (category) {
            return (
              <Link to={`/${category.slug}/${product.slug}`} key={product.id}>
                <Cards
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  img={product.img}
                  price={product.price}
                />
              </Link>
            );
          }
          return null; // Если категория не найдена
        })}
      </div>
    </>
  );
};

export default Home;
