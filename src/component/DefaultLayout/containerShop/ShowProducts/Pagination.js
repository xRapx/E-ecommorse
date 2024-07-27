/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import Product from "../../Products/Product";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { data } from "../../../../contans/db";


//xét điều kiện để render item products
function Items ({currentItems,selectedCompany ,selectedCategories }){

	//when user filter	company && category
		const filterItems = currentItems.filter((item) =>{			
	//KHi người dùng chọn filter vào Brand sản phẩm
			const isCompanySelected = selectedCompany.length === 0 || selectedCompany.some((company) => company.title === item.company) 
	
	//khi người dùng chọn filter vào Loại sản phẩm		
			const isCategorySelected = selectedCategories.length === 0 || selectedCategories.some((category) => category.title === item.category) 
		
		return  isCompanySelected && isCategorySelected
		})
	
	
	return (
		<Fragment>
			{filterItems.map((item) =>(
				<div key={item._id} className="w-full">
					<Product
						_id={item._id}
						img={item.img}
						title={item.title}
						price={item.price}
						new_price={item.new_price}
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
function Pagination({itemsPerPage }) { // số lượng là 3

//Ban dầu page
	const [itemOffset, setItemOffset] = useState(0);
//Khởi đầu page
	const [itemStart, setItemStart] = useState(1)
//kết thúc page
	const endOffset = itemOffset + itemsPerPage;

	const currentItems = data.slice(itemOffset, endOffset);
	console.log(currentItems)
	

//useSelector gửi payload sản phẩm được chọn về Kho lưu trữ store trong reducer trả về true/false
	const selectedCompany = useSelector(
		(state) => state.company.checkedCompany
	);
	const selectedCategories = useSelector(
		(state) => state.categories.checkedCategorys
	);
	
	const pageCount = Math.ceil(data.length / itemsPerPage);

	const handlePageClick = (event) =>{
		console.log(event)
		
// để mảng item mới ko vượt quá 48 thì tính từ nơi Selected 0 * 48 % 48 = 0 
		const newOffset = (event.selected * itemsPerPage)  % data.length 

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
			selectedCompany={selectedCompany}
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

			<p className="text-base font-normal text-lightText dark:text-white">
			Products from {itemStart} to {Math.min(endOffset, data.length)} of{" "}
			{data.length}
			</p>
			<button className="dark:text-white" onClick={() => console.log(selectedCompany)}> Next Page</button>
		</div>
	  </div>
	 );
}

export default Pagination;