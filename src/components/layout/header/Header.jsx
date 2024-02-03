import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import scss from "./Header.module.scss";

const links = [
	{
		name: "MERSEDES♡",
		href: "/",
	},
	{
		name: "BMW♡",
		href: "/about",
	},
	{
		name: "TAYOTA",
		href: "/contact",
	},
];

const Header = () => {
	const location = useLocation();
	console.log(location.pathname);

	return (
		<>
			<header className={scss.Header}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.logo}>
							<h1>MAGAZIN MASHIN♡</h1>
						</div>

						<nav>
							<ul>
								{links.map((item, index) => (
									<li key={index}>
										<NavLink
											to={item.href}
											className={
												location.pathname === item.href
													? `${scss.link} ${scss.active}`
													: `${scss.link}`
											}>
											{item.name}
										</NavLink>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
