/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */

import React,{ Fragment, useEffect, useRef, useState } from "react";
import {HiOutlineMenuAlt4} from "react-icons/hi";
import {FaSearch ,FaUser,FaCaretDown ,FaShoppingCart} from "react-icons/fa"; 
import {BsSuitHeartFill}  from "react-icons/bs";
import {motion} from "framer-motion";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

import FlexHeader from "../CustomLayout/FlexHeader";
// import { cateloryItems } from "../../../contans";
import {data} from "../../../contans/db"
import { logout } from "../../../redux/reducer/userReducer";

function HeaderBottom() {
	const dispatch = useDispatch()

// Truy cập vào trạng thái trong store của redux để lấy dữ liệu hoặc filter dữ liệu
	const products = useSelector((state) => state.products.product);

	const [show, setShow] = useState(false)

	const [showUser, setShowUser] = useState(false)
	
	const [user, setUser] = useState(true);

	const navigate = useNavigate();
	
	const ref = useRef();

	useEffect(() => {
		const handleClick = (e) => {
			if (ref.current && ref.current.contains(e.target)) {
			  setShow(true);			  		 		  	  		 		  
			} else {
			  setShow(false);			  
			}		
		};	
		  	document.body.addEventListener("click", handleClick);
		
		  // Hãy nhớ loại bỏ sự kiện khi component unmount
		return () => {
			document.body.removeEventListener("click", handleClick);
		};
	}, [ show, ref ]);
 
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredProducts, setFilteredProducts] = useState([]);
	// eslint-disable-next-line
	const [showSearchBar, setShowSearchBar] = useState(false);
  
	const handleSearch = (e) => {
	  setSearchQuery(e.target.value);
	};

	useEffect(() =>{
		const userToken = localStorage.getItem('userToken')
		if(!userToken){
			setUser(true)
		}else{
			setUser(false)
		}	
	},[])

	const handleLogout = () => {
		dispatch(logout());
		window.location.href = "/"; // Chuyển hướng người dùng về trang chủ sau khi đăng xuất
	};
  
	useEffect(() => {
	  const filtered = data.filter((item) =>
		item.title.toLowerCase().includes(searchQuery.toLowerCase())
	  );
	  setFilteredProducts(filtered);
	}, [searchQuery]);
  
	return (
	  <div className="w-full bg-[#F5F5F3] dark:bg-slate-900 relative">
		<div className="max-w-container mx-auto">
		  <FlexHeader className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
{/**==================Sub Menu ============================= */}
<div></div>
			{/* <div
			  onClick={() => setShow(!show)}
			  ref={ref}
			  className="flex h-14 cursor-pointer items-center gap-2 text-primeColor dark:text-white"
			>
			  <HiOutlineMenuAlt4 className="w-5 h-5" />
			  <p className="text-[14px] font-normal ">Shop by Category</p>
  
			  {show && (
				<motion.ul
				  initial={{ y: 30, opacity: 0 }}
				  animate={{ y: 0, opacity: 1 }}
				  transition={{ duration: 0.5 }}
				  className="absolute top-16 z-50 bg-primeColor dark:bg-white w-auto text-[#767676] dark:text-white dark:text-white h-auto p-4 pb-6"
				>
				  <Link to={"/shop"}>
					<li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white  hover:text-white dark:hover:text-black duration-300 cursor-pointer">
						Sneakers
					</li>
				  </Link>
  
				  <Link to={"/shop"}>
					<li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white dark:hover:text-black duration-300 cursor-pointer">
						Flats
					</li>
				  </Link>
				  <Link to={"/shop"}>
					<li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white dark:hover:text-black duration-300 cursor-pointer">
						Sandals
					</li>
				  </Link>
				  <Link to={"/shop"}>
					<li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white dark:hover:text-black duration-300 cursor-pointer">
						Heels
					</li>
				  </Link>
				</motion.ul>
			  )}
			</div> */}
{/**======================== Search Query ======================================== */}	
			<div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
			  <input
				className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
				type="text"
				onChange={handleSearch}
				value={searchQuery}
				placeholder="Search your products here"
			  />
			  <FaSearch className="w-5 h-5" />
			  {searchQuery?.length && (
				<div
				  className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
				>
				  {searchQuery?.length &&
					filteredProducts?.map((item) => (
					  <div
						onClick={() =>
						  navigate(
							`/product/${item.title
							  .toLowerCase()
							  .split(" ")
							  .join("")}`,
							{
							  state: {
								item: item,
							  },
							}
						  ) &
						  setShowSearchBar(true) &
						  setSearchQuery("")
						}
						key={item._id}
						className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
					  >
						<img className="w-24" src={item.img} alt="productImg" />
						<div className="flex flex-col gap-1">
						  <p className="font-semibold text-lg">
							{item.title}
						  </p>
						  <p className="text-xs">
							{item.category}
							{/* {item.des.length > 100
							  ? `${item.des.slice(0, 100)}...`
							  : item.des} */}
						  </p>
						  <p className="text-sm">
							Price:{" "}
							<span className="text-primeColor font-semibold">
							  {item.price}
							</span>
						  </p>
						</div>
					  </div>
					))}
				</div>
			  )}
			</div>
{/*===========================set login/logout================= */}
			{user ? ( //true
				<div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
					<div className="flex" >						
						<Link to="/signin" >
							<button className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 mr-4">
								Login
							</button>		
						</Link>
						<Link  to="/signup">
							<button className="elative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 mr-4">
								SignUp
							</button>	
						</Link>  
						
					</div>		  	
				</div>				
			) 
			: 
			(
			<div 		
			className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative"
			>
				  <div className="flex" 
				  	href={ref}
					onClick={() => setShowUser(!showUser)}>
					<FaUser className="dark:text-white" />
					<FaCaretDown  className="dark:text-white"/>
				  </div>
				  { showUser && (
					<motion.ul
					  initial={{ y: 30, opacity: 0 }}                    
					  animate={{ y: 0, opacity: 1 }}
					  transition={{ duration: 0.5 }}
					  className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"				  
					>
					{!user && (
						  <Fragment>
							<li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
							  Details
							</li>
							<Link  to="/user">
								<li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
								Profile
								</li>
							</Link>													
							<li 
								onClick={handleLogout }
								className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
							  Log out
							</li>					
						  </Fragment>
						)}
					 </motion.ul>
				  )}
				
					 <Link to="/cart">
					 <div className="relative">
					   <FaShoppingCart className="dark:text-white"/>
					   <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
						 {products.length > 0 ? products.length : 0}
					   </span>
					 </div>
				   </Link>
				   <BsSuitHeartFill className="dark:text-white"/>	
				
			</div>
			)}
		  </FlexHeader>
		</div>
	  </div>
	);
  };
  
  export default HeaderBottom;