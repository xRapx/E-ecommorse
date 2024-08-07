import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { deleteItem, drecreaseQuantity, increaseQuantity } from "../../redux/reducer/productReducer";

const ItemCard = ({ item }) => {
  console.log(item)
	// Call Dispath from react-redux
  const dispatch = useDispatch();


  return (
    <div className="w-full grid grid-cols-5 mb-4 border p-4 ">
      <div className="flex col-span-5 md:col-span-2 items-center gap-4 ml-4"> 
        <img className="w-32 h-32 duration-300 hover:scale-105 object-contain" src={item.image} alt="productImage" />
        <p className="font-titleFont font-semibold dark:text-white">{item.title}</p>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 items-center text-lg font-semibold dark:text-white">
          {`$${item.price}`}
        </div>
        <div className="w-1/3 flex items-center gap-6 text-lg">
          <span
            onClick={() => dispatch(drecreaseQuantity({ _id: item._id }))}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            -
          </span>
          <p className="dark:text-white">{item.quantity}</p>
          <span
            onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            +
          </span>
        </div>
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg dark:text-white">
          <p>${item.quantity * item.price}</p>
        </div>
        <ImCross
          onClick={() => dispatch(deleteItem(item._id))}
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer dark:text-white"
        />
      </div>
    </div>
  );
};

export default ItemCard;
