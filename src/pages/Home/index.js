import Banner from "./Banner";
import BannerBottom from "./BannerBottom";
import Sale from "./Sale"
import NewProducts from "./NewProducts"
import SpecialOffers from "./SpecialOffers"

function Home() {
	return ( 
		<div className="w-full mx-auto">
		<Banner/>
		<NewProducts/>
		<Sale/>
		<div className="max-w-container mx-auto px-4">
			<BannerBottom/>	
			<SpecialOffers/>
		</div>
		</div>
	);
}

export default Home;