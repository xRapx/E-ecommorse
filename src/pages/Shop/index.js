import React, { useState } from "react";
import Breadcrumbs from "../../component/DefaultLayout/containerShop/Breadcrumbs";
import ShopSideNav from "../../component/DefaultLayout/containerShop/ShowProducts/ShopSideNav";
import ProductBanner from "../../component/DefaultLayout/containerShop/ShowProducts/ProductBanner";
import Pagination from "../../component/DefaultLayout/containerShop/ShowProducts/Pagination";


const Shop = () => {
  

  const [itemsPerPage, setItemsPerPage] = useState(48);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner}/>
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Shop;
