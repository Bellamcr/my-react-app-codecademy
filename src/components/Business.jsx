import './Business.css';

const business = {
	imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
	name: 'MarginOtto Pizzeria',
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'NY',
	zipCode: '10101',
	category: 'Italian',
	rating: 4.5,
	reviewCount: 90,
};

function Business() {
	return (
		<div className='Business'>
			<h2>{business.name}</h2>
			<img
				src={business.imageSrc}
				alt={business.name}
			/>
			<div className='Business-info'>
				<div className='Business-address'>
					<p>{business.name}</p>
					<p>{business.city}</p>
					<p>{business.state}</p>
					<p>{business.zipCode}</p>
				</div>

				<div className='Business-reviews'>
					<p className='rating'>{business.rating} stars</p>
					<p>{business.reviewCount} reviews</p>
				</div>
			</div>
		</div>
	);
}

export default Business;
