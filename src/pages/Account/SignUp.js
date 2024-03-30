import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo1.jpg"
import { BsCheckCircleFill } from "react-icons/bs";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
import { login } from "../../redux/reducer/userReducer";


const SignUp = () => {

	const [clientName, setClientName] = useState("");
  	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [checked, setChecked] = useState(false);

	const dispatch = useDispatch()

	// ============= Error Msg  =================
	const [errClientName, setErrClientName] = useState("");
	const [errEmail, setErrEmail] = useState("");
	const [errPassword, setErrPassword] = useState("");
	// ============= Success Msg  =================
	const [successMsg, setSuccessMsg] = useState("");

	// ============= Event Handler  =============
	const handleName = (e) => {
		setClientName(e.target.value);
		setErrClientName("");
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setErrEmail("");
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setErrPassword("");
	};
	// ===========Validate Email============
	const EmailValidation = (email) => {
		return String(email)
		  .toLowerCase()
		  .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
	};

	// ============ Sign Up Form=================
	const dataSignUp = {
		clientName: clientName,
		email: email,
		password: password,
	}

	const handleSignUp = async (e) => {
		e.preventDefault();
		if (checked) {
		  if (!clientName) {
			setErrClientName("Enter your name");
		  }
		  if (!email) {
			setErrEmail("Enter your email");
		  } else {
			if (!EmailValidation(email)) {
			  setErrEmail("Enter a Valid email");
			}
		  }
		  if (!password) {
			setErrPassword("Create a password");
		  } else {
			if (password.length < 6) {
			  setErrPassword("Passwords must be at least 6 characters");
			}
		  }
		  // ============== Getting the value ==============
		//   if (
		// 	clientName &&
		// 	email &&
		// 	EmailValidation(email) &&
		// 	password &&
		// 	password.length >= 6
		//   )

		//   Submit form SignUp when checked = true
		try {
			const response = await axios.post(`https://server-ecommorse.onrender.com/v1/api/shop/signup`, dataSignUp , {
			  headers: {
				"x-api-key": "7f014f313dacca10fa7fe4c46a82f8cceb865c00a52d31c7149c841f2dab12e4cb1dfd77e2287f305427d53f5210718b5d8ec0b35190f6f1f83bcf2b0d1f08d3"
			  }
			});
		  
			const userToken = response.data.metadata.tokens.accessToken;
			dispatch(login(userToken))		
			window.location.href = "/signin";
		  
		  } catch (error) {
			if (error.response && error.response.status === 403) {
			  alert('Tài khoản đăng ký đã tồn tại!');
			}
			setSuccessMsg(
				`Hello dear ${clientName}, Welcome you to E-commorse Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
			  );
			setClientName("");
			setEmail("");
			setPassword("");
		  }
		  
		}		
	  };


	return (
		<div className="w-full h-screen flex items-center justify-start">
		  <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
			<div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
			  <Link to="/">
				<img src={logo} alt="logoImg" className="w-28" />
			  </Link>
			  <div className="flex flex-col gap-1 -mt-1">
				<h1 className="font-titleFont text-xl font-medium">
				  Get started for free
				</h1>
				<p className="text-base">Create your account to access more</p>
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
				<p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
				  © E-commorse
				</p>
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
		  <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
			{successMsg ? (
			  <div className="w-[500px]">
				<p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
				  {successMsg}
				</p>
				<Link to="/signin">
				  <button
					className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
				tracking-wide hover:bg-black hover:text-white duration-300"
				  >
					Sign in
				  </button>
				</Link>
			  </div>
			) : (
			  <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center" >
				<div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start">
				  <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
					Create your account
				  </h1>
				  <div className="flex flex-col gap-3">
					{/* client name */}
					<div className="flex flex-col gap-.5">
					  <p className="font-titleFont text-base font-semibold text-gray-600">
						Full Name
					  </p>
					  <input
						onChange={handleName}
						value={clientName}
						className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
						type="text"
						placeholder="eg. John Doe"
					  />
					  {errClientName && (
						<p className="text-sm text-red-500 font-titleFont font-semibold px-4">
						  <span className="font-bold italic mr-1">!</span>
						  {errClientName}
						</p>
					  )}
					</div>
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
					{/* Checkbox */}
					<div className="flex items-start mdl:items-center gap-2">
					  <input
						onChange={() => setChecked(!checked)}
						className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
						type="checkbox"
					  />
					  <p className="text-sm text-primeColor">
						I agree to the Service{" "}
						<span className="text-blue-500">Terms of Service </span>and{" "}
						<span className="text-blue-500">Privacy Policy</span>.
					  </p>
					</div>
					<button
					  onClick={handleSignUp}
					  className={`${
						checked
						  ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
						  : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
					  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
					>
					  Create Account
					</button>
					<p className="text-sm text-center font-titleFont font-medium">
					  Don't have an Account?{" "}
					  <Link to="/signin">
						<span className="hover:text-blue-600 duration-300">
						  Sign in
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

export default SignUp;