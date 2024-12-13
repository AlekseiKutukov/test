const Cards = ({ title, img, price }) => {
  return (
    <>
      <div className="bg-white p-5 my-4 m-[10px]">
        <img className="max-w-[240px] w-full" src={img} alt={title}></img>
        <div className="p-2">{title}</div>
        <div className="pl-10 text-[#515151]">{price}</div>
      </div>
    </>
  );
};

export default Cards;
