import React, { useEffect, useState } from "react";
import Heading from "../../../component/DefaultLayout/Heading/Heading";
import { data } from "../../../contans/db";
import Product from "../../../component/DefaultLayout/Products/Product";


const BestSellers = () => {
  const [saleProducts, setSaleProducts] = useState([]);

  useEffect(() => {
    const timeSale = setInterval(() => {
      const newSaleProducts = data.filter(item => item.sale === true);
      const limitedSaleProducts = newSaleProducts.slice(0, 4);
      setSaleProducts(limitedSaleProducts);
    }, 10000);

    return () => clearInterval(timeSale);
  }, []);

  return (
    <div className="w-full pb-20">
      <Heading heading="Best sellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
      {saleProducts.map((item) =>(
        <div className="px-2">    
          <div key={item._id} className="w-full">
            <Product
              _id={item._id}
              img={item.img}
              title={item.title}
              price={item.price}
              color={item.color}
              badge={item.badge}
              des={item.des}
              pdf={item.pdf}
              ficheTech={item.ficheTech}
            />
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
