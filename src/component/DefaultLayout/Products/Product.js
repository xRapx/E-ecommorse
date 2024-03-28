/* eslint-disable no-unused-vars */
import {Fragment, useEffect, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { MdDiversity3, MdOutlineLabelImportant } from "react-icons/md";
import {BsSuitHeartFill} from "react-icons/bs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Badge from "./Badge"
import Image from "../CustomLayout/Image";
import { addToCart } from "../../../redux/reducer/productReducer";

function Product(props) {
  const arrangement = useSelector((state) => state.arrangement.arrangement)
  console.log(arrangement);

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
      name: props.productName,
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
    {arrangement ? (
      <div className="w-full relative group">
        <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
          <div onClick={handleProductDetails}>
            <Image className="w-full h-full" imgSrc={props.img} />
          </div>
          <div className="absolute top-6 left-8">
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
            {props.productName}
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
    )}   
    </Fragment>
	 );
}

export default Product;