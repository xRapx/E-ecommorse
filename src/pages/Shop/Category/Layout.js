import { Link } from "react-router-dom"

function Layout () {
	return (
		<section className="bg-white">
			<div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
					<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
						<Link href="/shop" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
							<img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Food" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
							<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
							<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Food</h3>
						</Link>
					</div>
					<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
						<Link href="/shop" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
							<img src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Fashion" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
							<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
							<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Fashion</h3>
						</Link>
						<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
							<Link href="/shop" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
								<img src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Device" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
								<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Device</h3>
							</Link>
							<Link href="/shop" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
								<img src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cosmetics" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
								<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
								<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Cosmetics</h3>
							</Link>
						</div>
					</div>
					<div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
						<Link href="/shop" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
							<img src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Household appliances" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
							<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
							<h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Household appliances</h3>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Layout