import React from 'react';
import './navbar.css';
import Heart from './Heart';

const NavbarComp = () => {
	return (
		<div>
			<div className='nav-backgrouond'>
					<div className='row'>
						<div className='col-2'>
							<Heart />
						</div>
						<div className='col-8'>
							<h1 className='text-center text-prop'>HELIOS HOSPITAL</h1>
						</div>
					</div>
				</div>
			</div>
	);
};

export default NavbarComp;
