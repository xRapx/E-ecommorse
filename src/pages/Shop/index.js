import React, { useState } from "react";
import Breadcrumbs from "../../component/DefaultLayout/containerShop/Breadcrumbs";
import ShopSideNav from "../../component/DefaultLayout/containerShop/ShowProducts/ShopSideNav";
import ProductBanner from "../../component/DefaultLayout/containerShop/ShowProducts/ProductBanner";
import Pagination from "../../component/DefaultLayout/containerShop/ShowProducts/Pagination";
import Category from "./Category";


const Shop = () => {

  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [classify, setClassify] = useState("");

  // console.log(itemsPerPage)
  // console.log(classify)
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };
  const classifyFromBanner = (classify) => {
    setClassify(classify);
  };


  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      <Category/>
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} classsifyPageFromBanner={classifyFromBanner}/>
          <Pagination itemsPerPage={itemsPerPage} classify={classify} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Shop;
