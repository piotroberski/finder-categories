import React, { useState } from "react";
import icons from "./icons/icons.svg";
import tilesData from "./tilesData";
import "./App.css";

const Tile = ({ iconID, title }) => (
	<a className="Tile" href="https://www.finder.com.au/">
		<svg className="Tile__icon">
			<use xlinkHref={`${icons}#${iconID}`} />
		</svg>
		<h3 className="Tile__title">{title}</h3>
	</a>
);

const App = () => {
	const [showMore, setShowMore] = useState(false);
	const [toggleText, setToggleText] = useState("Show more categories");
	const tiles = showMore ? tilesData : tilesData.slice(0, 6);

	const toggleTiles = () => {
		setShowMore(!showMore);
		setToggleText(showMore ? "Show more categories" : "Show less categories");
	};

	return (
		<div className="App">
			<section className="Home">
				<div className="Container">
					<div className="Intro">
						<h2>Join 2 million+ Australians finding better</h2>
						<p>
							Finder's team of 40+ experts will help you find the right choices
							in over 100 categories.
						</p>
					</div>
					<div className="Tiles">
						{tiles.map(({ iconID, title }, index) => (
							<Tile key={`${index}-${title}`} title={title} iconID={iconID} />
						))}
					</div>
					<div className="ToggleButtonWrapper">
						<button
							className="ToggleButtonWrapper__Button"
							title="Toggle categories"
							onClick={toggleTiles}
						>
							{toggleText}
							<svg>
								<use
									xlinkHref={`${icons}#${
										showMore ? "chevron-up" : "chevron-down"
									}`}
								/>
							</svg>
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default App;
