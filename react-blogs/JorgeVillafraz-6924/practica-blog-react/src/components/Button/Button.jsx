import './Button.scss';

const Button = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className='button button-primary'>
			{children}
		</button>
	);
};

export default Button;
