import Banner from "./Banner";
import BannerBottom from "./BannerBottom";
import Sale from "./Sale"
import NewProducts from "./NewProducts"
import BestSeller from "./BestSeller"
import YearProducts from "./YearProducts"
import SpecialOffers from "./SpecialOffers"

function Home() {
	return ( 
		<div className="w-full mx-auto">
		<Banner/>
		<BannerBottom/>
		<div className="max-w-container mx-auto px-4">
			<Sale/>
			<NewProducts/>
			<BestSeller/>
			<YearProducts/>
			<SpecialOffers/>
		</div>
		</div>
	);
}

export default Home;