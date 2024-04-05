import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import NavTitle from "./NavTitile";
import { toggleCompany} from "../../../../../redux/reducer/companyReducer";

const Company = () => {
  const [showCompany, setShowCompany] = useState(true);
  const checkedCompany = useSelector(
    (state) => state.company.checkedCompany
  );
  const dispatch = useDispatch();

  const company = [
    {
      _id: 900,
      title: "Nike",
    },
    {
      _id: 901,
      title: "Adidas",
    },
    {
      _id: 902,
      title: "Puma",
    },

    {
      _id: 903,
      title: "Vans",
    },
  ];

  const handleToggleCompany = (company) => {
    dispatch(toggleCompany(company));
  };

  return (
    <div>
      <div
        onClick={() => setShowCompany(!showCompany)}
        className="cursor-pointer"
      >
        <NavTitle title="Shop by Company" icons={true} />
      </div>
      {showCompany && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676] dark:text-white">
            {company.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
              >
                <input
                  type="checkbox"
                  id={item._id}
                  checked={checkedCompany.some((b) => b._id === item._id)}
                  onChange={() => handleToggleCompany(item)}
                />
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Company;
