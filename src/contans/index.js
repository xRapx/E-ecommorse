import catelory1 from "../assets/images/unnamed.png"
// =================== NavBarList Start here ====================
export const navBarList = [
	{
	  _id: 1001,
	  title: "Home",
	  link: "/",
	},
	{
	  _id: 1002,
	  title: "Shop",
	  link: "/shop",
	},
	{
	  _id: 1003,
	  title: "About",
	  link: "/about",
	},
	{
	  _id: 1004,
	  title: "Contact",
	  link: "contact",
	},
  ];
  // =================== NavBarList End here ======================
  
  // =================== Serach Catelory ====================
  export const cateloryItems = [
	{
	  _id: "001",
	  img: catelory1,
	  productName: "catelory 1",
	  price: "35.00",
	  color: "Blanc",
	  badge: true,
	  brand: "Pantum",
	  des: "Imprimante Laser PANTUM Couleur - Fonctions: Impression  - Technologie d'impression: Laser - Format Papier: A4 - Vitesse d’impression(Couleur/N&B): 24 ppm (A4) / 26 ppm (Lettre) - Résolution d'impression: 600 x 600 dpi - Sortie papier: 100 page - Mémoire: Double cœur, 1 GHz - Impression recto verso: Automatique - Heure de la première impression: Moins de 11s  - Connecteurs: USB 2.0 haut débit Ethernet 10/100/1000 BaseTX (RJ-45) 802.11b/g/n Sans fil - Dimensions: 411.2 x 394.1 x 243.7mm - Poids: 16,1 kg - Couleur: Blanc",
	  cat: "catelory 1",
	  ficheTech: [
		{ label: "Name : Descreption 1 ", value: "Text : Descreption 1" },
		{ label: "Print speed ", value: "22 ppm (A4)/23 ppm (Letter)" },
  
		{ label: "First print out time ", value: "Less than 7.8s       " },
		{ label: "Maximum Monthly Duty Cycle", value: "15,000 pages " },
		{
		  label: "Recommended monthly volume Resolution(dpi) ",
		  value: "700 pages ",
		},
		{ label: "Printer language Duplex Mode ", value: "Max. 1,200×1,200 " },
		{ label: "Printer  ", value: "Max. 1,2   " },
		{ label: "galass  ", value: "Max. 1,2   " },
	  ],
	},]