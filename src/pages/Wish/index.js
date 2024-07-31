import { useDispatch, useSelector } from "react-redux";
import { resetWhish, updateWhish } from "../../redux/reducer/whishReducer";
import { addToCart } from "../../redux/reducer/productReducer";
import Breadcrumbs from "../../component/DefaultLayout/containerShop/Breadcrumbs";
// import { useLocation } from "react-router-dom"

export default function Whish() {
  const whish = useSelector((state) => state.whish.whish);
  const dispatch = useDispatch();

  // const [whishList , setWishList] = useState(whish)
  
  function handleSubmit(item) {
    dispatch(addToCart(item))
    dispatch(updateWhish(item))
  }

  return (
    <>
      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">
      <Breadcrumbs title="Whish"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whish.map((item) => {
            return (
              <div
                key={item._id}
                className="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden"
              >
                <div className="p-6">
                  <div className="">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-t-lg  w-full h-full object-contain duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="text-center bg-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <h4 className="text-lg text-gray-800 font-bold mt-6">
                    ${item.price}{" "}
                    <strike className="text-gray-400 ml-2 font-medium">
                      ${item.new_price}
                    </strike>
                  </h4>

                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-blue-700 text-base text-white font-semibold rounded-xl"
                    onClick={() => handleSubmit(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                        data-original="#000000"
                      ></path>
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6">
            <button
              onClick={() => dispatch(resetWhish())}
              className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
            >
              Reset Whish
            </button>
        </div>
      </div>
    </>
  );
}
