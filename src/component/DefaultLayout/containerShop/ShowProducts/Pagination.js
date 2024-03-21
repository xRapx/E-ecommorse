/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useState } from "react";
// import {cateloryItems} from "../../../../contans"
import Product from "../../Products/Product";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { setupServer } from "../../../../Server/mirageServer";

//use Server
setupServer()



//xét điều kiện để render item products
function Items ({currentItems,selectedBrands ,selectedCategories}){
	// Filter item when user selected on base
		const filterItems = currentItems.filter((item) =>{
	//KHi người dùng chọn filter vào Brand sản phẩm
			const isBrandSelected = selectedBrands.length === 0 || selectedBrands.some((brand) => brand.title === item.brand) 
	
	//khi người dùng chọn filter vào Loại sản phẩm		
			const isCategorySelected = selectedCategories.length === 0 || selectedCategories.some((category) => category.title === item.cat) 
		
		return  isBrandSelected && isCategorySelected
		})
	
	return (
		<Fragment>
			{filterItems.map((item) =>(
				<div key={item._id} className="w-full">
					<Product
						_id={item._id}
						img={item.img}
						productName={item.productName}
						price={item.price}
						color={item.color}
						badge={item.badge}
						des={item.des}
						pdf={item.pdf}
						ficheTech={item.ficheTech}
					/>
				</div>

			))}
		</Fragment>
	)
}
// Mặc định 1 trang có 48 item
function Pagination({itemsPerPage}) { // số lượng là 3
//Ban dầu page
	const [itemOffset, setItemOffset] = useState(0);
//Khởi đầu page
	const [itemStart, setItemStart] = useState(1)
//kết thúc page
	const endOffset = itemOffset + itemsPerPage;

	const [value , setValue] = useState([])
	console.log(value)

	useEffect(() => {
		const URL = "/contans/products"
		const fetchData = async () => {
			try {
				const response = await fetch(URL);
				const data = await response.json();
				setValue(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
	
		fetchData();
	}, []);

	const currentItems = value.slice(itemOffset, endOffset);

//useSelector gửi payload sản phẩm được chọn về Kho lưu trữ store trong reducer trả về true/false
	const selectedBrands = useSelector(
		(state) => state.ecommorseReducer.checkedBrands
	);
	const selectedCategories = useSelector(
		(state) => state.ecommorseReducer.checkedCategorys
	);
	
	const pageCount = Math.ceil(value.length / itemsPerPage);

	const handlePageClick = (event) =>{
		console.log(event)
		
// để mảng item mới ko vượt quá 48 thì tính từ nơi Selected 0 * 48 % 48 = 0 
		const newOffset = (event.selected * itemsPerPage)  % value.length 

// 0 + 1 = 1 newStart trang mới
		const newStart = newOffset + 1;

// Set lại state khi chuyển page
	setItemOffset(newOffset) // bắt đầu lại trang từ 1
	setItemStart(newStart)	// chuyển mới thì bầng 2

	}

	return ( 
		<div>
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
		
		<Items
			currentItems={currentItems}
			selectedBrands={selectedBrands}
			selectedCategories={selectedCategories}
	 	 />{" "}

		</div>
		<div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
		  <ReactPaginate
		  	nextLabel="" 					
			onPageChange={handlePageClick} // xử lý hàm phân trang
			pageRangeDisplayed={2}         // Số lượng nút trang được hiển thị trong thanh phân trang.
			marginPagesDisplayed={2}	  // Số lượng nút trang ở hai đầu thanh phân trang. 
			pageCount={pageCount}		
			previousLabel=""
			pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
			pageClassName="mr-6"
			containerClassName="flex text-base font-semibold font-titleFont py-10"
			activeClassName="bg-black text-white"
			/>

			<p className="text-base font-normal text-lightText">
			Products from {itemStart} to {Math.min(endOffset, value.length)} of{" "}
			{value.length}
			</p>
			<button onClick={() => console.log(selectedBrands)}> Next Page</button>
		</div>
	  </div>
	 );
}

export default Pagination;