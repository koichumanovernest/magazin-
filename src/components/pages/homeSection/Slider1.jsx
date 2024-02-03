import scss from "./Slider.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalPge from "../modalPage/ModalPge";

const url =
	"https://api.elchocrud.pro/api/v1/bbaf2e9a9d387ca817842f5df8637d83/about";

const Slider1 = () => {
	const [data, setData] = useState([]);
	const [selectedCar, setSelectedCar] = useState(null);
	const [modal, setModal] = useState(false);

	const getTodos = async () => {
		const response = await axios.get(url);
		setData(response.data);
	};

	const openModal = (car) => {
		setSelectedCar(car);
		setModal(true);
	};

	const closeModal = () => {
		setSelectedCar(null);
		setModal(false);
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<div className={scss.parent}>
			{data.map((item) => (
				<div className={scss.open} key={item.id}>
					<div>
						<img className={scss.img} src={item.img} alt={item.title} />
					</div>
					<div>
						<button onClick={() => openModal(item)}>Open</button>
					</div>
				</div>
			))}

			<ModalPge modal={modal} onClose={closeModal}>
				{selectedCar && (
					<div className={scss.header}>
						<div className={scss.main}>
							<h1>{selectedCar.title}</ h1>
							<h2>{selectedCar.price}</h2>
							<img
								className={scss.img1}
								src={selectedCar.img}
								alt={selectedCar.title}
							/>
							<button onClick={() => closeModal(modal)}>close</button>
						</div>
					</div>
				)}
			</ModalPge>
		</div>
	);
};

export default Slider1;
