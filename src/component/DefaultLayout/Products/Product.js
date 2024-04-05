/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-disable no-unused-vars */
import {Fragment, useEffect, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { MdDiversity3, MdOutlineLabelImportant } from "react-icons/md";
import {BsSuitHeartFill} from "react-icons/bs";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import Badge from "./Badge"
import Image from "../CustomLayout/Image";
import { addToCart } from "../../../redux/reducer/productReducer";
import { ProductContext } from "../../../context/Product.Context";

function Product(props) {
  //================================ Redux ==================================
  // const arrangement = useSelector((state) => state.arrangement.arrangement)
    //================================ Context ==================================
  const {arrangement} = ProductContext()
  // console.log(arrangement);

  const [wishList, setWishList] = useState([]);
	const dispatch = useDispatch();
	const _id = props.productName;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
	const productItem = props;

  const navigate = useNavigate()
	const handleProductDetails = () =>{
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
	}

	const handleWishList = () =>{
    toast.success("Product add to wish List");
    setWishList(wishList.push(props));
    console.log(wishList);
	}
//Check userToken from Redux
  const userToken = useSelector((state) => state.user.userToken);
  const checkUserToken = () => {
    if(!userToken){
      toast.error('Please sign up to add items to the cart');
      return;
    }
    const data = {
      _id: props._id,
      name: props.title,
      quantity: 1,
      image: props.img,
      badge: props.badge,
      price: props.price,
      colors: props.color,
    }

    dispatch(addToCart(data))
  }

	return (
    <Fragment>
    <div className="max-w-2xl mx-auto relative">   
      <div className="bg-white shadow-md rounded-lg max-w-md dark:bg-gray-800 dark:border-gray-700 ">
        <div onClick={handleProductDetails}>
            <Link to='/'>
                <img className="rounded-t-lg p-8 w-full min-h-59" src={props.img} alt="product" />
            </Link>
            <div className="absolute top-0 left-2">
                {props.badge && <Badge text="New" />}
            </div>
        </div>
          <div className="px-5 pb-5">
            <Link to="/">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{props.title}</h3>
            </Link>
            <div className="flex items-center mt-2.5 mb-5">
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900 dark:text-white">{props.price}</span>
              <span
                  onClick={handleWishList}
                  className="text-[#767676] hover:text-red-600 text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-stone-100 flex items-center justify-center gap-2 hover:cursor-pointer pb-1 duration-300"
                >
                  <span>
                    <BsSuitHeartFill />
                  </span>
                </span>
              <button onClick={checkUserToken}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                to cart
              </button>
            </div>
          </div>
      </div>
    </div>

    {/* 
      {arrangement ? (
        <div className="w-full relative group">
          <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
            <div onClick={handleProductDetails}>
              <Image className="w-full h-full" imgSrc={props.img} />
            </div>
            <div className="absolute top-0 left-2">
              {props.badge && <Badge text="New" />}
            </div>
            <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
              <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">        
                <li
                  onClick={checkUserToken}
                  className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                >
                  Add to Cart
                  <span>
                    <FaShoppingCart />
                  </span>
                </li>
                <li
                  onClick={handleProductDetails}
                  className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                >
                  View Details
                  <span className="text-lg">
                    <MdOutlineLabelImportant />
                  </span>
                </li>
                <li
                  onClick={handleWishList}
                  className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
                >
                  Add to Wish List
                  <span>
                    <BsSuitHeartFill />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-80 py-6 flex-col gap-1 border-[1px] bor">
            <div className="flex items-center justify-between font-titleFont">
              <h2 className="text-lg text-primeColor font-bold">
              {props.title}
              </h2>
              <p className="text-[#767676] text-[14px]">${props.price}</p>
            </div>
            <div>
              <p className="text-[#767676] text-[14px]">{props.color}</p>
            </div>
          </div>
        </div>
      ) : (
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <Image className="w-8 h-8 rounded-full" imgSrc={props.img} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $320
                </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <Image className="w-8 h-8 rounded-full" imgSrc={props.img} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $3467
                </div>
            </div>
          </li>
        </ul>
      )
    } 
    */} 
    </Fragment>
	 );
}

export default Product;