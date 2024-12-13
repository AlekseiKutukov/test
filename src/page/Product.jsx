import { useState } from 'react';

const Product = ({ id, title, img, price }) => {
  const [value, setValue] = useState(1);

  const numericPrice = parseFloat(price);
  const totalPrice = numericPrice * value;

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0) {
      setValue(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Здесь вы можете обработать добавление товара в корзину
    const productToAdd = {
      id,
      title,
      img,
      price,
      quantity: value,
      totalPrice,
    };
    console.log('Добавлено в корзину:', productToAdd);
    alert(`${title} добавлен в корзину!`);
  };

  return (
    <div className="text-center">
      <h1>{title}</h1>
      <img className="mx-auto" src={img} alt={title} />
      <div className="max-w-[500px] mx-auto text-left border border-[#aaa] rounded-[2px] shadow-[0_0_5px_#535353] mt-[30px] p-[20px]">
        Тут моглы бы быть описание, но его нет. Тут моглы бы быть описание, но
        его нет. Тут моглы бы быть описание, но его нет. Тут моглы бы быть
        описание, но его нет.
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="p-[30px]">
          <p>
            В наличии:
            <br /> 10 ед.
          </p>
          <p>
            Количество:
            <br />
            <input
              className="w-[60px]"
              type="number"
              value={value}
              onChange={handleChange}
              min="1"
            />
          </p>
        </div>
        <div className="p-[30px]">
          <p>
            Цена: <br />
            {price}
          </p>
          <p>
            Итоговая цена: <br />
            {totalPrice}
          </p>
        </div>
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleAddToCart}
      >
        ДОБАВИТЬ В КОРЗИНУ
      </button>
    </div>
  );
};

export default Product;
