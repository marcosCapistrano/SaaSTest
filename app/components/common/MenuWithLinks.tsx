import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NextRouter, withRouter } from 'next/router';
import Link from 'next/link';

type Option = {
	text?: string;
	href?: string;
	as?: string;
	separator?: boolean;
};

type Props = {
	options: Option[];
	router: NextRouter;
	children: React.ReactNode;
};

function MenuWithLinks({ options, router, children }: Props): JSX.Element {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<div
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
			>
				{children}
			</div>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{options.map((option, i) =>
					option.separator ? (
						<hr
							style={{ width: '85%', margin: '10px auto' }}
							key={`separated-${i}`}
						/>
					) : (
						<Link key={option.href} href={option.href} as={option.as} passHref>
							<MenuItem
								key={option.href}
								style={{
									fontWeight: router.asPath.includes(option.href) ? 600 : 300,
									fontSize: '14px',
								}}
							>
								{option.text}
							</MenuItem>
						</Link>
					)
				)}
			</Menu>
		</div>
	);
}

export default withRouter(MenuWithLinks);
