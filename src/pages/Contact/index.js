import { useEffect, useState } from "react";
import Breadcrumbs from "../../component/DefaultLayout/containerShop/Breadcrumbs";
import { useLocation } from "react-router-dom";


function Contact() {
	const location = useLocation();
  	console.log(location)
  	const [prevLocation, setPrevLocation] = useState("");
  	useEffect(() => {
		setPrevLocation(location.state.data);
	}, [location]);

	const [clientName , setClientNames] = useState("")
	const [email , setEmai] = useState("")
	const [messages , setMessages] = useState("")

	// Error message====================
	const [errClientName, setErrClientName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errMessages, setErrMessage] = useState("");
    // Success message====================
    const [successMsg, setSuccessMsg] = useState("");

    // Event Handler====================
    const handleName = (e) => {
        setClientNames(e.target.value);
        setErrClientName("");
    };
    const handleEmail = (e) => {
        setEmai(e.target.value);
        setErrEmail("");
    };
    const handleMessages = (e) => {
        setMessages(e.target.value);
        setErrMessage("");
    };

	// validate
	  // ================= Email Validation start here =============
	  const EmailValidation = (email) => {
		return String(email)
		  .toLowerCase()
		  .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
	  };
	  // ================= Email Validation End here ===============
    const data = {
        name :clientName,
        email :email,
        messages :messages,
    }

	// Post form
	const handlePost = (e) => {
		e.preventDefault();
		if (!data.clientName) {
		  setErrClientName("Enter your Name");
		}
		if (!data.email) {
		  setErrEmail("Enter your Email");
		} else {
		  if (!EmailValidation(email)) {
			setErrEmail("Enter a Valid Email");
		  }
		}
		if (!data.messages) {
			setErrMessage("Enter your Messages");
		}
		if (clientName && email && EmailValidation(email) && data.messages) {
		  setSuccessMsg(
			`Thank you dear ${clientName}, Your messages has been received successfully. Futher details will sent to you by your email at ${email}.`
		  );
		}
	  };

	return (
		<div className="max-w-container mx-auto px-4 ">
		  <Breadcrumbs title="Contact" prevLocation={prevLocation} />
		  {successMsg ? (
			<p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
		  ) : (
			<div className="flex justify-center mx-auto">
				<form className="pb-20 ">
				  <h1 className="font-titleFont font-semibold text-3xl dark:text-white">
					Fill up a Form
				  </h1>
				  <div className="w-[500px] h-auto py-6 flex flex-col gap-6 ">
					<div>
					  <p className="text-base font-titleFont font-semibold px-2 dark:text-white">
						Name
					  </p>
					  <input
						onChange={handleName}
						value={clientName}
						className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
						type="text"
						placeholder="Enter your name here"
					  />
					  {errClientName && (
						<p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1 ">
						  <span className="text-sm italic font-bold">!</span>
						  {errClientName}
						</p>
					  )}
					</div>
					<div>
					  <p className="text-base font-titleFont font-semibold px-2 dark:text-white">
						Email
					  </p>
					  <input
						onChange={handleEmail}
						value={email}
						className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
						type="email"
						placeholder="Enter your name here"
					  />
					  {errEmail && (
						<p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
						  <span className="text-sm italic font-bold">!</span>
						  {errEmail}
						</p>
					  )}
					</div>
					<div>
					  <p className="text-base font-titleFont font-semibold px-2 dark:text-white">
						Messages
					  </p>
					  <textarea
						onChange={handleMessages}
						value={messages}
						cols="30"
						rows="3"
						className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
						type="text"
						placeholder="Enter your name here"
					  ></textarea>
					  {errMessages && (
						<p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
						  <span className="text-sm italic font-bold">!</span>
						  {errMessages}
						</p>
					  )}
					</div>
					<button
					  onClick={handlePost}
					  className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
					>
					  Post
					</button>
				  </div>
				</form>
			</div>
		  )}
		</div>
	  );
}

export default Contact;