import React from 'react';

const Pagination = ({ patientsPerPage, totalPatients ,paginate}) => {
	const pageNumber = [];
	for (let i = 1; i <= Math.ceil(totalPatients / patientsPerPage); i++) {
		pageNumber.push(i);
	}
	console.log(pageNumber);
	return (
		<nav className='m-5'>
			<ul className='pagination justify-content-center'>
				{pageNumber.map((number) => (
					<li key={number} className='page-item'>
						<a
							onClick={() => {
								paginate(number);
							}}
							className='page-link'
							style={{ color: 'rgb(80, 219, 180)' }}
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
