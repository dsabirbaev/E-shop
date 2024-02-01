export interface ProductType {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	quantity: number;    ///// for localstorage to the card
	rating: { rate: number; count: number };
}