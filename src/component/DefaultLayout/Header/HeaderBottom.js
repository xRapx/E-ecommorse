/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import {HiOutlineMenuAlt4} from "react-icons/hi";
import {FaSearch ,FaUser,FaCaretDown ,FaShoppingCart} from "react-icons/fa"; 
import {BsSuitHeartFill}  from "react-icons/bs";
import {motion} from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import {cateloryItems} from "../../../contans"
import FlexHeader from "../CustomLayout";
import { useSelector } from "react-redux";

function HeaderBottom() {

// Truy cập vào trạng thái trong store của redux để lấy dữ liệu hoặc filter dữ liệu
	const products = useSelector((state) => state.EcommorseReducer.products);

	const [show, setShow] = useState(false)
	const [showUser, setShowUser] = useState(false)
	

	const divRef = useRef()
	const navigate= useNavigate()

	const [searchValue,setSearchValue] = useState('')
	const [filterProducts,SetFilterProducts] = useState([]) 
	const [showSearchBar, setShowSearchBar] = useState(false)

	function handleSearch (e) {
		setSearchValue(e.target.value)
	}

	useEffect(() =>{
		const dataFilter = cateloryItems.filter((item) =>
		    item.productName.toLowerCase().includes(searchValue.toLowerCase()))
			SetFilterProducts(dataFilter)
	},[searchValue])


	return ( 
		<div className='w-full bg-[#F5F5F3] relative'>
			<div className="max-w-container mx-auto">
				<FlexHeader className='flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-4 h-full lg:h-24'>
{/*============================ Show Menu Catelory ======================*/}					
					<div 
						onClick={() => setShow(!show)}
						ref={divRef}
						className="flex h-14 cursor-pointer items-center gap-2 text-primeColor"
					>
					<HiOutlineMenuAlt4 className='w-5 h-5'/>
					<p className='text-[14px] font-normal'>Shop by Category</p>
{/*=================== Show Menu Catelory===================*/}
					{show && (
						<motion.ul
							initial={{y:30 ,opacity:0}}
							animate={{y:0 ,opacity:1}}
							transition={{duration:0.5}}
							className='absolute top-32 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6'
						>
							<Link to={"/"}>
								<li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
									Category 1
								</li>
							</Link>
							<Link to={"/"}>
								<li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
									Category 2
								</li>
							</Link>
							<Link to={"/"}>
								<li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
									Category 3
								</li>
							</Link>
						</motion.ul>
					)}
					</div>
{/*=================== Input Search Catelory===================*/}
					<div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
						<input
						className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
						type="text"
						onChange={handleSearch}
						value={searchValue}
						placeholder="Search your products here"
						/>
						<FaSearch className="w-5 h-5" />
						{searchValue && 
							filterProducts.map((item) =>(
								<div 
									onClick={() =>
										navigate(`/product/${item.productName.toLowerCase()
											.split(" ")
											.join("")}` , {state:{item:item}}) & setShowSearchBar(true) &
											setSearchValue("") 
									}
									key={item._id}
                      				className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
								>
{/*============================Show SearBar ======================*/}
									<img className="w-24" src={item.img} alt="products" />
									<div className="flex flex-col gap-1">
									<p className="font-semibold text-lg">
									  {item.productName}
									</p>
									<p className="text-xs">
									  {item.des.length > 100
										? `${item.des.slice(0, 100)}...`
										: item.des}
									</p>
									<p className="text-sm">
									  Price:{" "}
									  <span className="text-primeColor font-semibold">
										${item.price}
									  </span>
									</p>
								  	</div>								
								</div>
							))}
					</div>
{/*============================ User Show & Cart ======================*/}	
					<div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
						<div onClick={() => setShowUser(!showUser)} className="flex">
							<FaUser />
							<FaCaretDown />
				  		</div>
						{showUser && (
							<motion.ul
                                initial={{y:30,opacity:0}}
                                animate={{y:0,opacity:1}}
                                transition={{duration:0.5}}
                                className='absolute top-6 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6'
                            > 
								<Link to="/signin">
									<li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
									Login
									</li>
								</Link>
								<Link onClick={() => setShowUser(false)} to="/signup">
									<li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
									Sign Up
									</li>
								</Link>
									<li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
										Profile
									</li>
							</motion.ul>
						)}
						<Link to="/cart">
							<div className="relative">
								<FaShoppingCart />
								<span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
							
							 	{products.length > 0 ? products.length : 0}
							
								</span>
							</div>
						</Link>
						<BsSuitHeartFill />
					</div>
				</FlexHeader>
			</div>
		</div>

	 );
}

export default HeaderBottom;