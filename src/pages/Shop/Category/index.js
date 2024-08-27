import React from "react";
import Heading from "../../../component/DefaultLayout/Heading/Heading";
// import { data } from "../../../contans/db";
// import Product from "../../../component/DefaultLayout/Products/Product";
import Layout from "./Layout";


const Category = () => {
  // const [saleProducts, setSaleProducts] = useState([]);

  // useEffect(() => {
  //   const timeSale = setInterval(() => {
  //     const newSaleProducts = data.filter(item => item.sale === true);
  //     const limitedSaleProducts = newSaleProducts.slice(0, 4);
  //     setSaleProducts(limitedSaleProducts);
  //   }, 10000);

  //   return () => clearInterval(timeSale);
  // }, []);

  return (
    <div className="w-full pb-20">
      <Heading title="Category" colorTitle="Product"/>
      <div className="w-full mt-4">
          <Layout/>
      </div>
    </div>
  );
};

export default Category;
