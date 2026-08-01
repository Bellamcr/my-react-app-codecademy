import Business from "./Business";

const businesses = [
    {}
];

function BusinessList () {
	return (
		<div>
            {businesses.map((business, index) => (
                <Business key={index} />
            ))};
        </div>
	);
}

export default BusinessList
