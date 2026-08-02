import './Business.css';


function Business({business}) {
	return (
		<div className='Business'>
			<img
				src={business.imageSrc}
				alt={business.name}
			/>
			
			<h2>{business.name}</h2>
			
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
