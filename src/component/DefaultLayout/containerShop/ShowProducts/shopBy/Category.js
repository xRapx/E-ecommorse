/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from "react";
// import { FaPlus } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import NavTitle from "./NavTitile";
import { toggleCattegory } from "../../../../../redux/reducer/categoryReducer";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);

  const checkedCategorys = useSelector(
    (state) => state.categories.checkedCategorys
  );
  // console.log(checkedCategorys)
  const dispatch = useDispatch();

  const category = useMemo(() => [
    {
      _id: 9006,
      title: "Heels",
    },
    {
      _id: 9007,
      title: "Sandals",
    },
    {
      _id: 9008,
      title: "Flats",
    },
    {
      _id: 9009,
      title: "Sneakers",
    },
  ]
);

  const handleToggleCategory = (category) => {
    dispatch(toggleCattegory(category));
  };

  return (
    <div className="w-full">
      <NavTitle title="Shop by Category" icons={true} />
      <div>
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676] dark:text-white">
          {category.map((item) => (
            <li
              key={item._id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
            >
              <input
                type="checkbox"
                id={item._id}
                checked={checkedCategorys.some((b) =>  b._id === item._id)}
                onChange={() => handleToggleCategory(item)}
              />
              {item.title}
              {item.icons && (
                <span
                  onClick={() => setShowSubCatOne(!showSubCatOne)}
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                >
                  <ImPlus />
                </span>
              )}
            </li>
          ))}
          <li onClick={() => console.log(checkedCategorys)}>test</li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
