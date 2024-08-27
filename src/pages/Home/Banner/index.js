import React, { useState } from "react";
import { Link } from "react-router-dom";
// Thư viện slick để thay đổi cấu hình slider
import Slider from "react-slick";


import BannerTop from "../BannerTop";
import Image from "../../../component/DefaultLayout/CustomLayout/Image";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
  <div
    className="bg-white dark:bg-slate-900"
    style={{
      position: "relative", // Gray background color
      display: "flex",
      justifyContent: "center",
      alignItems: "center", // Center vertically
    }}
  >
    <div
      style={{
        maxWidth: "450px", // Adjust the maxWidth as needed
        marginLeft: "100px", // Add margin between text/button and image
      }}
    >
      <h2
      className=" dark:text-white"
        style={{
          marginBottom: "15px",
          fontSize: "2.5rem", // Adjust the font size as needed
          fontWeight: "700",
        }}
      >
        {text}
      </h2>
      <p
      className=" dark:text-white sm:hidden"
        style={{
          marginBottom: "25px",
          fontSize: "1.5rem", // Adjust the font size as needed
        }}
      >
        {Subtext}
      </p>
      <Link to={buttonLink}>
        <button className="elative py-2 px-8  text-white text-base font-bold  overflow-hidden bg-slate-900 dark:bg-white dark:text-slate-900 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 mr-4">
          {buttonText}
        </button>
      </Link>
    </div>
    <div style={{ marginLeft: "100px" }}>
      <Image imgSrc={imgSrc} className="rounded-t-lg p-8 w-full object-contain min-h-59 min-w-128"/>
    </div>
  </div>
);

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  
  const settings = {
    dots: true, //Xác định liệu có hiển thị các chấm (dots) để chỉ ra vị trí của slide hiện tại hay không.
    infinite: true,// Xác định liệu slideshow sẽ lặp vô hạn hay không.
    autoplay: true, //  Xác định liệu slideshow sẽ tự động chuyển slide hay không.
    slidesToShow: 1, // Số lượng slide sẽ được hiển thị cùng một lúc trên màn hình.
    slidesToScroll: 1, // Số lượng slide sẽ được cuộn qua mỗi lần chuyển đổi slide.
    adaptiveHeight: true, // Xác định liệu chiều cao của slideshow sẽ thay đổi tùy thuộc vào nội dung của slide hiện tại hay không.
    arrows: false, //  Xác định liệu hiển thị các mũi tên điều hướng để chuyển slide hay không.

    beforeChange: (prev, next) => { // xét vị trí dotActive state khi thay đổi sẻ luôn là state mới
      setDocActive(next);
    },

    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    
    customPaging: (i) => (
      <div 
        style={
          i === dotActive
            ? {
                width: "25px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
            }
            : {
                width: "25px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
            }
        }
      >
      </div>
    ),   
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
      text: "Enhance Your Printing Experience",
      Subtext:
        "Explore our premium printers and consumables for exceptional results",
      buttonLink: "/shop",
      buttonText: "Shop Now",
    },
    {
      imgSrc: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
      text: "Quality Printing Solutions",
      Subtext:
        "Discover our wide range of printers and consumables designed for professional printing needs.",
      buttonLink: "/about",
      buttonText: "About-us",
    },
    {
      imgSrc: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
      text: "Efficiency Redefined",
      Subtext:
        "Maximize productivity with our advanced printers and high-quality consumables. ",
      buttonLink: "/contact",
      buttonText: "Contact-us",
    },

    // Add more slides as needed
  ];
  return (
    <div className="w-full bg-white">
    {/* Start Hero */}
      <BannerTop/>
    {/* End Hero */}

    {/* Slider */}
      <div className="">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <CustomSlide key={index} {...slide} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
