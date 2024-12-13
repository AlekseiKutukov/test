import productBD from './../files/product';
import Cards from '../components/Cards';
import { Link, useLocation } from 'react-router';

const Category = ({ categoryName }) => {
  const categoryFilter = productBD.filter((e) => e.category === categoryName);
  // console.log(categoryFilter);
  // console.log(categoryName);
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <>
      <h1>{categoryName}</h1>
      <div className="all_product">
        {categoryFilter.map((product) => (
          <Link to={`../${location.pathname}/${product.slug}`}>
            <Cards
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.img}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
