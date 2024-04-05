import { Link } from "react-router-dom";
import Image from "../../../component/DefaultLayout/CustomLayout/Image";
import ShopNow from "../../../component/Button/ShopNow";
// import { data } from "../../../contans/db";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="bg-[#f3f3f3] w-full md:w-2/3 lg:w-1/2 h-full flex flex-col justify-center items-center text-black">
        <div className="aspect-w-4 aspect-h-3 w-full mb-4">
          <Image
            className="h-full w-full object-cover"
            imgSrc={
              "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            }
          />
        </div>
        <div className="text-left h-140 md:h-200 lg:h-260 w-full mx-4 ">
          <div className="mx-8">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
              Sneakers sales
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              Up to{" "}
              <span className="text-4xl md:text-5xl lg:text-5xl font-bold">
                30%
              </span>{" "}
              sales for all Sneakers{" "}
            </p>
            <div className=" mb-8">
              <Link to="/shop">
                <ShopNow />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10 ">
        <div className="h-1/2 w-full dark:bg-white">         
           <div className="aspect-w-4 aspect-h-3 w-full mb-4 ">
              <Image
                className="h-full w-full object-cover"
                imgSrc={
                  "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg"
                }
              />
           </div>

          <div className="mx-8">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
            Sandals sales
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              Up to{" "}
              <span className="text-4xl md:text-5xl lg:text-5xl font-bold">
                15%
              </span>{" "}
              sales for all Sandals{" "}
            </p>
            <div className=" mb-8">
              <Link to="/shop">
                <ShopNow />
              </Link>
            </div>
          </div>

        </div>
        <div className="h-1/2 w-full dark:bg-white">
          <div className="aspect-w-4 aspect-h-3 w-full mb-4">
            <Image
              className="h-full w-full object-cover"
              imgSrc={
                "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg"
              }
            />
          </div>
          <div className="mx-8">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
            Heels sales
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              Up to{" "}
              <span className="text-4xl md:text-5xl lg:text-5xl font-bold">
                10%
              </span>{" "}
              sales for all Heels{" "}
            </p>
            <div className=" mb-8">
              <Link to="/shop">
                <ShopNow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
