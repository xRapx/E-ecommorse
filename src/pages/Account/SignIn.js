import { Link } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";
import { useState } from "react";
// import { toast } from "react-toastify";


import { useDispatch } from "react-redux";
import logo from "../../assets/images/unnamed.png"
import axios from "axios";
import { login } from "../../redux/reducer/userReducer";


const SignIn = () => {

	const dispatch = useDispatch()

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// ============= Error Msg Start here =================
	const [errEmail, setErrEmail] = useState("");
	const [errPassword, setErrPassword] = useState("");
	// ============= Login Success =================
	const [successMsg, setSuccessMsg] = useState("");

	// ============= Event Handler Start here =============
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setErrEmail("");
	};
	  const handlePassword = (e) => {
		setPassword(e.target.value);
		setErrPassword("");
	};
	
	// ===================Form Submit==================
	const handleSignIn = async (e) => {
		e.preventDefault();
	
		if (!email) {
		  setErrEmail("Enter your email");
		}
	
		if (!password) {
		  setErrPassword("Create a password");
		}
		// ============== Getting the value ==============
		// if (email && password) {
		//   setSuccessMsg(
		// 	`Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
		//   );
		//   setEmail("");
		//   setPassword("");
		// }
		// Post Data
		const data = {
			email :email,
			password : password
		}
		try {
			const response = await axios.post(`https://server-ecommorse.onrender.com/v1/api/shop/login`, data , {
				headers: {
					"x-api-key": "7f014f313dacca10fa7fe4c46a82f8cceb865c00a52d31c7149c841f2dab12e4cb1dfd77e2287f305427d53f5210718b5d8ec0b35190f6f1f83bcf2b0d1f08d3"
				}
			});
			const userToken = response.data.metadata.tokens.accessToken;
			dispatch(login(userToken))
			window.location.href = "/";

		  } catch (error) {
			if (error.response && error.response.status === 403) {
				alert('Failed to login:');
			  }
			  setSuccessMsg(
				`Hello dear, Thank you for your attempt. But Account not register , Please Signup and continue Login with ${email}`
			  );
			  setEmail("");
			  setPassword("");
			// Xử lý lỗi tại đây, ví dụ: hiển thị thông báo lỗi cho người dùng
		  }

	  };

	return (
		<div className="w-full h-screen flex items-center justify-center">
		  <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
			<div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
			  <Link to="/">
				<img src={logo} alt="logoImg" className="w-28" />
			  </Link>
			  <div className="flex flex-col gap-1 -mt-1">
				<h1 className="font-titleFont text-xl font-medium">
				  Stay sign in for more
				</h1>
				<p className="text-base">When you sign in, you are with us!</p>
			  </div>
			  <div className="w-[300px] flex items-start gap-3">
				<span className="text-green-500 mt-1">
				  <BsCheckCircleFill />
				</span>
				<p className="text-base text-gray-300">
				  <span className="text-white font-semibold font-titleFont">
					Get started fast with E-commorse
				  </span>
				  <br />
				  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
				  nisi dolor recusandae consectetur!
				</p>
			  </div>
			  <div className="w-[300px] flex items-start gap-3">
				<span className="text-green-500 mt-1">
				  <BsCheckCircleFill />
				</span>
				<p className="text-base text-gray-300">
				  <span className="text-white font-semibold font-titleFont">
					Access all E-commorse services
				  </span>
				  <br />
				  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
				  nisi dolor recusandae consectetur!
				</p>
			  </div>
			  <div className="w-[300px] flex items-start gap-3">
				<span className="text-green-500 mt-1">
				  <BsCheckCircleFill />
				</span>
				<p className="text-base text-gray-300">
				  <span className="text-white font-semibold font-titleFont">
					Trusted by online Shoppers
				  </span>
				  <br />
				  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
				  nisi dolor recusandae consectetur!
				</p>
			  </div>
			  <div className="flex items-center justify-between mt-10">
				<Link to="/">
				  <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
					© E-commorse
				  </p>
				</Link>
				<p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
				  Terms
				</p>
				<p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
				  Privacy
				</p>
				<p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
				  Security
				</p>
			  </div>
			</div>
		  </div>
		  <div className="w-full lgl:w-1/2 h-full">
			{successMsg ? (
			  <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
				<p className="w-full px-4 py-10 text-red-500 font-medium font-titleFont">
				  {successMsg}
				</p>
				<Link to="/signup">
				  <button
					className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
				tracking-wide hover:bg-black hover:text-white duration-300"
				  >
					Sign Up
				  </button>
				</Link>
			  </div>
			) : (
			  <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
				<div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center">
				  <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
					Sign in
				  </h1>
				  <div className="flex flex-col gap-3">
					{/* Email */}
					<div className="flex flex-col gap-.5">
					  <p className="font-titleFont text-base font-semibold text-gray-600">
						Work Email
					  </p>
					  <input
						onChange={handleEmail}
						value={email}
						className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
						type="email"
						placeholder="john@workemail.com"
					  />
					  {errEmail && (
						<p className="text-sm text-red-500 font-titleFont font-semibold px-4">
						  <span className="font-bold italic mr-1">!</span>
						  {errEmail}
						</p>
					  )}
					</div>
	
					{/* Password */}
					<div className="flex flex-col gap-.5">
					  <p className="font-titleFont text-base font-semibold text-gray-600">
						Password
					  </p>
					  <input
						onChange={handlePassword}
						value={password}
						className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
						type="password"
						placeholder="Create password"
					  />
					  {errPassword && (
						<p className="text-sm text-red-500 font-titleFont font-semibold px-4">
						  <span className="font-bold italic mr-1">!</span>
						  {errPassword}
						</p>
					  )}
					</div>
	
					<button
					  onClick={handleSignIn}
					  className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
					>
					  Sign In
					</button>
					<p className="text-sm text-center font-titleFont font-medium">
					  Don't have an Account?{" "}
					  <Link to="/signup">
						<span className="hover:text-blue-600 duration-300">
						  Sign up
						</span>
					  </Link>
					</p>
				  </div>
				</div>
			  </form>
			)}
		  </div>
		</div>
	  ); 
}
export default SignIn;