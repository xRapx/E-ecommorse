import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Breadcrumbs from "../../component/DefaultLayout/containerShop/Breadcrumbs";
import ShopSideNav from "../../component/DefaultLayout/containerShop/ShowProducts/ShopSideNav";
import Pagination from "../../component/DefaultLayout/containerShop/ShowProducts/Pagination";



const Offer = () => {
  const [prevLocation] = useState("");
  const { category } = useParams();

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title={category} prevLocation={prevLocation} />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <Pagination />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Offer;
