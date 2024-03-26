import React, { Fragment } from "react";
import { BiCaretDown } from "react-icons/bi";

const NavTitle = ({ title, icons }) => {
  return (
    <div className="flex items-center justify-between pb-5">
      {icons ? (
        <Fragment>
          <h3 className="font-bold lg:text-xl text-primeColor">{title}</h3>
          {icons && <BiCaretDown />}
        </Fragment>
      ) : (
        <Fragment>
          <h3 className="font-bold lg:text-xl text-primeColor">{title}</h3>
        </Fragment>
      )}
    </div>
  );
};

export default NavTitle;
