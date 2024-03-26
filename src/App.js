/* eslint-disable no-lone-blocks */

import {Outlet, Route, RouterProvider, ScrollRestoration, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './component/DefaultLayout/Header';
import HeaderBottom from './component/DefaultLayout/Header/HeaderBottom';
import Cart from './pages/Cart';
import SignUp from './pages/Account/SignUp';
import SignIn from './pages/Account/SignIn';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Offer from './pages/Offer/Offer';
import Special from './component/Special/Special';
import Footer from './pages/Footer/Footer';

{/*====================Layout Component==================== */}
const Layout = () =>{

  return(
    <div>
        <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
        <Header />
        <HeaderBottom />
        <Special/>
        <ScrollRestoration />
        <Outlet />
        <Footer/>
    </div>
  )
}

 {/*====================Value Props Routers==================== */}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path="/" element={<Layout />} >
          {/*====================Children Layout==================== */}
          <Route index element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/admin" element={<pagesAD />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        {/*====================Product==================== */}
          <Route path="/category/:category" element={<Offer />}></Route>
          <Route path="/product/:_id" element={<ProductDetails />}></Route>
        </Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
    </Route>
  )
)

function App() {
  return (
    <div className="font-bodyFont">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
