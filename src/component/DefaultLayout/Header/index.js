/* eslint-disable no-unused-vars */
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion'
import {HiMenuAlt2} from "react-icons/hi"
import { MdClose, MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import logo1 from '../../../assets/images/coffee_logo.png'
import Image from '../../DefaultLayout/CustomLayout/Image'
import FlexHeader from "../CustomLayout/FlexHeader";
import {navBarList} from "../../../contans"
// import { FaRegLightbulb } from "react-icons/fa";


function Header() {
	const [showMenu, setShowMenu] = useState(true);
	const [sidenav, setSidenav] = useState(false);
	const [category, setCategory] = useState(false);
	const [brand, setBrand] = useState(false);
// =======================DarkMode==============
	const [dark ,setDark] = useState(true)
	const userTheme = localStorage.getItem("theme");

	const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches


	// const handleMode = () => {
	// 	if(userTheme === "dark" || (!userTheme && systemTheme)){
	// 		document.documentElement.classList.add("dark");
	// 		return				
	// 	}
	// 		document.documentElement.classList.add("light");	
	// }

	const themeSwitch = () => {
		if(document.documentElement.classList.contains("dark")){			
			document.documentElement.classList.remove("dark");
			setDark(true)		
            localStorage.setItem("theme" ,"light");
			// handleMode()
				
			return
		}
		document.documentElement.classList.add("dark");
		document.documentElement.classList.remove("light");
		setDark(false)		
		localStorage.setItem("theme" ,"dark");
		// handleMode()	
		
	}

	const location = useLocation();

	useEffect(() => {
		let ResponsiveMenu = () => {
		  if (window.innerWidth < 667) {
			setShowMenu(false);
		  } else {
			setShowMenu(true);
		  }
		};
		ResponsiveMenu();
		window.addEventListener("resize", ResponsiveMenu);
	  }, []);

	return ( 
		<div className="w-full h-20 bg-white dark:bg-slate-900 sticky top-0 z-50 border-b-[1px] border-b-gray-200">
			<nav className="h-full px-4 max-w-container mx-auto relative">
				<FlexHeader className='flex items-center justify-between h-full'>
					<Link to='/'>
	{/*=======================Logo Image ============================*/}				
					<div className="w-16 h-16 overflow-hidden rounded-full">
						<Image className="w-full h-full object-cover" imgSrc={logo1} />
					</div>
					</Link>
	{/*=======================Dark Mode ============================*/}
					<div className="flex text-2xl">
						{dark ? (<MdDarkMode onClick={themeSwitch}/>) : (<MdOutlineLightMode className="dark:text-white" onClick={themeSwitch}/>)}					
					</div>

	{/*=======================Ul/Li Navbar ============================*/}
					<div>
						{showMenu && (
							<motion.ul
							initial={{ y: 30, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="flex items-center w-auto z-50 p-0 gap-2"
						>
	{/*======================= navBarList ============================*/}
						<>
							{navBarList.map(({_id, title, link }) =>(
								<NavLink
									key={_id}
									className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] dark:text-white hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
									to={link}
									state={{ data: location.pathname.split("/")[1] }}
								>
								<li className="dark:text-white dark:underline">{title}</li>
								</NavLink>
							))

							}
						</>
						</motion.ul>				
						)}
						
						<HiMenuAlt2
						onClick={() => setSidenav(!sidenav)}
						className="inline-block md:hidden dark:text-white cursor-pointer w-8 h-6 absolute top-6 right-4"
						/>
{/*=======================Nav Resize Respon ============================*/}					  
					{sidenav && (
						<div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200  bg-opacity-80 z-50">
						<motion.div
							initial={{ x: -300, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5 }}
							className="w-[80%] h-full relative"
						>
							<div className="w-full h-full bg-primeColor p-6">
{/*=======================Logo If Nav Resize ============================*/}								
							<div className="w-32 h-32 overflow-hidden text-center rounded-full">
							<Image className="w-full h-full object-cover" imgSrc={logo1} />
							</div>
							<ul className="text-gray-200 flex flex-col gap-2">
								{navBarList.map((item) => (
								<li
									className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
									key={item._id}
								>
									<NavLink
									to={item.link}
									state={{ data: location.pathname.split("/")[1] }}
									onClick={() => setSidenav(false)}
									>
									{item.title}
									</NavLink>
								</li>
								))}
							</ul>
							<div className="mt-4">
								<h1
								onClick={() => setCategory(!category)}
								className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
								>
								Shop by Category{" "}
								<span className="text-lg">{category ? "-" : "+"}</span>
								</h1>
								
								{category && (
								<motion.ul
									initial={{ y: 15, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.4 }}
									className="text-sm flex flex-col gap-1"
								>
									<Link to={"/shop"}><li className="headerSedenavLi">Heels</li></Link>
									<Link to={"/shop"}><li className="headerSedenavLi">Sandals</li></Link>
									<Link to={"/shop"}><li className="headerSedenavLi">Flats</li></Link>
									<Link to={"/shop"}><li className="headerSedenavLi">Sneakers</li></Link>
								</motion.ul>
								)}
							</div>
							<div className="mt-4">
								<h1
								onClick={() => setBrand(!brand)}
								className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
								>
								Shop by Company
								<span className="text-lg">{brand ? "-" : "+"}</span>
								</h1>

								{brand && (
								<motion.ul
									initial={{ y: 15, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.4 }}
									className="text-sm flex flex-col gap-1"
								>
								<Link to={"/shop"}><li className="headerSedenavLi">Nike</li></Link>
								<Link to={"/shop"}><li className="headerSedenavLi">Adidas</li></Link>
								<Link to={"/shop"}><li className="headerSedenavLi">Puma</li></Link>
								<Link to={"/shop"}><li className="headerSedenavLi">Vans</li></Link>
								</motion.ul>
								)}
							</div>
							</div>

							<span
							onClick={() => setSidenav(false)}
							className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
							>

							<MdClose />

							</span>

						</motion.div>
						</div>
					)}	
					</div>
				</FlexHeader>
			</nav>		
		</div>
	 );
}

export default Header;