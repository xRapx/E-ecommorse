import React from "react";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import Heading from "../../../component/DefaultLayout/Heading/Heading";
import Product from "../../../component/DefaultLayout/Products/Product";
import { data } from "../../../contans/db";


const NewProducts = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Products" />
      <Slider {...settings}>     
        {data.map((item) =>(
        <div key={item._id} className="px-2">    
          <div  className="w-full">
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
      </Slider>
    </div>
  );
};

export default NewProducts;
