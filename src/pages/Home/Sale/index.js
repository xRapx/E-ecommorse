import { Link } from "react-router-dom";
import Image from "../../../component/DefaultLayout/CustomLayout/Image";
import ShopNow from "../../../component/Button/ShopNow";
// import { data } from "../../../contans/db";
const IMAGE = {
  img1 : "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
  img2: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
  img3: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg"
}

const Sale = () => {
  return (
    <section className="px-3 py-5 bg-neutral-100 lg:py-10">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
              <p className="text-4xl font-bold md:text-7xl text-orange-600">25% OFF</p>
              <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
              <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
              <div className="mt-8">
                <Link to="/shop">
                  <ShopNow />
                </Link>
              </div>
          </div>
          <div className="order-1 lg:order-2">
              <Image className="h-80 w-80 object-contain scale-100 hover:scale-105 bg-transparent lg:w-[500px] lg:h-[500px]" imgSrc={IMAGE.img3} alt="  " />
          </div>
      </div>
  </section>
  );
};

export default Sale;
