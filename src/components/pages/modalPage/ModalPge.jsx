import scss from "./ModalPage.module.scss"

const ModalPge = ({ modal, isClose, children }) => {
	if (!modal) {
		return null;
	}
	return (
		<>
			<div className={scss.isClose} onClick={isClose}>
				<div className={scss.children}>{children}
        
        </div>
			</div>
		</>
	);
};

export default ModalPge;
