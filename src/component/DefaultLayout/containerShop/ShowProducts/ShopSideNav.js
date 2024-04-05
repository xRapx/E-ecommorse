import React from "react";
import Company from "./shopBy/Company";
import Category from "./shopBy/Category";
import Price from "./shopBy/Price";

const ShopSideNav = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Category icons={false} />
      <Company />
      <Price />
    </div>
  );
};

export default ShopSideNav;
