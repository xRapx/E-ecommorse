import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../component/DefaultLayout/containerShop/Breadcrumbs";
import { useLocation } from "react-router-dom";
// import { FaDownload } from 'react-icons/fa';
import ProductInfo from "./ProductInfo";
import NewProducts from "../Home/NewProducts";
import BestSellers from "../Home/BestSeller";
// import CKEditorContext from './CKEditor';

// const tabs = [
// 	{
// 		id:" Fiche Technique",
// 		label:  "Fiche Technique"
// 	},
// 	{
// 		id: "Description",
// 		label: "Description",
// 		content:
// 		  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
// 	  },
// 	  {
// 		id: "Video",
// 		label: "Video",
// 		content: (
// 		  <iframe
// 			width="560"
// 			height="315"
// 			src=""
// 			title="YouTube Video"
// 			// frameBorder="0"
// 			allowFullScreen
// 		  ></iframe>
// 		),
// 	  },
//add more tabs as needed
// ]

const ProductDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    setProductInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location, productInfo.ficheTech]);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        {/************************ Breadcrumbs ********************/}
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title="" prevLocation={prevLocation} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full xl:col-span-2">
            <img
              className="w-full h-full "
              src={productInfo.img}
              alt={productInfo.img}
            />
          </div>

          <div className="h-full w-full md:col-span-2 xl:col-span-4 xl:px-4 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo} />
          </div>
        </div>
        <div className="max-w-container mx-auto px-4 mt-4">
            <NewProducts />
            <BestSellers />
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
